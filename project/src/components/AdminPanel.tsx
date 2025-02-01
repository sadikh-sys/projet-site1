import React, { useState, useEffect } from 'react';

export const AdminPanel = () => {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('http://localhost/api/dishes/get.php');
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.error('Erreur lors du chargement des plats:', error);
      }
    };

    fetchDishes();
  }, []);

  const handleUpdateDailySpecial = async () => {
    if (!selectedDish) {
      setMessage('Veuillez sélectionner un plat.');
      return;
    }

    try {
      const response = await fetch('http://localhost/api/daily-special/update.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dish_id: selectedDish }),
      });

      const result = await response.json();
      setMessage(result.success ? 'Plat du jour mis à jour avec succès !' : 'Erreur : ' + result.error);
    } catch (error) {
      setMessage('Erreur réseau : ' + error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Panel Administrateur</h2>
      <div className="mb-4">
        <label htmlFor="dish" className="block text-gray-700 font-semibold mb-2">
          Sélectionnez le plat du jour
        </label>

        {dishes.length === 0 ? (
          <p className="text-gray-700">Aucun plat trouvé.</p>
        ) : (
          <select
            id="dish"
            value={selectedDish}
            onChange={(e) => setSelectedDish(e.target.value)}
            className="w-full p-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-[#FFA500] focus:border-transparent"
          >
            <option value="">Sélectionnez un plat</option>
            {dishes.map((dish) => (
              <option key={dish.id} value={dish.id}>
                {dish.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <button
        onClick={handleUpdateDailySpecial}
        className="bg-[#FFA500] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FF8C00] transition-colors"
      >
        Mettre à jour le plat du jour
      </button>

      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
};
