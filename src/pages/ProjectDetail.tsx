
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Plus, Calendar } from 'lucide-react';
import { getProjectById, getTemplateById, getSubmissionsByProjectId } from '@/lib/storage';
import { Project, Template, FormSubmission } from '@/lib/types';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);

  useEffect(() => {
    if (!id) return;

    const loadProjectData = () => {
      const projectData = getProjectById(id);
      
      if (projectData) {
        setProject(projectData);
        
        const templateData = getTemplateById(projectData.templateId);
        if (templateData) {
          setTemplate(templateData);
        }
        
        const submissionsData = getSubmissionsByProjectId(id);
        setSubmissions(submissionsData);
      }
    };
    
    loadProjectData();
  }, [id]);

  if (!project || !template) {
    return (
      <Layout>
        <div className="py-6">
          <Card>
            <CardContent className="p-6 flex items-center justify-center min-h-[200px]">
              <p>Project not found or loading...</p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6 py-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate('/projects')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h2 className="text-3xl font-display font-semibold tracking-tight">
              {project.name}
            </h2>
            <p className="text-muted-foreground">
              {project.description}
            </p>
          </div>
          <Button asChild>
            <Link to={`/projects/${id}/form`}>
              <Plus className="mr-2 h-4 w-4" />
              New Submission
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Form Submissions</CardTitle>
            <CardDescription>
              View all submissions for this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="border rounded-md p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  No submissions yet. Create your first submission.
                </p>
                <Button asChild>
                  <Link to={`/projects/${id}/form`}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Submission
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="border rounded-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3">Submission ID</th>
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="border-t">
                        <td className="p-3">{submission.id.substring(0, 8)}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            {new Date(submission.submittedAt).toLocaleString()}
                          </div>
                        </td>
                        <td className="p-3">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/projects/${id}/submission/${submission.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
