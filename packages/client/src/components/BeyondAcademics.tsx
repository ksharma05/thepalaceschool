import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PaintBrushIcon,
  MusicalNoteIcon,
  TrophyIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const BeyondAcademics: React.FC = () => {
  const activities = [
    {
      icon: PaintBrushIcon,
      title: 'Visual Arts',
      description: 'Explore creativity through painting, sculpture, and various art forms',
      color: 'bg-blue-50 text-blue-600',
      href: '/student-life#visual-arts'
    },
    {
      icon: SparklesIcon,
      title: 'Performing Arts',
      description: 'Drama, theatre, and stage performances to build confidence',
      color: 'bg-purple-50 text-purple-600',
      href: '/student-life#performing-arts'
    },
    {
      icon: TrophyIcon,
      title: 'Sports',
      description: 'State-of-the-art facilities for various indoor and outdoor sports',
      color: 'bg-green-50 text-green-600',
      href: '/student-life#sports'
    },
    {
      icon: MusicalNoteIcon,
      title: 'Music',
      description: 'Learn instruments, vocals, and music theory from experts',
      color: 'bg-pink-50 text-pink-600',
      href: '/student-life#music'
    },
    {
      icon: HeartIcon,
      title: 'Health & Well-Being',
      description: 'Physical and mental wellness programs for holistic development',
      color: 'bg-red-50 text-red-600',
      href: '/student-life#health'
    },
    {
      icon: UserGroupIcon,
      title: 'House System',
      description: 'Foster teamwork, leadership, and healthy competition',
      color: 'bg-yellow-50 text-yellow-600',
      href: '/student-life#house-system'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">
            Beyond Academics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in nurturing well-rounded individuals through diverse extracurricular activities 
            that complement academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Link
                key={index}
                to={activity.href}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary-600"
              >
                <div className={`${activity.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-secondary-600 mb-2 group-hover:text-primary-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-4 text-primary-600 font-semibold text-sm flex items-center">
                  Learn More
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondAcademics;

