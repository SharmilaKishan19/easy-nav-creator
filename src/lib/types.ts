
<<<<<<< HEAD
export type FieldType = 'text' | 'number' | 'email' | 'date' | 'text area' | 'select' | 'checkbox' | 'radio' | 'file';
=======
export type FieldType = 'text' | 'number' | 'email' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio';
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf

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
<<<<<<< HEAD

export interface MenuItem {
  label: string;
  icon: any;
  href: string,
  active?: boolean
}
=======
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
