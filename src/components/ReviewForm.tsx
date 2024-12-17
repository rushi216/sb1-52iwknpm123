import React, { useState } from 'react';
import { Employee, Period, Review } from '../types';

interface Props {
  employee: Employee;
  onSubmit: (review: Omit<Review, 'id' | 'reviewedAt'>) => void;
}

export default function ReviewForm({ employee, onSubmit }: Props) {
  const [period, setPeriod] = useState<Period>('Q1');
  const [year, setYear] = useState(new Date().getFullYear());
  const [performance, setPerformance] = useState({
    technical: 3,
    communication: 3,
    leadership: 3,
    productivity: 3,
  });
  const [strengths, setStrengths] = useState<string[]>([]);
  const [improvements, setImprovements] = useState<string[]>([]);
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      employeeId: employee.id,
      period,
      year,
      quarter: parseInt(period.charAt(1)) || 0,
      performance,
      strengths,
      improvements,
      comments,
    });
  };

  const handleStrengthsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStrengths(e.target.value.split('\n').filter(s => s.trim()));
  };

  const handleImprovementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImprovements(e.target.value.split('\n').filter(s => s.trim()));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Period</label>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as Period)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Q1">Q1</option>
            <option value="Q2">Q2</option>
            <option value="Q3">Q3</option>
            <option value="Q4">Q4</option>
            <option value="Year">Year</option>
          </select>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Performance Metrics</h3>
        {Object.entries(performance).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {key} ({value}/5)
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={value}
              onChange={(e) =>
                setPerformance((prev) => ({
                  ...prev,
                  [key]: parseFloat(e.target.value),
                }))
              }
              className="mt-1 block w-full"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Strengths (one per line)
        </label>
        <textarea
          value={strengths.join('\n')}
          onChange={handleStrengthsChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Areas for Improvement (one per line)
        </label>
        <textarea
          value={improvements.join('\n')}
          onChange={handleImprovementsChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Additional Comments
        </label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit Review
      </button>
    </form>
  );
}