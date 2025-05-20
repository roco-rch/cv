import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { ArrowLeft, MapPin, Calendar, Briefcase, GraduationCap, Play } from 'lucide-react';

interface DetailPageProps {
  event: TimelineEvent;
  onBackClick: () => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ event, onBackClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEventIcon = () => {
    switch (event.type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'work':
        return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <button
        onClick={onBackClick}
        className="flex items-center text-white hover:text-blue-400 mb-4 sm:mb-6 transition-colors text-base sm:text-lg"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Retour à Parcours scolaire
      </button>

      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
        {event.image && (
          <div className="h-[200px] sm:h-[300px] overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-start sm:items-center mb-4 sm:mb-6">
            <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 mr-3 sm:mr-4 flex-shrink-0">
              {getEventIcon()}
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-2">{event.title}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm sm:text-base space-y-1 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {event.date.toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                {event.location && (
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose max-w-none text-base sm:text-lg leading-relaxed">
            {event.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {event.id === 'metier2' && (
            <div className="mt-6 sm:mt-8">
              <div className="max-w-[200px] mx-auto aspect-[9/16] relative">
                {!isPlaying ? (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src="/video/minia.jpg"
                      alt="Video thumbnail"
                      className="w-full h-full rounded-lg shadow-lg object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-75 rounded-full p-3">
                        <Play className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <video
                    className="w-full h-full rounded-lg shadow-lg object-cover"
                    controls
                    autoPlay
                  >
                    <source src="/video/video.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                )}
              </div>
            </div>
          )}

          {event.gallery && event.gallery.length > 0 && (
            <div className="mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Galerie</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {event.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-40 sm:h-48">
                    <img
                      src={image}
                      alt={`${event.title} - image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.stats && (
            <div className="mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Chiffres clés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(event.stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">{value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={onBackClick}
            className="flex items-center text-blue-600 hover:text-blue-800 mt-6 sm:mt-8 transition-colors mx-auto text-base sm:text-lg"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Retour à Parcours scolaire
          </button>
        </div>
      </div>
    </div>
  );
};