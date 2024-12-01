import React, { useState, useEffect, useMemo } from 'react';
import { format, subDays, subMonths, subYears, startOfDay, startOfMonth, startOfYear } from 'date-fns';
import { useStore } from '../lib/store';

export function useAnalytics() {
  const { serviceIssues } = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Daily revenue for the last 7 days
  const dailyRevenue = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, i) => subDays(new Date(), i));
    
    return days.reverse().map(day => {
      const dayStart = startOfDay(day);
      const dayRevenue = serviceIssues
        .filter(issue => 
          issue.status === 'completed' && 
          startOfDay(new Date(issue.date)).getTime() === dayStart.getTime()
        )
        .reduce((sum, issue) => sum + issue.cost, 0);

      return {
        date: format(day, 'MMM dd'),
        revenue: dayRevenue,
      };
    });
  }, [serviceIssues]);

  // Monthly revenue for the last 12 months
  const monthlyRevenue = useMemo(() => {
    const months = Array.from({ length: 12 }, (_, i) => subMonths(new Date(), i));
    
    return months.reverse().map(month => {
      const monthStart = startOfMonth(month);
      const monthRevenue = serviceIssues
        .filter(issue => 
          issue.status === 'completed' && 
          startOfMonth(new Date(issue.date)).getTime() === monthStart.getTime()
        )
        .reduce((sum, issue) => sum + issue.cost, 0);

      return {
        date: format(month, 'MMM yyyy'),
        revenue: monthRevenue,
      };
    });
  }, [serviceIssues]);

  // Yearly revenue for the last 3 years
  const yearlyRevenue = useMemo(() => {
    const years = Array.from({ length: 3 }, (_, i) => subYears(new Date(), i));
    
    return years.reverse().map(year => {
      const yearStart = startOfYear(year);
      const yearRevenue = serviceIssues
        .filter(issue => 
          issue.status === 'completed' && 
          startOfYear(new Date(issue.date)).getTime() === yearStart.getTime()
        )
        .reduce((sum, issue) => sum + issue.cost, 0);

      return {
        date: format(year, 'yyyy'),
        revenue: yearRevenue,
      };
    });
  }, [serviceIssues]);

  // Calculate summary statistics
  const statistics = useMemo(() => {
    const totalRevenue = serviceIssues
      .filter(issue => issue.status === 'completed')
      .reduce((sum, issue) => sum + issue.cost, 0);

    const completedServices = serviceIssues.filter(issue => issue.status === 'completed').length;
    const pendingServices = serviceIssues.filter(issue => issue.status === 'pending').length;
    const inProgressServices = serviceIssues.filter(issue => issue.status === 'in-progress').length;

    return {
      totalRevenue,
      completedServices,
      pendingServices,
      inProgressServices,
    };
  }, [serviceIssues]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    dailyRevenue,
    monthlyRevenue,
    yearlyRevenue,
    statistics,
  };
}