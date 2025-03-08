<<<<<<< HEAD
import { Template, Project, FormSubmission } from "./types";

// Initialize storage with empty arrays if they don't exist
const initializeStorage = () => {
  if (!localStorage.getItem("templates")) {
    localStorage.setItem("templates", JSON.stringify([]));
  }
  if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify([]));
  }
  if (!localStorage.getItem("submissions")) {
    localStorage.setItem("submissions", JSON.stringify([]));
=======

import { Template, Project, FormSubmission } from './types';

// Initialize storage with empty arrays if they don't exist
const initializeStorage = () => {
  if (!localStorage.getItem('templates')) {
    localStorage.setItem('templates', JSON.stringify([]));
  }
  if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify([]));
  }
  if (!localStorage.getItem('submissions')) {
    localStorage.setItem('submissions', JSON.stringify([]));
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
  }
};

// Templates
export const getTemplates = (): Template[] => {
  initializeStorage();
<<<<<<< HEAD
  return JSON.parse(localStorage.getItem("templates") || "[]");
=======
  return JSON.parse(localStorage.getItem('templates') || '[]');
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

export const saveTemplate = (template: Template): void => {
  const templates = getTemplates();
  templates.push(template);
<<<<<<< HEAD
  localStorage.setItem("templates", JSON.stringify(templates));
=======
  localStorage.setItem('templates', JSON.stringify(templates));
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

export const getTemplateById = (id: string): Template | undefined => {
  const templates = getTemplates();
<<<<<<< HEAD
  return templates.find((template) => template.id === id);
=======
  return templates.find(template => template.id === id);
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

// Projects
export const getProjects = (): Project[] => {
  initializeStorage();
<<<<<<< HEAD
  return JSON.parse(localStorage.getItem("projects") || "[]");
=======
  return JSON.parse(localStorage.getItem('projects') || '[]');
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

export const saveProject = (project: Project): void => {
  const projects = getProjects();
  projects.push(project);
<<<<<<< HEAD
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const saveAllProject = (projects: Array<Project>): void => {
  localStorage.setItem("projects", JSON.stringify(projects));
=======
  localStorage.setItem('projects', JSON.stringify(projects));
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

export const getProjectById = (id: string): Project | undefined => {
  const projects = getProjects();
<<<<<<< HEAD
  return projects.find((project) => project.id === id);
};

export const updateProject = (data: Project): Project | undefined => {
  let projects = getProjects();
  const projectIndex = projects.findIndex((project) => project.id === data.id);
  if (projectIndex >= 0) {
    projects[projectIndex] = data;
    saveAllProject(projects);
    return projects[projectIndex];
  }
  return undefined;
=======
  return projects.find(project => project.id === id);
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

// Form Submissions
export const getSubmissions = (): FormSubmission[] => {
  initializeStorage();
<<<<<<< HEAD
  return JSON.parse(localStorage.getItem("submissions") || "[]");
};

export const getSubmissionsByProjectId = (
  projectId: string
): FormSubmission[] => {
  const submissions = getSubmissions();
  return submissions.filter((submission) => submission.projectId === projectId);
=======
  return JSON.parse(localStorage.getItem('submissions') || '[]');
};

export const getSubmissionsByProjectId = (projectId: string): FormSubmission[] => {
  const submissions = getSubmissions();
  return submissions.filter(submission => submission.projectId === projectId);
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};

export const saveSubmission = (submission: FormSubmission): void => {
  const submissions = getSubmissions();
  submissions.push(submission);
<<<<<<< HEAD
  localStorage.setItem("submissions", JSON.stringify(submissions));
=======
  localStorage.setItem('submissions', JSON.stringify(submissions));
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
};
