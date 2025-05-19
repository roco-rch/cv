import React, { useState } from 'react';
import { Timeline } from './components/Timeline';
import { DetailPage } from './components/DetailPage';
import { timelineData } from './data/timelineData';
import { GraduationCap, User, School, ArrowLeft, Briefcase } from 'lucide-react';
import { AboutMe } from './components/AboutMe';
import { SkemaSection } from './components/SkemaSection';

function App() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleEventClick = (id: string) => setSelectedEvent(id);
  const handleBackClick = () => {
    setSelectedEvent(null);
    setActiveSection(null);
  };
  const handleTimelineBackClick = () => setSelectedEvent(null);

  const renderContent = () => {
    if (activeSection === 'timeline') {
      return selectedEvent ? (
        <DetailPage
          event={timelineData.find(e => e.id === selectedEvent)!}
          onBackClick={handleTimelineBackClick}
        />
      ) : (
        <div>
          <button
            onClick={handleBackClick}
            className="flex items-center text-white text-lg hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </button>
          <Timeline events={timelineData} onEventClick={handleEventClick} />
        </div>
      );
    }

    if (activeSection === 'about') return <AboutMe onBackClick={handleBackClick} />;
    if (activeSection === 'skema') return <SkemaSection onBackClick={handleBackClick} />;

    const navigationItems = [
      {
        section: 'about',
        icon: User,
        colorClass: 'text-blue-600',
        label: 'Qui je suis',
      },
      {
        section: 'timeline',
        icon: Briefcase,
        colorClass: 'text-green-600',
        label: 'Career Path',
      },
      {
        section: 'skema',
        icon: GraduationCap,
        colorClass: 'text-yellow-600',
        label: 'Skema and Me',
      },
    ];

    return (
      <div className="flex flex-col items-center min-h-screen px-4 py-8 relative">
        {/* Info text at the top */}
        <div className="w-full max-w-sm mx-auto mb-8">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md">
            <p className="text-gray-800 text-sm sm:text-base text-center">
              J'ai réaliser ce CV Digital sur PyCharm avec ChatGPT et Bolt AI
            </p>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12 sm:mb-16">
          Vision 2035
        </h1>

        {/* Navigation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mb-16">
          {navigationItems.map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className="w-full transition-transform hover:scale-105"
            >
              <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg h-full min-h-[120px]">
                <item.icon className={`w-8 sm:w-12 h-8 sm:h-12 ${item.colorClass} mb-3`} />
                <span className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Quote at the bottom */}
        <div className="w-full max-w-4xl px-4 absolute bottom-8">
          <p className="italic text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            "La difficulté n'est pas de voir ce que personne n'a jamais vu mais de penser comme
            personne n'a jamais pensé au sujet de quelque chose que tous voient" – Schopenhauer
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-fixed bg-center text-gray-800 font-sans relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/296849/pexels-photo-296849.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex-grow">
        <main className="container mx-auto px-4 py-8">{renderContent()}</main>
      </div>
      <footer className="relative z-10 bg-black bg-opacity-75 text-white py-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
          © 2025 Oscar Roques — Vision 2035
        </div>
      </footer>
    </div>
  );
}

export default App;