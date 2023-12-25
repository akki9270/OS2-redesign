/**
 * Model for Contract
 */

export interface Contract {
  id?: string;
  projectId: string;
  projectName?: string;
  isAssessmentComplete?: boolean;
  name: string;
  description: string;
  owner?: string;
  contractor?: string;
  activityIds?: string[];
  scopeIds?: string[];
}
