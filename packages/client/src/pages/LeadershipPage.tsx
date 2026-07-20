import React from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { leadershipProfiles } from '../utils/leadershipProfiles';

const LeadershipPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });

  const leadershipMessages = [
    'rajmata-sahib',
    'vice-chairperson',
    'founder',
    'princess-gaurav',
    'maharaja-lakshraj-prakash',
  ].map((id) => {
    const profile = leadershipProfiles[id];
    return {
      id: profile.id,
      title: profile.listing.title,
      name: profile.listing.name,
      role: profile.listing.role,
      excerpt: profile.listing.excerpt,
      image: profile.image,
      hasImage: true,
      link: profile.path,
    };
  });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Meet the visionary leaders who guide The Palace School towards
              excellence in education and character building.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Leadership Messages
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Inspiring messages from our distinguished patrons and founders
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Gallery */}
      <section className="bg-bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-6 space-y-12 lg:space-y-16">
          {leadershipMessages.map((message, index) => {
            const IconComponent = UserCircleIcon;
            const hasImage = message.hasImage && message.image && message.image !== '/api/placeholder/400/300';
            const isReversed = index % 2 === 1;
            return (
              <div key={message.id} className="max-w-6xl mx-auto">
                <Link
                  to={message.link}
                  className="group block bg-surface-primary rounded-2xl shadow-2xl overflow-hidden border border-border-primary hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Section */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center text-center order-2 ${
                        isReversed ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'
                      }`}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {message.title}
                        </h3>
                        <p className="text-xl md:text-2xl text-primary-600 font-bold mb-1">
                          {message.name}
                        </p>
                        {message.role && (
                          <p className="text-base md:text-lg text-text-secondary font-medium">
                            {message.role}
                          </p>
                        )}
                      </div>

                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-text-secondary leading-relaxed">
                          {message.excerpt}
                        </p>
                      </div>

                      <div
                        className={`mt-8 pt-6 border-t border-border-primary inline-flex items-center gap-2 text-primary-600 text-base md:text-lg font-semibold group-hover:gap-4 transition-all duration-300 ${
                          isReversed ? 'lg:self-start' : 'lg:self-end'
                        } self-center`}
                      >
                        <span>Read Full Message</span>
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div
                      className={`relative bg-bg-secondary p-8 lg:p-12 flex items-center justify-center order-1 ${
                        isReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="relative w-full max-w-[240px] sm:max-w-xs aspect-[3/4]">
                        {hasImage ? (
                          <img
                            src={message.image}
                            alt={message.name}
                            className="relative rounded-2xl shadow-2xl w-full h-full object-cover object-top border-4 border-white group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-primary-600 rounded-2xl border-4 border-white">
                            <IconComponent className="h-24 w-24 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* <section ref={messagesRef} className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our dedicated team of educational leaders who make excellence possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-secondary p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 border border-border-primary"
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm mb-2">
                    {member.department}
                  </p>
                  <p className="text-text-tertiary text-xs">
                    {member.experience}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Educational Journey
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-2xl mx-auto">
            Experience the difference that visionary leadership makes in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-bg-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              to="/history"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
