import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import gauraviKumariImage from '../../assets/Princess Gauravi Kumari.jpg';

const PrincessGauravPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-bg-gradient-start via-bg-gradient-middle to-bg-gradient-end text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={gauraviKumariImage} 
                alt="Princess Gauravi Kumari" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message From The Treasurer
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Princess Gauravi Kumari
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
                    src={gauraviKumariImage}
                    alt="Princess Gauravi Kumari"
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                      Message From The Treasurer
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold">
                      Princess Gauravi Kumari
                    </p>
                    <p className="text-lg text-text-secondary mt-2">
                      Treasurer, School Management Committee
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    As an alumna of The Palace School and now serving as Treasurer of its School Management Committee, I feel immense pride and joy in witnessing the school's remarkable growth. Having studied here till Class 3, when the school offered only pre-primary and early primary classes, it is truly heartwarming to see how far this institution—founded by my mother, Diya Kumari—has advanced in both scale and spirit.
                  </p>

                  <p>
                    The Palace School continues to embody her vision of holistic education rooted in values, creativity, and excellence. I am deeply committed to contributing to its ongoing journey and look forward to being an active part of its continued progress and success.
                  </p>

                  <div className="text-right mt-8 pt-6 border-t border-border-primary">
                    <p className="text-lg font-semibold text-text-primary">
                      Princess Gauravi Kumari
                    </p>
                    <p className="text-primary-600 font-medium">
                      Treasurer
                    </p>
                    <p className="text-primary-600 font-medium">
                      The Palace School
                    </p>
                    <p className="text-primary-600 font-medium">
                      School Management Committee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-surface-primary rounded-xl shadow-lg p-8 border border-border-primary">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                About Princess Gauravi Kumari
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Alumna & Treasurer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Princess Gauravi Kumari is a proud alumna of The Palace School, having studied 
                    here till Class 3. Now serving as Treasurer of the School Management Committee, 
                    she brings both personal connection and dedication to the institution's growth.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Continuing the Vision
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    As the daughter of the founder, Princess Gauravi Kumari is deeply committed 
                    to continuing her mother's vision of holistic education, ensuring the school's 
                    continued progress and success.
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

export default PrincessGauravPage;
