import React, { useState } from 'react';
import { ClipboardList, Plus } from 'lucide-react';
import EmployeeCard from './components/EmployeeCard';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import { employees, reviews as initialReviews } from './data/mockData';
import { Review } from './types';

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);

  const handleSubmitReview = (reviewData: Omit<Review, 'id' | 'reviewedAt'>) => {
    const newReview: Review = {
      ...reviewData,
      id: Math.random().toString(36).substr(2, 9),
      reviewedAt: new Date().toISOString(),
    };
    setReviews((prev) => [newReview, ...prev]);
    setShowForm(false);
  };

  const filteredReviews = reviews.filter(
    (review) => review.employeeId === selectedEmployee.id
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <ClipboardList className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Performance Reviews
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Employees
              </h2>
              <div className="space-y-3">
                {employees.map((employee) => (
                  <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    isSelected={employee.id === selectedEmployee.id}
                    onClick={() => setSelectedEmployee(employee)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-8 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">
                Reviews for {selectedEmployee.name}
              </h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Review
              </button>
            </div>

            {showForm ? (
              <div className="bg-white rounded-lg shadow p-6">
                <ReviewForm
                  employee={selectedEmployee}
                  onSubmit={handleSubmitReview}
                />
              </div>
            ) : (
              <ReviewList reviews={filteredReviews} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}