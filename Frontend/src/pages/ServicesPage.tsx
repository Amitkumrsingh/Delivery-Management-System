import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useStore } from '../lib/store';
import { Wrench } from 'lucide-react';

const serviceSchema = z.object({
  vehicleId: z.string().min(1, 'Vehicle is required'),
  componentId: z.string().min(1, 'Component is required'),
  isRepair: z.boolean(),
  description: z.string().min(1, 'Description is required'),
});

export function ServicesPage() {
  const { vehicles, components, serviceIssues, addServiceIssue, addTransaction } = useStore();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    resolver: zodResolver(serviceSchema),
  });

  const selectedComponent = watch('componentId');
  const isRepair = watch('isRepair');
  const component = components.find(c => c.id === selectedComponent);
  const cost = component ? (isRepair ? component.repairPrice : component.newPrice) : 0;

  const onSubmit = (data: any) => {
    const serviceIssue = {
      id: crypto.randomUUID(),
      ...data,
      date: new Date().toISOString(),
      status: 'pending' as const,
      cost,
    };
    
    addServiceIssue(serviceIssue);
    
    const transaction = {
      id: crypto.randomUUID(),
      serviceIssueId: serviceIssue.id,
      amount: cost,
      date: new Date().toISOString(),
      status: 'pending' as const,
    };
    
    addTransaction(transaction);
    reset();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Create Service Issue</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle</label>
              <select
                {...register('vehicleId')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a vehicle</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.make} {vehicle.model} - {vehicle.licensePlate}
                  </option>
                ))}
              </select>
              {errors.vehicleId && (
                <p className="mt-1 text-sm text-red-600">{errors.vehicleId.message as string}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Component</label>
              <select
                {...register('componentId')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a component</option>
                {components.map((component) => (
                  <option key={component.id} value={component.id}>
                    {component.name}
                  </option>
                ))}
              </select>
              {errors.componentId && (
                <p className="mt-1 text-sm text-red-600">{errors.componentId.message as string}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Service Type</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register('isRepair')}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Repair (instead of new component)</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              {...register('description')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message as string}</p>
            )}
          </div>

          {component && (
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-700">
                Estimated Cost: <span className="font-semibold">${cost}</span>
              </p>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Wrench className="w-4 h-4 mr-2" />
            Create Service Issue
          </button>
        </form>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Service Issues</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {serviceIssues.map((issue) => {
                const vehicle = vehicles.find(v => v.id === issue.vehicleId);
                const component = components.find(c => c.id === issue.componentId);
                return (
                  <tr key={issue.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(issue.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {vehicle?.make} {vehicle?.model}
                      </div>
                      <div className="text-sm text-gray-500">{vehicle?.licensePlate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{component?.name}</div>
                      <div className="text-sm text-gray-500">{issue.isRepair ? 'Repair' : 'New'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${issue.cost}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        issue.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : issue.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {issue.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}