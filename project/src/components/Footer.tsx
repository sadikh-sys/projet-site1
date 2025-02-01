import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FF8C00] text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jaaw Rice</h3>
            <p className="mb-2">La meilleure cuisine sénégalaise</p>
            <p>Livraison gratuite et rapide</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+221761565989" className="flex items-center space-x-2 hover:text-orange-200">
                <Phone size={20} />
                <span>76 156 59 89</span>
              </a>
              <a href="mailto:contact@jaawrice.com" className="flex items-center space-x-2 hover:text-orange-200">
                <Mail size={20} />
                <span>contact@jaawrice.com</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-orange-400">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Jaaw Rice. Tous droits réservés.</p>
            <p className="text-sm mt-2">Développé avec ❤️ par Sadikh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};