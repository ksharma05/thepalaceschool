import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import rajmataPadminiDeviImage from '../../assets/HH Rajmata Padmini Devi .jpg';

const RajmataSahibPage: React.FC = () => {
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
                src={rajmataPadminiDeviImage} 
                alt="HH Rajmata Padmini Devi" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message from The Chairperson
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              HH Rajmata Padmini Devi
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
                    src={rajmataPadminiDeviImage}
                    alt="HH Rajmata Padmini Devi"
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                      Message from The Chairperson
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold">
                      HH Rajmata Padmini Devi
                    </p>
                    <p className="text-lg text-text-secondary mt-2">
                      Chairperson, The Palace School
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    As Chairperson of The Palace School, it gives me immense joy to see the vision of my daughter, Diya Kumari, flourish into a nationally acclaimed institution. From its beginnings in 2001, the school has grown with dedication, values, and a commitment to excellence.
                  </p>

                  <p>
                    My late husband, <span className="font-semibold">HH Maharaja Sawai Bhawani Singh MVC</span>, and I were proud to support this endeavour and chose to make The City Palace, Jaipur, its home. We believed that the royal heritage, serene surroundings, and inspiring architecture would provide children with an environment that nurtures discipline, creativity, and pride in their culture.
                  </p>

                  <p>
                    Today, seeing young minds thrive here reaffirms that decision, as the Palace's rich history blends seamlessly with modern education, shaping confident and well-rounded individuals.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border-primary">
                    <p className="text-lg font-semibold text-text-primary mb-1">
                      HH Rajmata Padmini Devi
                    </p>
                    <p className="text-primary-600 font-medium">
                      Chairperson
                    </p>
                    <p className="text-primary-600 font-medium">
                      The Palace School
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-surface-primary rounded-xl shadow-lg p-8 border border-border-primary">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                About HH Rajmata Padmini Devi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Visionary Leadership
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    As Chairperson, HH Rajmata Padmini Devi has been instrumental in supporting 
                    her daughter's vision and ensuring The Palace School maintains its commitment 
                    to excellence while honoring its royal heritage.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-3">
                    Royal Heritage & Modern Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Together with her late husband HH Maharaja Sawai Bhawani Singh MVC, she 
                    made the visionary decision to establish The Palace School at The City Palace, 
                    Jaipur, blending rich history with modern educational practices.
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

export default RajmataSahibPage;
