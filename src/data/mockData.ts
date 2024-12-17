import { Employee, Review } from '../types';

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    position: 'Senior Developer',
    department: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    position: 'Product Manager',
    department: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    employeeId: '1',
    period: 'Q1',
    year: 2024,
    quarter: 1,
    performance: {
      technical: 4.5,
      communication: 4.0,
      leadership: 3.5,
      productivity: 4.2,
    },
    strengths: ['Technical expertise', 'Problem-solving', 'Code quality'],
    improvements: ['Documentation', 'Knowledge sharing'],
    comments: 'Excellent performance in technical tasks. Could improve documentation practices.',
    reviewedAt: '2024-03-20',
  },
];