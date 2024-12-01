import { Component, Vehicle, ServiceIssue } from '../types';
import { initialComponents, initialVehicles, initialServiceIssues } from './mockData';

// Initialize local storage with mock data if empty
const initializeLocalStorage = () => {
  if (!localStorage.getItem('components')) {
    localStorage.setItem('components', JSON.stringify(initialComponents));
  }
  if (!localStorage.getItem('vehicles')) {
    localStorage.setItem('vehicles', JSON.stringify(initialVehicles));
  }
  if (!localStorage.getItem('serviceIssues')) {
    localStorage.setItem('serviceIssues', JSON.stringify(initialServiceIssues));
  }
};

initializeLocalStorage();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Vehicles
  async getVehicles(): Promise<Vehicle[]> {
    await delay(500); // Simulate network delay
    const vehicles = localStorage.getItem('vehicles');
    return JSON.parse(vehicles || '[]');
  },

  async createVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    await delay(500);
    const vehicles = await this.getVehicles();
    const newVehicle = { ...vehicle, id: crypto.randomUUID() };
    localStorage.setItem('vehicles', JSON.stringify([...vehicles, newVehicle]));
    return newVehicle;
  },

  // Components
  async getComponents(): Promise<Component[]> {
    await delay(500);
    const components = localStorage.getItem('components');
    return JSON.parse(components || '[]');
  },

  async createComponent(component: Omit<Component, 'id'>): Promise<Component> {
    await delay(500);
    const components = await this.getComponents();
    const newComponent = { ...component, id: crypto.randomUUID() };
    localStorage.setItem('components', JSON.stringify([...components, newComponent]));
    return newComponent;
  },

  // Service Issues
  async getServiceIssues(): Promise<ServiceIssue[]> {
    await delay(500);
    const issues = localStorage.getItem('serviceIssues');
    return JSON.parse(issues || '[]');
  },

  async createServiceIssue(issue: Omit<ServiceIssue, 'id'>): Promise<ServiceIssue> {
    await delay(500);
    const issues = await this.getServiceIssues();
    const newIssue = { ...issue, id: crypto.randomUUID() };
    localStorage.setItem('serviceIssues', JSON.stringify([...issues, newIssue]));
    return newIssue;
  },

  // Analytics
  async getAnalyticsData() {
    await delay(500);
    const issues = await this.getServiceIssues();
    return {
      totalRevenue: issues.reduce((sum, issue) => sum + issue.cost, 0),
      completedServices: issues.filter(issue => issue.status === 'completed').length,
      pendingServices: issues.filter(issue => issue.status === 'pending').length,
    };
  },
};