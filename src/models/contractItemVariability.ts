/**
 * Model for Contract Item Variability
 */

import { Variability } from '.';

export interface ContractItemVariability {
  projectId: string;
  contractId: string;
  contractItemId: string;
  variability: Variability;
}
