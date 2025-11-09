import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { StarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const HHMessagePage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-bg-gradient-start via-bg-gradient-middle to-bg-gradient-end text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <StarIcon className="h-20 w-20 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              His Highness's Message
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Words of wisdom and guidance for our educational journey
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
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  A Message from His Highness
                </h2>
                <p className="text-xl text-primary-600 font-semibold">
                  Royal Patron
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    Dear Students, Parents, and Faculty,
                  </p>
                  
                  <p>
                    It is with great pride and joy that I address the extended family of The Palace School. 
                    Education has always been the cornerstone of progress and development, and it is our 
                    collective responsibility to ensure that we provide the best possible learning environment 
                    for our students.
                  </p>

                  <p>
                    The Palace School stands as a testament to our commitment to excellence in education. 
                    We believe in nurturing not just academic brilliance, but also character, values, and 
                    a sense of responsibility towards society. Our students are the future leaders, 
                    innovators, and change-makers, and it is our duty to equip them with the knowledge 
                    and wisdom they need to make a positive impact on the world.
                  </p>

                  <p>
                    As we continue on this journey of educational excellence, I encourage each student to 
                    embrace every opportunity for learning and growth. Challenge yourselves, pursue your 
                    passions, and always remember that true success lies not just in personal achievement, 
                    but in contributing to the betterment of society.
                  </p>

                  <p>
                    To the parents and guardians, I thank you for entrusting us with the education and 
                    development of your children. Your support and involvement in their educational journey 
                    is invaluable, and together, we can create an environment where every child can thrive.
                  </p>

                  <p>
                    To our dedicated faculty and staff, I express my deepest gratitude for your unwavering 
                    commitment to educational excellence. Your passion, dedication, and hard work shape the 
                    future of our students and, by extension, our society.
                  </p>

                  <p>
                    May The Palace School continue to be a beacon of knowledge, wisdom, and values for 
                    generations to come.
                  </p>
                </div>

                {/* Signature Block */}
                <div className="mt-12 pt-8 border-t border-border-primary">
                  <p className="text-lg font-semibold text-text-primary mb-1">
                    With warm regards,
                  </p>
                  <p className="text-xl font-bold text-primary-600">
                    His Highness
                  </p>
                  <p className="text-primary-600 font-medium">
                    Royal Patron, The Palace School
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HHMessagePage;
