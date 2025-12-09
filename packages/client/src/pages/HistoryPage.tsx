import React from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { AcademicCapIcon, UsersIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/outline';

const HistoryPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const timelineRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const valuesRef = useGSAP({ animation: 'slideInRight', delay: 0.4 });
  const achievementsRef = useGSAP({ animation: 'scaleIn', delay: 0.6 });

  const milestones = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'The Palace School was established with a vision to provide quality education and holistic development to students.',
      icon: AcademicCapIcon
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Added new facilities including science laboratories, computer labs, and sports complex.',
      icon: UsersIcon
    },
    {
      year: '2012',
      title: 'Recognition',
      description: 'Achieved recognition as one of the top schools in the region for academic excellence.',
      icon: TrophyIcon
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented modern teaching methods and digital learning platforms.',
      icon: HeartIcon
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards for our students and ourselves.'
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards and promote honesty and integrity in all our interactions.'
    },
    {
      title: 'Innovation',
      description: 'We embrace innovation and creativity, encouraging students to think critically and solve problems.'
    },
    {
      title: 'Community',
      description: 'We foster a sense of community and belonging, where every student feels valued and supported.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Rich Heritage
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Discover the journey that has shaped The Palace School into a beacon of 
              educational excellence and character building.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From humble beginnings to becoming a premier educational institution, 
              our journey has been marked by continuous growth and excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-surface-primary p-6 rounded-lg shadow-lg border border-border-primary">
                        <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-4`}>
                          <div className="bg-primary-600 p-3 rounded-lg mr-3">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-primary-600">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-text-secondary">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-bg-primary"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character 
              of our students and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-surface-secondary p-8 rounded-xl border border-border-primary hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 bg-stats-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-stats-accent max-w-3xl mx-auto">
              Over the years, we have achieved numerous milestones and recognitions 
              that reflect our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-stats-accent text-lg">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-stats-accent text-lg">Successful Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-stats-accent text-lg">Board Exam Success</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
