import React from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { 
  UserCircleIcon, 
  AcademicCapIcon, 
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import gauraviKumariImage from '../assets/Princess Gauravi Kumari.jpg';
import lakshrajPrakashImage from '../assets/HH Maharaja Lakshraj Prakash.jpg';
import rajmataPadminiDeviImage from '../assets/HH Rajmata Padmini Devi .jpg';

const LeadershipPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const leadershipRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const messagesRef = useGSAP({ animation: 'slideInRight', delay: 0.4 });

  const leadershipMessages = [
    {
      id: 'princess-gaurav',
      title: 'Message From The Treasurer',
      name: 'Princess Gauravi Kumari',
      role: 'Treasurer',
      excerpt: 'A heartfelt message from an alumna and treasurer about the school\'s remarkable growth and continued vision...',
      image: gauraviKumariImage,
      hasImage: true,
      link: '/leadership/princess-gaurav'
    },
    // {
    //   id: 'hh-message',
    //   title: 'His Highness\'s Message',
    //   name: 'His Highness',
    //   role: 'Royal Patron',
    //   excerpt: 'Words of wisdom and guidance for our educational journey...',
    //   image: '/api/placeholder/400/300',
    //   link: '/leadership/hh-message'
    // },
    {
      id: 'rajmata-sahib',
      title: 'Message from The Chairperson',
      name: 'HH Rajmata Padmini Devi',
      role: 'Chairperson',
      excerpt: 'A message from the Chairperson about supporting her daughter\'s vision and the school\'s growth at The City Palace, Jaipur...',
      image: rajmataPadminiDeviImage,
      hasImage: true,
      link: '/leadership/rajmata-sahib'
    },
    {
      id: 'maharaja-lakshraj-prakash',
      title: 'Message from HH Maharaja Lakshraj Prakash',
      name: 'HH Maharaja Lakshraj Prakash of Sirmour',
      role: 'Member, Board of Governors & Alumnus',
      excerpt: 'A heartfelt message from an alumnus and Board member about returning to The Palace School...',
      image: lakshrajPrakashImage,
      hasImage: true,
      link: '/leadership/maharaja-lakshraj-prakash'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Principal',
      department: 'Administration',
      experience: '15+ years in education',
      icon: AcademicCapIcon
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Vice Principal',
      department: 'Academic Affairs',
      experience: '12+ years in education',
      icon: UserCircleIcon
    },
    {
      name: 'Ms. Emily Rodriguez',
      role: 'Head of Student Affairs',
      department: 'Student Services',
      experience: '10+ years in education',
      icon: HeartIcon
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Curriculum',
      department: 'Academic Development',
      experience: '18+ years in education',
      icon: StarIcon
    }
  ];

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
      <section ref={leadershipRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Leadership Messages
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Inspiring messages from our distinguished patrons and founders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipMessages.map((message) => {
              const IconComponent = UserCircleIcon;
              const hasImage = message.hasImage && message.image && message.image !== '/api/placeholder/400/300';
              return (
                <Link
                  key={message.id}
                  to={message.link}
                  className="group bg-surface-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-primary hover:border-primary-500"
                >
                  <div className="aspect-w-16 aspect-h-12 bg-primary-600 overflow-hidden">
                    {hasImage ? (
                      <img
                        src={message.image}
                        alt={message.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="p-8 flex items-center justify-center h-full">
                        <IconComponent className="h-24 w-24 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                      {message.title}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      {message.name}
                    </p>
                    <p className="text-text-secondary text-sm mb-4">
                      {message.role}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {message.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 text-sm font-medium group-hover:underline">
                      Read Full Message →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section ref={messagesRef} className="py-20 bg-bg-primary">
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
      </section>

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
