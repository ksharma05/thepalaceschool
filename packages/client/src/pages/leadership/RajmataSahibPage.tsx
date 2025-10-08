import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const RajmataSahibPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <HeartIcon className="h-20 w-20 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rajmata Sahib's Message
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              A message of love, care, and dedication to our students
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
                  A Message from Rajmata Sahib
                </h2>
                <p className="text-xl text-rose-600 dark:text-rose-400 font-semibold">
                  Honorary Patron
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-xl font-medium text-rose-600 dark:text-rose-400">
                    "Education is the greatest gift we can give to our children. It is the 
                    foundation upon which they build their dreams and achieve their aspirations."
                  </p>

                  <p>
                    With a heart full of love and hope, I welcome you to The Palace School, 
                    a place where every child is cherished and every dream is nurtured. As 
                    a mother and grandmother, I understand the deep love parents have for 
                    their children and their desire to provide them with the best possible 
                    education.
                  </p>

                  <p>
                    At The Palace School, we believe that education should touch not just 
                    the mind, but also the heart and soul. Our approach combines academic 
                    rigor with emotional intelligence, ensuring that our students grow into 
                    compassionate, confident, and capable individuals.
                  </p>

                  <p>
                    I have always believed that the true measure of a school's success lies 
                    not just in the achievements of its students, but in the values they 
                    carry with them throughout their lives. Our students learn not only 
                    mathematics and science, but also kindness, empathy, and respect for 
                    others.
                  </p>

                  <p>
                    The teachers at The Palace School are not just educators; they are 
                    mentors, guides, and often, second parents to our students. They 
                    understand that each child is unique and deserves individual attention 
                    and care. This personalized approach has been the cornerstone of our 
                    success.
                  </p>

                  <p>
                    To our dear students, I say: You are the future, and the future is 
                    bright. Believe in yourselves, work hard, and never forget to be kind. 
                    To the parents who have entrusted us with their most precious treasures, 
                    I promise that we will care for your children as if they were our own.
                  </p>

                  <p>
                    May The Palace School continue to be a place where dreams take flight, 
                    where character is built, and where the leaders of tomorrow are shaped 
                    with love and wisdom.
                  </p>

                  <div className="text-right mt-8">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Rajmata Sahib
                    </p>
                    <p className="text-rose-600 dark:text-rose-400">
                      Honorary Patron
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                A Mother's Touch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-rose-600 dark:text-rose-400 mb-3">
                    Nurturing Environment
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Rajmata Sahib has ensured that The Palace School provides a nurturing, 
                    caring environment where every child feels valued and supported.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-rose-600 dark:text-rose-400 mb-3">
                    Values Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Her influence has helped shape our values-based education program, 
                    emphasizing character development alongside academic achievement.
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
