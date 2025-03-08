<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";

import {
  getProjectById,
  getTemplateById,
  getSubmissionsByProjectId,
  saveSubmission,
} from "@/lib/storage";
import { Project, Template, FormSubmission, Field } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import RenderForm from "@/components/ui/render-form";
import { inputTypes } from "@/constants/constants";

type TypeFile = {
  name: string;
  file: File;
};

type FileCollection = {
  [key: string]: TypeFile;
};
=======

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Plus, Calendar } from 'lucide-react';
import { getProjectById, getTemplateById, getSubmissionsByProjectId } from '@/lib/storage';
import { Project, Template, FormSubmission } from '@/lib/types';
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
<<<<<<< HEAD
  const { toast } = useToast();
  const [project, setProject] = useState<Project | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [files, setFiles] = useState<FileCollection>({});
  const [previewFile, setPreviewFile] = useState<File | undefined>();
=======
  const [project, setProject] = useState<Project | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf

  useEffect(() => {
    if (!id) return;

    const loadProjectData = () => {
      const projectData = getProjectById(id);
<<<<<<< HEAD

      if (projectData) {
        setProject(projectData);

=======
      
      if (projectData) {
        setProject(projectData);
        
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
        const templateData = getTemplateById(projectData.templateId);
        if (templateData) {
          setTemplate(templateData);
        }
<<<<<<< HEAD

=======
        
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
        const submissionsData = getSubmissionsByProjectId(id);
        setSubmissions(submissionsData);
      }
    };
<<<<<<< HEAD

    loadProjectData();
  }, [id]);

  const handleInputChange = (fieldId: string, value: any) => {
    setFormValues({
      ...formValues,
      [fieldId]: value,
    });
  };

  const handleCheckboxChange = (
    fieldId: string,
    option: string,
    checked: boolean
  ) => {
    const currentValues = formValues[fieldId] || [];

    let newValues;
    if (checked) {
      newValues = [...currentValues, option];
    } else {
      newValues = currentValues.filter((val: string) => val !== option);
    }

    setFormValues({
      ...formValues,
      [fieldId]: newValues,
    });
  };

  const validateForm = () => {
    if (!template) return false;

    let isValid = true;
    const errors: string[] = [];

    template.fields.forEach((field) => {
      if (field.required) {
        const value = formValues[field.id];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          isValid = false;
          errors.push(`${field.label} is required`);
        }
      }
    });

    if (!isValid) {
      toast({
        title: "Validation Error",
        description: errors.join(", "),
        variant: "destructive",
      });
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm() || !project || !template) return;

    const submission: FormSubmission = {
      id: Date.now().toString(),
      projectId: project.id,
      templateId: template.id,
      values: formValues,
      submittedAt: new Date().toISOString(),
    };

    saveSubmission(submission);
    toast({
      title: "Success",
      description: "Form submitted successfully",
    });

    const submissionsData = getSubmissionsByProjectId(id);
    setSubmissions(submissionsData);
    const fileField: Field = template.fields.find(
      (field) => field.type === inputTypes.file.toLowerCase()
    );

    const newFile: File = formValues[fileField.id];
    setFiles((prev) => ({
      ...prev,
      [submission.id]: { name: newFile.name, file: newFile },
    }));
    setFormValues({});

    // navigate(`/projects/${id}`);
  };

  console.log("file", files);

  const tableHeading: Array<string> = ((template && template.fields) || []).map(
    (f) => f.label
  );

=======
    
    loadProjectData();
  }, [id]);

>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
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

<<<<<<< HEAD
  const ImagePreviewModal = () => {
    if (!previewFile) return null; // Hide if no image is selected
    const imageSrc = URL.createObjectURL(previewFile);

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative">
          <button
            onClick={() => setPreviewFile(undefined)}
            className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
          >
            ✕
          </button>
          <img
            src={imageSrc}
            alt="Preview"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    );
  };

=======
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
  return (
    <Layout>
      <div className="space-y-6 py-6">
        <div className="flex items-center gap-4">
<<<<<<< HEAD
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/projects")}
          >
=======
          <Button variant="outline" size="icon" onClick={() => navigate('/projects')}>
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h2 className="text-3xl font-display font-semibold tracking-tight">
              {project.name}
            </h2>
<<<<<<< HEAD
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="border rounded-md overflow-auto">
              <table className="w-full  ">
                <thead>
                  <tr className="bg-muted/50">
                    {tableHeading.map((head) => (
                      <th className="text-left p-3 min-w-[150px] border ">
                        {head}
                      </th>
                    ))}
                    <th className="text-left p-3 min-w-[150px] border ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="border-t">
                      {Object.values(submission.values).map((val, index) => {
                        let value = val;

                        if (typeof value === "object") {
                          const inputType = (template.fields || []).find(
                            (f) =>
                              f.id === Object.keys(submission.values)[index]
                          ).type;

                          if (inputType === inputTypes.checkbox.toLowerCase()) {
                            value = Array(value).join(",");
                          }
                          if (inputType === inputTypes.file.toLowerCase()) {
                            value = files?.[submission.id]?.name || "";
                          }
                        }
                        return (
                          <td className={`p-3 min-w-[150px] border`}>
                            {value}
                          </td>
                        );
                      })}
                      <td className={`p-3 min-w-[150px] border`}>
                        {files?.[submission.id]?.file && (
                          <Button
                            onClick={() =>
                              setPreviewFile(files?.[submission.id]?.file)
                            }
                            variant="outline"
                            size="sm"
                          >
                            Preview
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr key={`projects-${id}`} className="border-t">
                    {template.fields.map((field: Field) => (
                      <td className={`p-3 min-w-[150px] border`}>
                        <div key={field.id} className="space-y-2">
                          {
                            <RenderForm
                              key={field.id}
                              field={field}
                              handleCheckboxChange={handleCheckboxChange}
                              handleInputChange={handleInputChange}
                              setFormValues={setFormValues}
                              formValues={formValues}
                            />
                          }
                        </div>
                      </td>
                    ))}
                    <td className={`p-3 min-w-[150px] border`}>
                      <Button size="sm" onClick={handleSubmit}>
                        <Save className="mr-2 h-4 w-4" />
                        Submit
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      {previewFile && <ImagePreviewModal />}
=======
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
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    </Layout>
  );
};

export default ProjectDetail;
