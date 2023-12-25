/**
 * Model for Risk Assessment Input
 */
export interface RiskAssessmentInput {
  projectId?: string;
  riskEventId?: string;
  impactCost?: number;
  impactSchedule?: number;
  likelihood?: number;
}
