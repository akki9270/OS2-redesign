/**
 * Model for Risk Event Input
 */

import { Variability } from '.';

export interface RiskEventInput {
  impactcost: Variability;
  likelihood: number;
  owner?: string;
  projectId: string;
  contractId: string;
  riskEventId: string;
  version?: number;
}
