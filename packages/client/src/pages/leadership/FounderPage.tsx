import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import diyaKumariImage from '../../assets/WhatsApp Image 2025-12-10 at 15.30.36.jpeg';

const FounderPage: React.FC = () => {
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
                src={diyaKumariImage} 
                alt="Princess Diya Kumari" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message From The Founder
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Deputy Chief Minister, Rajasthan & Founder, The Palace School
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
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Leadership
            </Link>

            {/* Message Content */}
            <div className="bg-surface-primary rounded-xl shadow-lg p-8 md:p-12 border border-border-primary">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1">
                  <img
                    src={diyaKumariImage}
                    alt="Princess Diya Kumari"
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                      Message From The Founder
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold">
                      Shrimati Diya Kumari
                    </p>
                    <p className="text-lg text-text-secondary mt-2">
                      Deputy Chief Minister, Rajasthan
                    </p>
                    <p className="text-lg text-text-secondary">
                      Founder, The Palace School
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    The Palace School, founded in 2001 as a Montessori pre-school, has grown into a nationally recognized institution known for its excellence in education and values. It fills me with immense pride to see our vision of nurturing confident, compassionate, and creative learners come alive each day.
                  </p>

                  <p>
                    Our pedagogy integrates the latest educational practices aligned with the tenets of NEP 2020, ensuring holistic development and experiential learning. At The Palace School, we believe in empowering every child to discover their innate potential and become a lifelong learner ready to contribute meaningfully to the nation and the world.
                  </p>

                  <p>
                    The school's location within the historic City Palace complex is not merely symbolic — it represents our commitment to blending heritage with modernity, tradition with innovation. We are proud to provide an environment where students are exposed to the rich cultural legacy of Rajasthan while being prepared for a globalized future.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border-primary">
                    <p className="text-lg font-medium text-text-secondary mb-4">
                      With warm regards
                    </p>
                    <p className="text-lg font-semibold text-text-primary">
                      Shrimati Diya Kumari
                    </p>
                    <p className="text-primary-600 font-medium">
                      Deputy Chief Minister, Rajasthan
                    </p>
                    <p className="text-primary-600 font-medium">
                      Founder, The Palace School
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-border-primary">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                About Shrimati Diya Kumari
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Founder & Visionary
                  </h4>
                  <p className="text-text-secondary">
                    Shrimati Diya Kumari founded The Palace School in 2001 with a vision to 
                    create an institution that combines excellence in education with strong 
                    values. Under her guidance, the school has grown from a small Montessori 
                    pre-school to a nationally recognized institution.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Public Service
                  </h4>
                  <p className="text-text-secondary">
                    As the Deputy Chief Minister of Rajasthan, Shrimati Diya Kumari brings 
                    her commitment to education and development to a larger platform. Her 
                    dedication to empowering young minds continues to inspire the entire 
                    Palace School community.
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

export default FounderPage;

