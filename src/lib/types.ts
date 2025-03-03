
export type FieldType = 'text' | 'number' | 'email' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio';

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[]; // For select, checkbox, radio
}

export interface Template {
  id: string;
  name: string;
  description: string;
  fields: Field[];
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  templateId: string;
  createdAt: string;
}

export interface FormSubmission {
  id: string;
  projectId: string;
  templateId: string;
  values: Record<string, any>;
  submittedAt: string;
}
