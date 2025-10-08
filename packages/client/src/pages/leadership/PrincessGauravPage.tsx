import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { UserCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const PrincessGauravPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <UserCircleIcon className="h-20 w-20 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Princess Gaurav's Message
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              A visionary message about education, character, and excellence
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
                  A Message from Princess Gaurav
                </h2>
                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
                  Founder & Patron
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
                    "Education is not just about acquiring knowledge; it's about building character, 
                    nurturing dreams, and creating leaders for tomorrow."
                  </p>

                  <p>
                    It gives me immense pleasure to welcome you to The Palace School, an institution 
                    that stands as a beacon of educational excellence and character building. Since 
                    our inception, we have been committed to providing not just academic knowledge, 
                    but a holistic education that shapes well-rounded individuals.
                  </p>

                  <p>
                    At The Palace School, we believe that every child is unique and possesses 
                    unlimited potential. Our mission is to unlock this potential through a 
                    nurturing environment that combines traditional values with modern educational 
                    practices. We strive to create an atmosphere where students feel valued, 
                    inspired, and motivated to achieve their highest aspirations.
                  </p>

                  <p>
                    Our commitment extends beyond academic excellence. We focus on developing 
                    essential life skills, fostering creativity, and instilling values of 
                    integrity, compassion, and social responsibility. We believe that true 
                    education prepares students not just for careers, but for life itself.
                  </p>

                  <p>
                    As we continue our journey of excellence, we remain dedicated to our core 
                    principles: providing quality education, maintaining high standards, and 
                    ensuring that every student receives the attention and guidance they deserve. 
                    We are proud of our achievements and look forward to many more years of 
                    nurturing young minds and building future leaders.
                  </p>

                  <p>
                    I invite you to join us in this noble mission of education and character 
                    building. Together, let us create a brighter future for our children and 
                    our society.
                  </p>

                  <div className="text-right mt-8">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Princess Gaurav
                    </p>
                    <p className="text-indigo-600 dark:text-indigo-400">
                      Founder & Patron
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                About Princess Gaurav
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    Educational Vision
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Princess Gaurav has been a driving force behind innovative educational 
                    practices and character development programs that have transformed 
                    thousands of lives.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    Community Impact
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Under her guidance, The Palace School has become a model institution 
                    known for its commitment to excellence and community service.
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
