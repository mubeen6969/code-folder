import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TriplioPlan = () => {
  return (
    <section className="w-full px-6 py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      
      <div className="flex-1 space-y-8">
        <div className="inline-block px-4 py-1 rounded-full bg-gray-50 text-gray-400 text-xs font-medium border border-gray-100 uppercase tracking-widest">
          Start now
        </div>

        <h2 className="text-5xl font-bold text-gray-900 leading-[1.15] max-w-md">
          Plan Your Perfect Desert Escape Today
        </h2>

        <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
          Embark on a journey through stunning dunes, serene oases, and breathtaking landscapes. Your unforgettable desert adventure starts here.
        </p>

        <button className="flex items-center gap-4 group">
          <span className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-gray-900 shadow-sm transition-all group-hover:shadow-md group-hover:bg-gray-50">
            Start your trip
          </span>
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight size={24} />
          </div>
        </button>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 h-[450px]">
        <div className="h-[80%] rounded-[32px] overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
            alt="Tall landscape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col h-[80%] gap-4">
          <div className="flex-1 rounded-[32px] overflow-hidden shadow-lg">
            <img
              src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
              alt="Coastal view"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 rounded-[32px] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80"
              alt="City view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default TriplioPlan;
