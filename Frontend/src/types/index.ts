export interface Component {
  id: string;
  name: string;
  repairPrice: number;
  newPrice: number;
  stock: number;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  ownerName: string;
  ownerContact: string;
}

export interface ServiceIssue {
  id: string;
  vehicleId: string;
  componentId: string;
  isRepair: boolean;
  description: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed';
  cost: number;
}

export interface Transaction {
  id: string;
  serviceIssueId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}