import React, { useState } from 'react';
import { alerts } from '../data/alerts';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import SubscribeCard from '../components/SubscribeCard';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    borough: '',
    subject: '',
    startDate: '',
    endDate: '',
  });

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBorough = !filters.borough || alert.borough === filters.borough;
    const matchesSubject = !filters.subject || alert.subject === filters.subject;
    const matchesStartDate = !filters.startDate || new Date(alert.date) >= new Date(filters.startDate);
    const matchesEndDate = !filters.endDate || new Date(alert.date) <= new Date(filters.endDate);
    return matchesSearch && matchesBorough && matchesSubject && matchesStartDate && matchesEndDate;
  });

  return (
    <>
      {/* Bandeau gris clair */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Avis et alertes</h1>
          <p className="text-lg text-gray-600 mb-6">Trouver un avis</p>

          <input
            type="text"
            placeholder="Que cherchez-vous ?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Colonne principale */}
        <div className="flex-1">
          {/* Filtres */}
          <div className="flex flex-wrap gap-4 mb-4">
            <select
              name="borough"
              onChange={(e) => setFilters({ ...filters, borough: e.target.value })}
              value={filters.borough}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm appearance-none bg-white"
            >
              <option value="">Arrondissement</option>
              <option value="Ahuntsic-Cartierville">Ahuntsic-Cartierville</option>
              <option value="Montréal-Nord">Montréal-Nord</option>
              <option value="Ville-Marie">Ville-Marie</option>
            </select>

            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm"
            />

            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm"
            />

            <select
              name="subject"
              onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
              value={filters.subject}
              className="border border-gray-300 rounded-full px-4 py-2 text-sm appearance-none bg-white"
            >
              <option value="">Sujet</option>
              <option value="Déchets et recyclage">Déchets et recyclage</option>
              <option value="Eau et aqueduc">Eau et aqueduc</option>
              <option value="Circulation et transport">Circulation et transport</option>
              <option value="Travaux publics">Travaux publics</option>
              <option value="Loisirs et culture">Loisirs et culture</option>
            </select>
          </div>

          {/* Résultats */}
          <p className="text-sm text-gray-500 mb-4">
            {filteredAlerts.length} résultat(s) trouvé(s)
          </p>

          {/* Liste des alertes */}
          {filteredAlerts.map(alert => (
            <Link
  key={alert.id}
  to={`/alert/${alert.id}`}
  className="block mb-4 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white hover:border-gray-300 group"
>
  {/* Titre noir -> vert au hover */}
  <h2 className="text-lg font-bold text-black group-hover:text-green-700 transition-colors duration-200 mb-1">
    {alert.title}
  </h2>

  {/* Sujet */}
  <div className="text-xs font-semibold inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded">
    {alert.subject}
  </div>

  {/* Date + heure */}
  <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
    <div className="flex items-center gap-1">
      <FaRegCalendarAlt className="text-gray-500" />
      {new Date(alert.date).toLocaleDateString('fr-CA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </div>

    <div className="flex items-center gap-1">
      🕒
      {new Date(alert.date).toLocaleTimeString('fr-CA', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </div>
  </div>
</Link>


          ))}
        </div>

        {/* Colonne droite : carte d'abonnement */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
  <SubscribeCard />
</div>
      </div>
    </>
  );
};

export default HomePage;
