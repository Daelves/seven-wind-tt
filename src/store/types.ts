export interface OutlayRow {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  parentId: number | null;
  child: OutlayRow[];
}

export interface CreateRowRequest {
  rowName: string;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  parentId: number | null;
}

export interface UpdateRowRequest extends CreateRowRequest {
  id: number;
}

export interface CreateEntityResponse {
  id: string;
  rowName: string;
  total: number;
}
