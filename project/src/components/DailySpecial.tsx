import React, { useEffect, useState } from 'react';
import { Dish } from '../types';

export const DailySpecial = () => {
  const [dailySpecial, setDailySpecial] = useState<Dish | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDailySpecial = async () => {
      try {
        const response = await fetch('http://localhost/rpoject/api/daily-special/get.php');
        const data = await response.json();
        setDailySpecial(data);
      } catch (error) {
        console.error('Error fetching daily special:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDailySpecial();
  }, []);

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    orderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <div className="text-center py-12">Chargement du plat du jour...</div>;
  }

  if (!dailySpecial) {
    return <div className="text-center py-12">Aucun plat du jour disponible.</div>;
  }

  return (
    <section id="daily" className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Plat du Jour</h2>
        <div className="bg-[#FFA500] rounded-lg p-6 shadow-xl max-w-2xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <img
              src={dailySpecial.image}
              alt={dailySpecial.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform"
            />
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">{dailySpecial.name}</h3>
          <p className="text-white mb-4">{dailySpecial.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-white text-xl font-bold">{dailySpecial.price} F</span>
            <button 
              onClick={scrollToOrder}
              className="bg-white text-[#FFA500] px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};