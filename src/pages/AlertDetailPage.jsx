import React from 'react';
import { useParams } from 'react-router-dom';
import { alerts } from '../data/alerts';
import SubscribeCard from '../components/SubscribeCard';
import MapContainer from '../components/MapContainer';
import { Link } from 'react-router-dom';



const AlertDetailPage = () => {
  const { id } = useParams();
  const alert = alerts.find(a => a.id === parseInt(id));

  if (!alert) return <div className="p-4">Alerte introuvable</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Grille principale : contenu + colonne droite */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Colonne principale */}
        <div className="flex-1">
          {/* Fil d’Ariane (statique ici) */}
          <div className="text-sm text-gray-500 mb-4 space-x-2">
  <Link to="/" className="hover:underline font-medium text-gray-600">ACCUEIL</Link>
  <span>{'>'}</span>
  <Link to="/" className="hover:underline font-medium text-gray-600">AVIS ET ALERTES</Link>
</div>


          {/* Titre de l'alerte */}
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-snug">
            {alert.title}
          </h1>

          {/* Date de publication */}
          <div className="text-sm text-blue-800 font-medium mb-8">
            Publié le {new Date(alert.date).toLocaleDateString('fr-CA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })} à {new Date(alert.date).toLocaleTimeString('fr-CA', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>

          {/* Contenu de l'alerte */}
          <p className="text-base text-gray-800 mb-10">
            {alert.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sollicitudin nibh. Etiam dignissim..."}
          </p>

          {/* Contenus complémentaires */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-2">Contenus complémentaires</h2>
            <a href="#" className="text-green-700 font-semibold hover:underline">
              État de la situation – Info-travaux
            </a>
          </div>

          {/* Emplacement (carte ou image statique) */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Emplacement</h2>
            <div className="mt-12">
         <h2 className="text-xl font-bold mb-4">Emplacement</h2>
         <MapContainer address={alert.borough} />
         </div>

          </div>

          {/* Question utile ? */}
          <div className="mt-12 bg-gray-50 border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Ces informations vous ont-elles été utiles ?</h3>
            <div className="flex gap-8">
              <label className="flex items-center gap-2">
                <input type="radio" name="utile" />
                <span>Oui</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="utile" />
                <span>Non</span>
              </label>
            </div>
          </div>
        </div>

        {/* Colonne droite : Carte abonnement */}
        <div className="w-full lg:w-80">
          <SubscribeCard />
        </div>
      </div>
    </div>
  );
};

export default AlertDetailPage;
