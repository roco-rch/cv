import React from 'react';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
  onEventClick: (id: string) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ events, onEventClick }) => {
  // tri décroissant (du plus récent au plus ancien)
  const sortedEvents = [...events].sort((b, a) => a.date.getTime() - b.date.getTime());

  return (
    <div className="relative bg-black bg-opacity-40 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
        Parcours professionnel
      </h2>

      <div className="max-w-7xl mx-auto relative">
        {/* Timeline line - visible on all screens */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform md:-translate-x-1/2"></div>

        <div className="relative space-y-8 md:space-y-0">
          {sortedEvents.map((event, index) => (
            <div
              key={event.id}
              className={`md:mb-16 flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Mobile timeline dot */}
              <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-white border-4 border-blue-500 transform -translate-x-1/2 mt-8"></div>

              {/* Content - adjusted for mobile */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <div
                  className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-full relative"
                  onClick={() => onEventClick(event.id)}
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 block mb-2">
                    {event.id === 'metier2'
                      ? 'Depuis 2033'
                      : event.id === 'metier1'
                      ? '2030 – 2033'
                      : event.id === 'depart-2025'
                      ? '2028 – 2030'
                      : event.date.toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long'
                        })}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {event.title}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600">
                    {event.shortDescription}
                  </p>

                  {/* Touch icon - right on mobile, left/right based on position on desktop */}
                  <div className={`absolute bottom-4 ${
                    index % 2 === 0
                      ? 'right-4 md:left-4'
                      : 'right-4'
                  } text-blue-500 animate-pulse`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                      fill="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <path d="M32 8a24 24 0 1 1-0.001 48.001A24 24 0 0 1 32 8zm0 4a20 20 0 1 0 0.001 40.001A20 20 0 0 0 32 12z"/>
                      <path d="M32 16a16 16 0 1 1-0.001 32.001A16 16 0 0 1 32 16zm0 4a12 12 0 1 0 0.001 24.001A12 12 0 0 0 32 20z"/>
                      <path d="M31 30h2v20h-2zM30 30c0-2.21 1.79-4 4-4s4 1.79 4 4v12h-2V30a2 2 0 0 0-4 0v12h-2V30z"/>
                      <path d="M32 30a2 2 0 0 1 2 2v18h-4V32a2 2 0 0 1 2-2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Desktop timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-blue-500 shadow-lg z-10"></div>

              {/* Empty space for the other side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};