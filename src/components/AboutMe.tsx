import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AboutMeProps {
  onBackClick: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onBackClick }) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 sm:p-6 md:p-8">
      {/* Back Button */}
      <button
        onClick={onBackClick}
        className="self-start flex items-center text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2 sm:mr-3" />
        Retour à l'accueil
      </button>

      {/* Content Blocks */}
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* Profile Block */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Qui je suis
          </h2>

          <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl text-gray-800 space-y-3">
            <li>Oscar Roques, 31 ans</li>
            <li>Analyste Private Equity</li>
            <li>Skema Msc FMI promo 2027</li>
            <li className="!mt-6">
              TSE Licence Économie (classements)
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-lg sm:text-xl md:text-2xl">
                <li>L3 : 25/79</li>
                <li>L2 : 18/244</li>
                <li>L1 : 21/444</li>
              </ul>
            </li>
             <li><span className="notranslate">Back on Track</span>, Association</li>
            <li>Hobbies : pêche, rugby, natation</li>
          </ul>
        </div>

        {/* Personal Projects Block */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Projets personnels
          </h2>

          <div className="space-y-8">
            {/* Podcast Project */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Création et animation d'un podcast
              </h3>
              <p className="text-xl sm:text-2xl text-gray-600 italic mb-4">
                "Le Podcast des Étudiants"
              </p>
              <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 space-y-2">
                <li>Création et animation de contenus sur l'orientation scolaire et professionnelle pour lycéens et étudiants</li>
                <li>Communication</li>
                <li>Travail en équipe</li>
              </ul>

              {/* Streaming Platform Links */}
              <div className="mt-8 flex justify-center items-center space-x-8 sm:space-x-12">
                <a
                  href="https://open.spotify.com/show/1S0UxsrTcTdFvOHNKnTjhx?si=0e1f6f08304a419f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-110"
                >
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                    alt="Spotify"
                    className="h-8 sm:h-12 md:h-16 w-auto"
                  />
                </a>
                <a
                  href="https://dzr.page.link/KLWCV37sv14bjP2c7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-110"
                >
                  <img
                    src="images/deezer.png"
                    alt="Deezer"
                    className="h-8 sm:h-12 md:h-16 w-auto"
                  />
                </a>
                <a
                  href="https://podcasts.apple.com/fr/podcast/le-podcast-des-%C3%A9tudiants/id1802218873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:scale-110"
                >
                  <img
                    src="https://www.apple.com/v/apple-podcasts/c/images/overview/hero_icon__c135x5gz14mu_large.png"
                    alt="Apple Podcasts"
                    className="h-8 sm:h-12 md:h-16 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Trading Simulator Project */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Création d'un simulateur de cours boursiers et d'un outil de pricing d'options
              </h3>
              <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 space-y-2">
                <li>VBA Excel</li>
                <li>Mouvement brownien</li>
                <li>Monte Carlo et Black Scholes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="w-full max-w-md mx-auto">
          <img
            src="./images/profile.jpeg"
            alt="Oscar Roques"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};