import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { useStore } from '../lib/store';
import { format, startOfDay, startOfMonth, startOfYear, eachDayOfInterval, eachMonthOfInterval, subDays, subMonths, subYears } from 'date-fns';

export function AnalyticsPage() {
  const { transactions } = useStore();

  // Daily revenue for the last 7 days
  const dailyData = React.useMemo(() => {
    const days = eachDayOfInterval({
      start: subDays(new Date(), 6),
      end: new Date(),
    });

    return days.map(day => {
      const dayStart = startOfDay(day);
      const dayRevenue = transactions
        .filter(t => t.status === 'paid' && startOfDay(new Date(t.date)).getTime() === dayStart.getTime())
        .reduce((sum, t) => sum + t.amount, 0);

      return {
        date: format(day, 'MMM dd'),
        revenue: dayRevenue,
      };
    });
  }, [transactions]);

  // Monthly revenue for the last 12 months
  const monthlyData = React.useMemo(() => {
    const months = eachMonthOfInterval({
      start: subMonths(new Date(), 11),
      end: new Date(),
    });

    return months.map(month => {
      const monthStart = startOfMonth(month);
      const monthRevenue = transactions
        .filter(t => t.status === 'paid' && startOfMonth(new Date(t.date)).getTime() === monthStart.getTime())
        .reduce((sum, t) => sum + t.amount, 0);

      return {
        date: format(month, 'MMM yyyy'),
        revenue: monthRevenue,
      };
    });
  }, [transactions]);

  // Yearly revenue for the last 3 years
  const yearlyData = React.useMemo(() => {
    const years = eachDayOfInterval({
      start: subYears(new Date(), 2),
      end: new Date(),
    }).filter(date => date.getMonth() === 0 && date.getDate() === 1);

    return years.map(year => {
      const yearStart = startOfYear(year);
      const yearRevenue = transactions
        .filter(t => t.status === 'paid' && startOfYear(new Date(t.date)).getTime() === yearStart.getTime())
        .reduce((sum, t) => sum + t.amount, 0);

      return {
        date: format(year, 'yyyy'),
        revenue: yearRevenue,
      };
    });
  }, [transactions]);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Daily Revenue (Last 7 Days)</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue (Last 12 Months)</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                name="Revenue"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Yearly Revenue (Last 3 Years)</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}