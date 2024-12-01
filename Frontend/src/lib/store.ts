import { create } from 'zustand';
import { Component, Vehicle, ServiceIssue, Transaction } from '../types';
import { api } from './api';

interface StoreState {
  components: Component[];
  vehicles: Vehicle[];
  serviceIssues: ServiceIssue[];
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchInitialData: () => Promise<void>;
  addComponent: (component: Omit<Component, 'id'>) => Promise<void>;
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => Promise<void>;
  addServiceIssue: (issue: Omit<ServiceIssue, 'id'>) => Promise<void>;
  addTransaction: (transaction: Transaction) => void;
  updateServiceIssue: (id: string, status: ServiceIssue['status']) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  components: [],
  vehicles: [],
  serviceIssues: [],
  transactions: [],
  isLoading: false,
  error: null,
  
  fetchInitialData: async () => {
    set({ isLoading: true, error: null });
    try {
      const [components, vehicles, serviceIssues] = await Promise.all([
        api.getComponents(),
        api.getVehicles(),
        api.getServiceIssues(),
      ]);
      set({ components, vehicles, serviceIssues });
    } catch (error) {
      set({ error: 'Failed to fetch initial data' });
    } finally {
      set({ isLoading: false });
    }
  },
  
  addComponent: async (component) => {
    set({ isLoading: true, error: null });
    try {
      const newComponent = await api.createComponent(component);
      set(state => ({
        components: [...state.components, newComponent],
      }));
    } catch (error) {
      set({ error: 'Failed to add component' });
    } finally {
      set({ isLoading: false });
    }
  },
  
  addVehicle: async (vehicle) => {
    set({ isLoading: true, error: null });
    try {
      const newVehicle = await api.createVehicle(vehicle);
      set(state => ({
        vehicles: [...state.vehicles, newVehicle],
      }));
    } catch (error) {
      set({ error: 'Failed to add vehicle' });
    } finally {
      set({ isLoading: false });
    }
  },
  
  addServiceIssue: async (issue) => {
    set({ isLoading: true, error: null });
    try {
      const newIssue = await api.createServiceIssue(issue);
      set(state => ({
        serviceIssues: [...state.serviceIssues, newIssue],
      }));
    } catch (error) {
      set({ error: 'Failed to add service issue' });
    } finally {
      set({ isLoading: false });
    }
  },
  
  addTransaction: (transaction) => {
    set(state => ({
      transactions: [...state.transactions, transaction],
    }));
  },
  
  updateServiceIssue: (id, status) => {
    set(state => ({
      serviceIssues: state.serviceIssues.map((issue) =>
        issue.id === id ? { ...issue, status } : issue
      ),
    }));
  },
}));