import { Component, Vehicle, ServiceIssue } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

export const api = {
  // Vehicles
  async getVehicles() {
    const response = await fetch(`${API_BASE_URL}/vehicles/`);
    return handleResponse(response);
  },

  async createVehicle(vehicle: Omit<Vehicle, 'id'>) {
    const response = await fetch(`${API_BASE_URL}/vehicles/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });
    return handleResponse(response);
  },

  // Components
  async getComponents() {
    const response = await fetch(`${API_BASE_URL}/components/`);
    return handleResponse(response);
  },

  async createComponent(component: Omit<Component, 'id'>) {
    const response = await fetch(`${API_BASE_URL}/components/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(component),
    });
    return handleResponse(response);
  },

  // Service Issues
  async getServiceIssues() {
    const response = await fetch(`${API_BASE_URL}/service-issues/`);
    return handleResponse(response);
  },

  async createServiceIssue(issue: Omit<ServiceIssue, 'id'>) {
    const response = await fetch(`${API_BASE_URL}/service-issues/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issue),
    });
    return handleResponse(response);
  },

  // Analytics
  async getAnalyticsData() {
    const response = await fetch(`${API_BASE_URL}/analytics/data/`);
    return handleResponse(response);
  },
};