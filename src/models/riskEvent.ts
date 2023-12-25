/**
 * Model for Risk Event
 */

export interface RiskEvent {
  id?: string;
  name: string;
  description: string;
  projectId: string;
  contractId: string;
  created?: number;
  riskEventType: string;
}

export enum RiskEventType {
  'Tactical' = 'Tactical',
  'Strategic' = 'Tactical'
}
