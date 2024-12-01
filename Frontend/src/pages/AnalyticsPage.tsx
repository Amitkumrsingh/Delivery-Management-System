import React from 'react';
import { DollarSign, WrenchIcon, ClockIcon, CheckCircleIcon } from 'lucide-react';
import { RevenueChart } from '../components/analytics/RevenueChart';
import { StatCard } from '../components/analytics/StatCard';
import { useAnalytics } from '../hooks/useAnalytics';
import { formatCurrency } from '../lib/utils';

export function AnalyticsPage() {
  const { 
    isLoading, 
    error, 
    dailyRevenue, 
    monthlyRevenue, 
    yearlyRevenue, 
    statistics 
  } = useAnalytics();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value={formatCurrency(statistics.totalRevenue)}
          icon={<DollarSign className="w-6 h-6 text-blue-600" />}
        />
        <StatCard
          title="Completed Services"
          value={statistics.completedServices}
          icon={<CheckCircleIcon className="w-6 h-6 text-green-600" />}
        />
        <StatCard
          title="Pending Services"
          value={statistics.pendingServices}
          icon={<ClockIcon className="w-6 h-6 text-yellow-600" />}
        />
        <StatCard
          title="In Progress"
          value={statistics.inProgressServices}
          icon={<WrenchIcon className="w-6 h-6 text-purple-600" />}
        />
      </div>

      <RevenueChart
        data={dailyRevenue}
        title="Daily Revenue (Last 7 Days)"
      />

      <RevenueChart
        data={monthlyRevenue}
        title="Monthly Revenue (Last 12 Months)"
      />

      <RevenueChart
        data={yearlyRevenue}
        title="Yearly Revenue (Last 3 Years)"
      />
    </div>
  );
}