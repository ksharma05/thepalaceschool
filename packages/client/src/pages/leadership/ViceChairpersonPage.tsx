import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import padmanabhSinghImage from '../../assets/WhatsApp Image 2025-12-11 at 09.02.43.jpeg';

const ViceChairpersonPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={padmanabhSinghImage} 
                alt="HH Maharaja Sawai Padmanabh Singh" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message From The Vice Chairperson
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              HH Maharaja Sawai Padmanabh Singh
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/leadership"
              className="inline-flex items-center text-primary-600 hover:text-indigo-800 dark:hover:text-indigo-300 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Leadership
            </Link>

            {/* Message Content */}
            <div className="bg-surface-primary rounded-xl shadow-lg p-8 md:p-12 border border-border-primary">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1">
                  <img
                    src={padmanabhSinghImage}
                    alt="HH Maharaja Sawai Padmanabh Singh"
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                      Message From The Vice Chairperson
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold">
                      HH Maharaja Sawai Padmanabh Singh
                    </p>
                    <p className="text-lg text-text-secondary mt-2">
                      Vice-Chairperson, The Palace School
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    As the Vice Chairperson of The Palace School, and its very first student, I take immense pride in witnessing how far the school has come since its inception in 2001. What began as my mother, Diya Kumari's, vision to provide a nurturing and progressive learning environment has now grown into a nationally respected institution.
                  </p>

                  <p>
                    Seeing the same classrooms that shaped my early years now ignite curiosity and confidence in so many young learners fills me with deep satisfaction.
                  </p>

                  <p>
                    I remain committed to carrying forward my mother's vision — strengthening the school's academic excellence, global outlook, and value-based education — while ensuring that The Palace School continues to prepare students to meet the future with wisdom, grace, and leadership.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border-primary">
                    <p className="text-lg font-semibold text-text-primary mb-1">
                      HH Maharaja Sawai Padmanabh Singh
                    </p>
                    <p className="text-primary-600 font-medium">
                      Vice-Chairperson
                    </p>
                    <p className="text-primary-600 font-medium">
                      The Palace School
                    </p>
                    <p className="text-text-secondary">
                      Jaipur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-surface-primary rounded-xl shadow-lg p-8 border border-border-primary">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                About HH Maharaja Sawai Padmanabh Singh
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    The First Student
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    As the very first student of The Palace School, HH Maharaja Sawai Padmanabh Singh 
                    holds a unique connection to the institution. His journey from student to Vice-Chairperson 
                    embodies the school's commitment to nurturing future leaders.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Continuing the Legacy
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Committed to carrying forward his mother's vision, he focuses on strengthening 
                    academic excellence, fostering a global outlook, and maintaining value-based education 
                    that prepares students for leadership with wisdom and grace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViceChairpersonPage;

