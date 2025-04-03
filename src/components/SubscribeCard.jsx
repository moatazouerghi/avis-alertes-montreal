// src/components/SubscribeCard.jsx

import React from 'react';

const SubscribeCard = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm max-w-sm w-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        S’abonner aux alertes
      </h2>

      <p className="text-sm text-gray-700 mb-4">
        Pour recevoir des avis et alertes par courriel ou texto, vous devez avoir créé un compte.
      </p>

      <button
        className="text-green-700 font-medium text-sm flex items-center gap-1 hover:underline focus:outline-none"
        onClick={() => alert("Fonctionnalité non encore disponible")}
      >
        M’abonner <span>→</span>
      </button>
    </div>
  );
};

export default SubscribeCard;
