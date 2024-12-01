import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Car, Settings, Wrench, BarChart3 } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <Car className="w-5 h-5 mr-2" />
                Vehicles
              </Link>
              <Link
                to="/components"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <Settings className="w-5 h-5 mr-2" />
                Components
              </Link>
              <Link
                to="/services"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Services
              </Link>
              <Link
                to="/analytics"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}