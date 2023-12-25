export interface RiskEventItemOutput {
  id: string;
  ownerId: string;
  projectId: string;
  contractId: string;
  riskEventId: string;
  riskEventName?: string;
  p10: number;
  p50: number;
  p90: number;
  likelihood: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}
