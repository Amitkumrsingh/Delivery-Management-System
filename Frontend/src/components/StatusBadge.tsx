import React from 'react';

interface StatusBadgeProps {
  status: 'pending' | 'in-progress' | 'completed' | 'paid';
}

const statusStyles = {
  completed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  pending: 'bg-gray-100 text-gray-800',
  paid: 'bg-blue-100 text-blue-800',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        statusStyles[status]
      }`}
    >
      {status}
    </span>
  );
}