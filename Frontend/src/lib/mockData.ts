import { Component, Vehicle, ServiceIssue } from '../types';

export const initialComponents: Component[] = [
  {
    id: '1',
    name: 'Brake Pads',
    repairPrice: 150,
    newPrice: 300,
    stock: 20,
  },
  {
    id: '2',
    name: 'Oil Filter',
    repairPrice: 50,
    newPrice: 100,
    stock: 30,
  },
  {
    id: '3',
    name: 'Air Filter',
    repairPrice: 40,
    newPrice: 80,
    stock: 25,
  },
];

export const initialVehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    licensePlate: 'ABC123',
    ownerName: 'John Doe',
    ownerContact: '555-0123',
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2020,
    licensePlate: 'XYZ789',
    ownerName: 'Jane Smith',
    ownerContact: '555-0456',
  },
];

export const initialServiceIssues: ServiceIssue[] = [
  {
    id: '1',
    vehicleId: '1',
    componentId: '1',
    isRepair: true,
    description: 'Brake pads replacement',
    date: '2024-03-15T10:00:00Z',
    status: 'completed',
    cost: 150,
  },
  {
    id: '2',
    vehicleId: '2',
    componentId: '2',
    isRepair: false,
    description: 'New oil filter installation',
    date: '2024-03-16T14:30:00Z',
    status: 'pending',
    cost: 100,
  },
];