import React, { useState } from 'react';
import type { PaymentMethod } from '../types';

export const OrderForm = () => {
  const [selectedDish, setSelectedDish] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [building, setBuilding] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const orderData = {
      dish_id: selectedDish,
      quantity,
      building,
      room_number: roomNumber,
      payment_method: paymentMethod,
    };

    try {
      const response = await fetch('http://localhost/project/api/orders/create.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Commande passée avec succès !');
        setSelectedDish('');
        setQuantity(1);
        setBuilding('');
        setRoomNumber('');
        setPaymentMethod('cash');
      } else {
        setMessage('Erreur lors de la commande : ' + result.error);
      }
    } catch (error) {
      setMessage('Erreur réseau : ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-12 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Commander</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Nombre de plats</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Bâtiment</label>
            <input
              type="text"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Numéro de chambre</label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Mode de paiement</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="cash">Espèces</option>
              <option value="wave">Wave</option>
              <option value="orange_money">Orange Money</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FFA500] text-white py-3 rounded-full font-semibold hover:bg-[#FF8C00] transition-colors"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Commander'}
          </button>
          {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        </form>
      </div>
    </section>
  );
};
