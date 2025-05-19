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

      {/* Content Block */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Qui je suis
          </h2>

          <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl text-gray-800 space-y-3 sm:space-y-4">
            <li>Oscar Roques, 31 ans</li>
            <li>Analyste Private Equity</li>
            <li>Skema Msc FMI promo 2027</li>
            <li className="!mt-6">
              TSE Licence Économie
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-lg sm:text-xl md:text-2xl">
                <li>L3 : 25/79</li>
                <li>L2 : 18/244</li>
                <li>L1 : 21/444</li>
              </ul>
            </li>
            <li><em>Back on Track</em>, Association</li>
            <li>Hobbies : pêche, rugby, natation</li>
          </ul>
        </div>

        {/* Profile Photo - Below content on all screen sizes */}
        <div className="w-full max-w-md mx-auto">
          <img
            src="/images/IMG_1337.jpeg"
            alt="Oscar Roques"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};