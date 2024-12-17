import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface Props {
  reviews: Review[];
}

export default function ReviewList({ reviews }: Props) {
  const getAverageScore = (review: Review) => {
    const scores = Object.values(review.performance);
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-lg border border-gray-200 p-6 space-y-4"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {review.period} {review.year}
              </h3>
              <p className="text-sm text-gray-500">
                Reviewed on {new Date(review.reviewedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">
                {getAverageScore(review).toFixed(1)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(review.performance).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm text-gray-500 capitalize">{key}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${(value / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Strengths</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {review.strengths.map((strength, i) => (
                  <li key={i}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Areas for Improvement
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {review.improvements.map((improvement, i) => (
                  <li key={i}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>

          {review.comments && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Comments</h4>
              <p className="text-sm text-gray-600">{review.comments}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}