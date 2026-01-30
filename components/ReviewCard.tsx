import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="py-12 first:pt-0 border-b border-white/5 last:border-0 transition-opacity hover:opacity-80">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">
                Verified Client
              </span>
              <h4 className="text-white text-lg font-medium tracking-tight">@{review.username}</h4>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-1 text-white">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={10} fill="currentColor" />
              ))}
            </div>
            {review.date && (
              <span className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">
                Timestamp // {review.date}
              </span>
            )}
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 leading-tight tracking-tight max-w-3xl">
          "{review.content}"
        </p>
      </div>
    </div>
  );
};