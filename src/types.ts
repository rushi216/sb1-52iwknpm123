export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  employeeId: string;
  period: string;
  year: number;
  quarter: number;
  performance: {
    technical: number;
    communication: number;
    leadership: number;
    productivity: number;
  };
  strengths: string[];
  improvements: string[];
  comments: string;
  reviewedAt: string;
}

export type Period = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Year';