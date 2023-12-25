/**
 * Model for Project
 */

export interface Project {
  id?: string;
  masterProjectId?: string;
  parentProjectId?: string;
  ownerId?: string;
  name?: string;
  description?: string;
  version?: string;
  activities?: Activity[];
  scopes?: Scope[];
  owner?: string;
  selectedFile?: string;
  childProjects?: Project[];
  isAssessmentComplete?: boolean;
  isCurrentVersion?: boolean;
  createdAt?: string;
  createdBy?: string;
  level?: number;
  fileCID?: string;
  files?: {
    fileCID: string;
    fileName: string;
    fileExtension: string;
  };
}

export interface UpdateProject {
  id: string;
  masterProjectId?: string;
  parentProjectId?: string;
  name: string;
  description: string;
  version?: string;
  ownerId?: string;
  activities?: Activity[];
  scopes?: Scope[];
  owner?: string;
  selectedFile?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface Activity {
  id: string;
  projectId: string;
  label: string;
  description: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}
export interface Scope {
  id: string;
  projectId: string;
  label: string;
  description: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}
