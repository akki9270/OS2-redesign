/**
 * Model for Owner Input
 */

import { Variability } from '.';

export interface OwnerInput {
  projectId: string;
  riskEventId: string;
  initialCost: Variability;
  thresholdCost: string;
  tresholdSchedule: string;
}
