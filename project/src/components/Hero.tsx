import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFA500] to-orange-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <UtensilsCrossed size={48} className="text-white" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
          Jaaw Rice
        </h1>
        <p className="text-2xl text-white mb-8 font-bold bg-[#FF8C00] p-6 rounded-lg inline-block shadow-lg">
          Votre restaurant de cuisine sénégalaise à l'Université Amadou Makhtar Mbow de Diamniadio
        </p>
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto shadow-xl">
          <p className="text-white text-2xl font-bold mb-6">
            Livraison gratuite et rapide dans tous les bâtiments du campus
          </p>
          <p className="text-white text-xl leading-relaxed font-medium">
            Créé par un étudiant pour les étudiants, Jaaw Rice s'engage à offrir une restauration de qualité 
            à des prix abordables. Notre mission est d'aider les étudiants à bien se nourrir avec des plats 
            traditionnels préparés avec soin.
          </p>
        </div>
      </div>
    </section>
  );
};