import React from 'react';
import { 
  AcademicCapIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: BuildingLibraryIcon,
      number: '15',
      label: 'Campus Area (Acre)',
      color: 'text-primary-600'
    },
    {
      icon: UserGroupIcon,
      number: '1:15',
      label: 'Student Teacher Ratio',
      color: 'text-secondary-600'
    },
    {
      icon: AcademicCapIcon,
      number: '50+',
      label: 'Smart Classrooms',
      color: 'text-primary-600'
    },
    {
      icon: TrophyIcon,
      number: '25+',
      label: 'Years of Excellence',
      color: 'text-secondary-600'
    }
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className={`${stat.color} mb-3`}>
                  <IconComponent className="h-10 w-10 md:h-12 md:w-12" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

