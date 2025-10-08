import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { StarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const HHMessagePage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <StarIcon className="h-20 w-20 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              His Highness's Message
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Words of wisdom and guidance for our educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/leadership"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Leadership
            </Link>

            {/* Message Content */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  A Message from His Highness
                </h2>
                <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold">
                  Royal Patron
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-xl font-medium text-amber-600 dark:text-amber-400">
                    "True leadership is not about power, but about service; not about ruling, 
                    but about inspiring others to reach their highest potential."
                  </p>

                  <p>
                    It is with great pride and joy that I extend my warmest greetings to the 
                    students, parents, faculty, and staff of The Palace School. This institution 
                    represents not just a place of learning, but a sanctuary where young minds 
                    are nurtured to become the leaders of tomorrow.
                  </p>

                  <p>
                    Education has always been the cornerstone of progress and prosperity. At 
                    The Palace School, we have created an environment where traditional values 
                    meet modern innovation, where character development goes hand in hand with 
                    academic excellence. Our commitment is to provide an education that prepares 
                    students not just for examinations, but for life itself.
                  </p>

                  <p>
                    In today's rapidly changing world, it is essential that our students develop 
                    not only knowledge and skills, but also wisdom, compassion, and a strong 
                    moral compass. These qualities, combined with academic excellence, will 
                    enable them to contribute meaningfully to society and to lead with integrity.
                  </p>

                  <p>
                    I am proud of the achievements of our students and the dedication of our 
                    faculty. Together, they have created a legacy of excellence that continues 
                    to inspire and motivate. The Palace School stands as a testament to what 
                    can be achieved when we combine vision with action, tradition with innovation.
                  </p>

                  <p>
                    To our students, I say: Dream big, work hard, and never lose sight of your 
                    values. To our parents, I express my gratitude for entrusting us with your 
                    most precious treasures. To our faculty, I commend your dedication and 
                    commitment to excellence.
                  </p>

                  <p>
                    May The Palace School continue to be a beacon of light, guiding young minds 
                    towards a future filled with promise and possibility.
                  </p>

                  <div className="text-right mt-8">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      His Highness
                    </p>
                    <p className="text-amber-600 dark:text-amber-400">
                      Royal Patron
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Royal Patronage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">
                    Visionary Leadership
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    His Highness has been instrumental in establishing The Palace School as 
                    a center of educational excellence, providing guidance and support for 
                    our mission.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">
                    Community Service
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Under royal patronage, the school has undertaken numerous community 
                    service initiatives and educational outreach programs.
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

export default HHMessagePage;
