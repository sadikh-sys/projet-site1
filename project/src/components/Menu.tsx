import React from 'react';
import { dishes } from '../data/dishes';

export const Menu = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    orderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="menu" className="py-12 px-6 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-[#FFA500]">
              <div className="aspect-video overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{dish.price} F</span>
                  <button 
                    onClick={scrollToOrder}
                    className="bg-[#FFA500] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FF8C00] transition-colors"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};