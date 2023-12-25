/**
 * Model for Risk Assessment Output
 */
export interface RiskAssessmentOutput {
  projectId: string;
  contractId: string;
  simulatedOutput: number;
  baseEstimate: number;
  budget: number;
  bidPrice: number;
}
export interface RiskAssessmentGenerateOutput {
  projectId: string;
  projectName?: string;
  contractId: string;
  contractName?: string;
  maxPoint: string;
  minPoint: string;
  simulationType: string;
  distribution?: Distribution[];
}
export interface Distribution {
  distX: string;
  distY: string;
}
