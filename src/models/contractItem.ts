/**
 * Model for Contract Item
 */

export interface ContractItem {
  id?: string;
  name?: string;
  description?: string;
  projectId: string;
  contractId: string;
}
