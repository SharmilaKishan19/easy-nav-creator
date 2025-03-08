<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { getProjectById, getTemplateById, saveSubmission } from "@/lib/storage";
import { Project, Template, Field, FormSubmission } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import RenderForm from "@/components/ui/render-form";
=======

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getProjectById, getTemplateById, saveSubmission } from '@/lib/storage';
import { Project, Template, Field, FormSubmission } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf

const ProjectForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [project, setProject] = useState<Project | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!id) return;

    const loadProjectData = () => {
      const projectData = getProjectById(id);
<<<<<<< HEAD

      if (projectData) {
        setProject(projectData);

        const templateData = getTemplateById(projectData.templateId);
        if (templateData) {
          setTemplate(templateData);

          // Initialize form values
          const initialValues: Record<string, any> = {};
          templateData.fields.forEach((field) => {
            if (field.type === "checkbox") {
              initialValues[field.id] = [];
            } else {
              initialValues[field.id] = "";
=======
      
      if (projectData) {
        setProject(projectData);
        
        const templateData = getTemplateById(projectData.templateId);
        if (templateData) {
          setTemplate(templateData);
          
          // Initialize form values
          const initialValues: Record<string, any> = {};
          templateData.fields.forEach(field => {
            if (field.type === 'checkbox') {
              initialValues[field.id] = [];
            } else {
              initialValues[field.id] = '';
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
            }
          });
          setFormValues(initialValues);
        }
      }
    };
<<<<<<< HEAD

=======
    
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    loadProjectData();
  }, [id]);

  const handleInputChange = (fieldId: string, value: any) => {
<<<<<<< HEAD
    console.log("value", value);

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

=======
    setFormValues({
      ...formValues,
      [fieldId]: value
    });
  };

  const handleCheckboxChange = (fieldId: string, option: string, checked: boolean) => {
    const currentValues = formValues[fieldId] || [];
    
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    let newValues;
    if (checked) {
      newValues = [...currentValues, option];
    } else {
      newValues = currentValues.filter((val: string) => val !== option);
    }
<<<<<<< HEAD

    setFormValues({
      ...formValues,
      [fieldId]: newValues,
=======
    
    setFormValues({
      ...formValues,
      [fieldId]: newValues
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    });
  };

  const validateForm = () => {
    if (!template) return false;
<<<<<<< HEAD

    let isValid = true;
    const errors: string[] = [];

    console.log("template", formValues);

    template.fields.forEach((field) => {
=======
    
    let isValid = true;
    const errors: string[] = [];
    
    template.fields.forEach(field => {
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
      if (field.required) {
        const value = formValues[field.id];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          isValid = false;
          errors.push(`${field.label} is required`);
        }
      }
    });
<<<<<<< HEAD

    if (!isValid) {
      toast({
        title: "Validation Error",
        description: errors.join(", "),
        variant: "destructive",
      });
    }

=======
    
    if (!isValid) {
      toast({
        title: "Validation Error",
        description: errors.join(', '),
        variant: "destructive"
      });
    }
    
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm() || !project || !template) return;

    const submission: FormSubmission = {
      id: Date.now().toString(),
      projectId: project.id,
      templateId: template.id,
      values: formValues,
<<<<<<< HEAD
      submittedAt: new Date().toISOString(),
=======
      submittedAt: new Date().toISOString()
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    };

    saveSubmission(submission);
    toast({
      title: "Success",
<<<<<<< HEAD
      description: "Form submitted successfully",
=======
      description: "Form submitted successfully"
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
    });
    navigate(`/projects/${id}`);
  };

<<<<<<< HEAD
=======
  const renderField = (field: Field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <Input
            type={field.type}
            value={formValues[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        );
      case 'date':
        return (
          <Input
            type="date"
            value={formValues[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
          />
        );
      case 'textarea':
        return (
          <Textarea
            value={formValues[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            required={field.required}
            rows={3}
          />
        );
      case 'select':
        return (
          <Select 
            value={formValues[field.id] || ''} 
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox 
                  id={`${field.id}-${option}`}
                  checked={(formValues[field.id] || []).includes(option)}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange(field.id, option, checked === true)
                  }
                />
                <label
                  htmlFor={`${field.id}-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case 'radio':
        return (
          <RadioGroup
            value={formValues[field.id] || ''}
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            {field.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.id}-${option}`} />
                <label
                  htmlFor={`${field.id}-${option}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option}
                </label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

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

  return (
    <Layout>
      <div className="space-y-6 py-6">
        <div className="flex items-center gap-4">
<<<<<<< HEAD
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(`/projects/${id}`)}
          >
=======
          <Button variant="outline" size="icon" onClick={() => navigate(`/projects/${id}`)}>
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-3xl font-display font-semibold tracking-tight">
              {project.name}
            </h2>
            <p className="text-muted-foreground">
              Submit a new form for this project
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{template.name} Form</CardTitle>
<<<<<<< HEAD
            <CardDescription>{template.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {template.fields.map((field: Field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && (
                    <span className="text-destructive ml-1">*</span>
                  )}
                </Label>
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
=======
            <CardDescription>
              {template.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {template.fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && <span className="text-destructive ml-1">*</span>}
                </Label>
                {renderField(field)}
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
<<<<<<< HEAD
            <Button
              variant="outline"
              onClick={() => navigate(`/projects/${id}`)}
            >
              Cancel
            </Button>
=======
            <Button variant="outline" onClick={() => navigate(`/projects/${id}`)}>Cancel</Button>
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
            <Button onClick={handleSubmit}>
              <Save className="mr-2 h-4 w-4" />
              Submit Form
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default ProjectForm;
