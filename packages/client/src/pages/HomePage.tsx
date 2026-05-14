import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BookOpenIcon
} from '@heroicons/react/24/outline';
import schoolHeaderImage from '../assets/school_header.jpeg';
import HeroSlider from '../components/HeroSlider';
import StatsBar from '../components/StatsBar';
import BeyondAcademics from '../components/BeyondAcademics';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider - Full Screen */}
      <HeroSlider />

     

      {/* Why Choose The Palace School - Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={schoolHeaderImage} 
                  alt="The Palace School Campus - City Palace Jaipur" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-600 mb-4">
                Why Choose The Palace School
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  Choosing the right school is one of the most important decisions a parent makes — it shapes not only a child's academic future but also their values, confidence, creativity, and character.
                </p>
                
                <p className="text-base md:text-lg">
                  The Palace School offers a rare and enriching educational experience where heritage, innovation, inclusion, and holistic development come together to nurture future-ready global citizens.
                </p>
                
                <p className="text-base md:text-lg">
                  Guided by our motto, <span className="font-semibold text-secondary-600">"Vidyaay Amritum Ashnute" — Knowledge is the Elixir of Life</span>, we believe education must inspire wisdom, compassion, courage, and lifelong curiosity.
                </p>

                {/* Tagline Quote */}
                <div className="mt-8 border-l-4 border-primary-600 pl-6 py-4 bg-gradient-to-r from-gray-50 to-white rounded-r-lg">
                  <p className="text-xl md:text-2xl font-semibold text-secondary-600 italic leading-relaxed">
                    The Palace School — Where Knowledge Becomes Wisdom, and Learning Becomes a Legacy
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    to="/why-choose-us"
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Know More About The School
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Stats Bar */}
       <StatsBar />
    

      {/* Beyond Academics Section */}
      <BeyondAcademics />

      {/* Explore Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">
              Explore Our School
            </h2>
            <p className="text-lg text-gray-600">
              Discover what makes The Palace School a special place to learn and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/about"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <BookOpenIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-600 mb-3 group-hover:text-primary-600 transition-colors">
                About Us
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Learn about our vision, mission, and the journey that has made us who we are today.
              </p>
              <span className="text-primary-600 font-semibold text-sm flex items-center">
                Learn More
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/academics"
              className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <AcademicCapIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-600 mb-3 group-hover:text-primary-600 transition-colors">
                Academics
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Explore our comprehensive curriculum and innovative teaching methodologies.
              </p>
              <span className="text-primary-600 font-semibold text-sm flex items-center">
                View Curriculum
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/leadership"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <UserGroupIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-600 mb-3 group-hover:text-primary-600 transition-colors">
                Leadership
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Meet our visionary leaders who guide us towards excellence in education.
              </p>
              <span className="text-primary-600 font-semibold text-sm flex items-center">
                Meet Our Leaders
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a transformative educational journey. 
              Contact us today to learn more about admissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission-enquiry?centerId=1837&boardId=295"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200"
              >
                Schedule a Visit
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200"
              >
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
