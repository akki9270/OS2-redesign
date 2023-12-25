export interface ContractItemOutput {
  id: string;
  ownerId: string;
  projectId: string;
  contractId: string;
  contractItemId: string;
  contractItemName?: string;
  p10: number;
  p50: number;
  p90: number;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}
