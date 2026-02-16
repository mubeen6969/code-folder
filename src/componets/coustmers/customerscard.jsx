import React, { useState } from 'react';
import { X } from 'lucide-react';
import { TESTIMONIALS } from '../../Constants';

const TestimonialCard = ({ testimonial, onRemove }) => {
  return (
    <div className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group h-full border border-gray-50">
      
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
        {testimonial.quote}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm leading-none">
              {testimonial.name}
            </h4>
            <p className="text-gray-400 text-xs mt-1">
              {testimonial.role}
            </p>
          </div>
        </div>

        <button
          className="text-gray-300 hover:text-gray-500 transition-colors p-1"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

const TestimonialsGrid = () => {
  const [list, setList] = useState(TESTIMONIALS);

  const handleRemove = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <TestimonialCard
            key={item.id}
            testimonial={item}
            onRemove={handleRemove}
          />
        ))}

        {list.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-400">
            No testimonials to show.
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
