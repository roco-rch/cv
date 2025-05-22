import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SkemaSectionProps {
  onBackClick: () => void;
}

export const SkemaSection: React.FC<SkemaSectionProps> = ({ onBackClick }) => {
  return (
    <div className="flex flex-col items-start w-full min-h-screen p-4 sm:p-6 md:p-8">
      {/* Bouton retour */}
      <button
        onClick={onBackClick}
        className="flex items-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2 sm:mr-3" />
        Retour à l'accueil
      </button>

      {/* Bloc principal */}
      <div className="w-full max-w-6xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center">
          🎓 SKEMA and Me
        </h2>

        {/* Ligne 1 : Parcours & Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Parcours */}
          <div className="w-full lg:w-1/2 bg-white bg-opacity-90 rounded-xl shadow-lg p-4 sm:p-6">
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 space-y-3">
              <li>Master 2 Raleigh : MSc Financial Markets</li>
              <li>Master 1 Lille : Finance &amp; Quants</li>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2 text-gray-900">
                Césure :
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-4">
                <li className="space-y-2">
                  Stage 2 : Crédit Agricole CIB
                  <ul className="list-none ml-6 mt-2 space-y-2">
                    <li>Mise en œuvre de la gouvernance</li>
                    <li>Analyse de données</li>
                  </ul>
                </li>
                <li className="space-y-2">
                  Stage 1 : Assistant banquier privé à Monaco - Maison Herez
                  <ul className="list-none ml-6 mt-2 space-y-2">
                    <li>KYC et compliance</li>
                    <li>Saisie et traitements opérations bancaires : virements, ordre de bourse</li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
          {/* Image SKEMA */}
          <div className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-lg flex items-center justify-center">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.actuia.com%2Fwp-content%2Fuploads%2F2019%2F10%2FSkema-696x348.png&f=1&nofb=1"
              alt="SKEMA Business School"
              className="w-full h-full object-contain bg-white p-4"
            />
          </div>
        </div>

        {/* Ligne 2 : Vie associative & Logo */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8">
          {/* Logo SKEMA Finance */}
          <div className="w-full lg:w-1/2 h-40 sm:h-48 md:h-56 overflow-hidden rounded-xl shadow-inner">
            <img
              src="images/asso.jpg"
              alt="Logo SKEMA Finance"
              className="w-full h-full object-contain bg-white p-0"
            />
          </div>
          {/* Vie associative */}
          <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Événement : Skema Financial Tee-Off
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 space-y-2 sm:space-y-3">
              <li>Co-fondateur d'un événement de networking au golf d'Augusta</li>
              <li>Traders, entrepreneurs et institutionnels</li>
              <li>Rencontre d'un mentor</li>
            </ul>
          </div>
        </div>

        {/* Ligne 3 : SKEMA Alumni */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
          {/* Texte Alumni */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Membre Actif Skema Alumni
            </h3>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li>Organisation de sessions de networking</li>
                <li>Mentorat professionnel</li>
              </ul>
            </div>
          </div>
          {/* Image Alumni (à remplacer avec l'image que vous fournirez) */}
          <div className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-lg flex items-center justify-center bg-white">
            <img
              src="images/alumni.jpg"
              alt="SKEMA Alumni"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};