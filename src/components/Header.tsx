import React from 'react';
import { GraduationCap, Briefcase, Heart, Users, User } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-black bg-opacity-75 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
              <User className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-white">Oscar Roques</h1>
          </div>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <button
                  onClick={() => onTabChange('about')}
                  className={`flex items-center text-white hover:text-blue-600 transition-colors ${
                    activeTab === 'about' ? 'text-blue-600' : ''
                  }`}
                >
                  <User className="w-5 h-5 mr-1" />
                  <span>Qui je suis</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('timeline')}
                  className={`flex items-center text-white hover:text-blue-600 transition-colors ${
                    activeTab === 'timeline' ? 'text-blue-600' : ''
                  }`}
                >
                  <GraduationCap className="w-5 h-5 mr-1" />
                  <span>Parcours scolaire</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('hobbies')}
                  className={`flex items-center text-white hover:text-blue-600 transition-colors ${
                    activeTab === 'hobbies' ? 'text-blue-600' : ''
                  }`}
                >
                  <Heart className="w-5 h-5 mr-1" />
                  <span>Passions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTabChange('association')}
                  className={`flex items-center text-white hover:text-blue-600 transition-colors ${
                    activeTab === 'association' ? 'text-blue-600' : ''
                  }`}
                >
                  <Users className="w-5 h-5 mr-1" />
                  <span>Association</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};