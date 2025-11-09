import React from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import lakshrajPrakashImage from '../../assets/HH Maharaja Lakshraj Prakash.jpg';

const HHMaharajaLakshrajPrakashPage: React.FC = () => {
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
                src={lakshrajPrakashImage} 
                alt="HH Maharaja Lakshraj Prakash" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Message from HH Maharaja Lakshraj Prakash
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Member, Board of Governors & Alumnus, The Palace School
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
                    src={lakshrajPrakashImage}
                    alt="HH Maharaja Lakshraj Prakash"
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-2 flex items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                      Message from HH Maharaja Lakshraj Prakash of Sirmour
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold">
                      HH Maharaja Lakshraj Prakash
                    </p>
                    <p className="text-lg text-text-secondary mt-2">
                      Member, Board of Governors & Alumnus, The Palace School
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p>
                    Returning to The Palace School, not as a student this time but as a Member of its Board of Governors, feels like coming home. Some of my earliest and happiest memories were made within these very walls — where curiosity was encouraged, friendships were forged, and every day was an adventure in learning.
                  </p>

                  <p>
                    Having pursued my education abroad, I now realise even more deeply how forward-thinking yet grounded my early schooling here was. The Palace School blends global standards of education with the warmth and rootedness of Indian values — giving its students not just knowledge, but character and confidence. It is this rare balance that makes all <span className="font-semibold text-primary-600">PalS</span> (Palace School student) stand out, wherever in the world they may go.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border-primary">
                    <p className="text-lg font-medium text-text-secondary mb-4">
                      Best Wishes
                    </p>
                    <p className="text-lg font-semibold text-text-primary">
                      HH Maharaja Lakshraj Prakash
                    </p>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Sirmour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-border-primary">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                About HH Maharaja Lakshraj Prakash
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    Alumnus & Board Member
                  </h4>
                  <p className="text-text-secondary">
                    HH Maharaja Lakshraj Prakash is a proud alumnus of The Palace School, 
                    where he spent his formative years creating lasting memories. Now serving 
                    as a Member of the Board of Governors, he brings a unique perspective 
                    combining his student experience with his leadership role.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    Global Perspective
                  </h4>
                  <p className="text-text-secondary">
                    Having pursued education abroad, HH Maharaja Lakshraj Prakash brings 
                    valuable insights into how The Palace School's balanced approach to 
                    global standards and Indian values prepares students for success 
                    anywhere in the world.
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

export default HHMaharajaLakshrajPrakashPage;

