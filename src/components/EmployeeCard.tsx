import React from 'react';
import { User } from 'lucide-react';
import { Employee } from '../types';

interface Props {
  employee: Employee;
  isSelected: boolean;
  onClick: () => void;
}

export default function EmployeeCard({ employee, isSelected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all ${
        isSelected
          ? 'bg-blue-50 border-2 border-blue-500'
          : 'bg-white border border-gray-200 hover:border-blue-300'
      }`}
    >
      <div className="flex items-center space-x-4">
        {employee.imageUrl ? (
          <img
            src={employee.imageUrl}
            alt={employee.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <User className="w-12 h-12 text-gray-400" />
        )}
        <div>
          <h3 className="font-medium text-gray-900">{employee.name}</h3>
          <p className="text-sm text-gray-500">{employee.position}</p>
          <p className="text-xs text-gray-400">{employee.department}</p>
        </div>
      </div>
    </div>
  );
}