import React from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { 
  AcademicCapIcon, 
  HeartIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  BookOpenIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import diyaKumariImage from '../assets/Diya Kumari 1.jpg';

const AboutPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const founderMessageRef = useGSAP({ animation: 'fadeIn', delay: 0.15 });
  const philosophyRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const approachRef = useGSAP({ animation: 'slideInRight', delay: 0.4 });
  const montessoriRef = useGSAP({ animation: 'scaleIn', delay: 0.6 });
  const holisticRef = useGSAP({ animation: 'fadeIn', delay: 0.8 });
  const inclusiveRef = useGSAP({ animation: 'slideInUp', delay: 1.0 });

  const philosophyPoints = [
    {
      icon: HeartIcon,
      title: 'Holistic Development',
      description: 'We nurture the whole child, valuing physical, mental, emotional, and psychological growth equally.'
    },
    {
      icon: LightBulbIcon,
      title: 'Learning Through Doing',
      description: 'True learning happens through application-based and experiential methods that foster lifelong understanding.'
    },
    {
      icon: BookOpenIcon,
      title: 'Modern Curriculum',
      description: 'Our curriculum aligns with National Curriculum Framework FS 2022 and SE 2023, minimizing rote memorization.'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation in Education',
      description: 'We implement storytelling, project-based learning, arts integration, and gamification aligned with NEP 2020.'
    }
  ];

  const montessoriPrinciples = [
    'Natural sense of harmony and curiosity in every child',
    'Gentle guidance to explore and learn at their own pace',
    'Embracing mistakes as stepping stones to understanding',
    'Fostering self-motivation, confidence, and inner discipline',
    'Laying the foundation for lifelong learning'
  ];

  const holisticPrograms = [
    'Sports and physical development',
    'Arts and creative expression',
    'Yoga and mindfulness practices',
    'Educational excursions and field trips',
    'Values-based character development',
    'Emotional growth and social skills'
  ];

  const inclusiveFeatures = [
    'Differentiated instructional strategies',
    'Responsive learning environment',
    'Support for neurodivergent learners',
    'Individual competency development',
    'Realization of each learner\'s unique potential'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About The School
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Founded with a bold vision by Princess Diya Kumari ji to go beyond 
              conventional academics and nurture the whole child.
            </p>
          </div>
        </div>
      </section>

      {/* Message From The Founder Section */}
      <section ref={founderMessageRef} className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
                    <img
                      src={diyaKumariImage}
                      alt="Princess Diya Kumari ji"
                      className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-gray-700"
                    />
                  </div>
                </div>

                {/* Message Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      Message From The Founder
                    </h2>
                    <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
                      Princess Diya Kumari ji
                    </p>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p>
                        The Palace School, founded in 2001 as a Montessori pre-school, has grown into a nationally recognized institution known for its excellence in education and values. It fills me with immense pride to see our vision of nurturing confident, compassionate, and creative learners come alive each day.
                      </p>
                      <p>
                        Our pedagogy integrates the latest educational practices aligned with the tenets of NEP 2020, ensuring holistic development and experiential learning. At The Palace School, we believe in empowering every child to discover their innate potential and become a lifelong learner ready to contribute meaningfully to the nation and the world.
                      </p>
                    </div>

                    {/* Signature Block */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Shrimati Diya Kumari
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        Deputy Chief Minister, Rajasthan
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        Founder, The Palace School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Vision Section */}
      <section ref={philosophyRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Founding Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                The Palace School was founded with a bold vision by Princess Diya Kumari ji—to go beyond 
                conventional academics and nurture the whole child. Rather than placing undue emphasis on 
                the traditional three R's, the school was designed as a sanctuary for holistic development, 
                where physical, mental, emotional, and psychological growth are equally valued.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                This pioneering initiative was brought to life with the unwavering support and encouragement 
                of her parents, Late Maharaja Sawai Bhawani Singh ji and Maharani Padmini Devi ji.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-indigo-600 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Approach Section */}
      <section ref={approachRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Educational Approach
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At our core, we believe that true learning happens through doing. Our curriculum is aligned 
                with the National Curriculum Framework FS 2022 and National Curriculum Framework SE 2023. 
                It is rooted in application-based and experiential methods, encouraging students to explore, 
                experiment, and engage deeply with concepts—minimizing rote memorization and fostering 
                lifelong understanding.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 p-3 rounded-lg flex-shrink-0">
                  <BookOpenIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                    Application-Based Learning
                  </h3>
                  <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed text-lg">
                    We encourage students to explore, experiment, and engage deeply with concepts, 
                    creating a learning environment that promotes critical thinking and practical 
                    understanding over memorization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montessori Approach Section */}
      <section ref={montessoriRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Montessori-Inspired Pre-Primary Education
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At the pre-primary level, our approach is deeply inspired by the timeless principles 
                of Dr. Maria Montessori. We believe that every child carries within them a natural 
                sense of harmony and curiosity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Our Montessori Principles
                  </h3>
                  <ul className="space-y-4">
                    {montessoriPrinciples.map((principle, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-green-500 p-1 rounded-full flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {principle}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl border border-green-100 dark:border-green-800">
                <div className="text-center">
                  <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <HeartIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">
                    Nurturing Environment
                  </h4>
                  <p className="text-green-800 dark:text-green-200 leading-relaxed">
                    Through the Montessori method, children are gently guided to explore, learn, 
                    and grow at their own pace—embracing mistakes as stepping stones to understanding. 
                    This nurturing environment fosters self-motivation, confidence, and inner discipline, 
                    laying the foundation for lifelong learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Development Section */}
      <section ref={holisticRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Holistic Child Development
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We nurture holistic child development through a vibrant blend of programs that foster 
                values, emotional growth, and social skills. Complemented by innovative pedagogies, 
                our approach aligns seamlessly with the National Education Policy 2020, unlocking 
                every learner's unique potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {holisticPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-purple-600 p-2 rounded-lg">
                      <SparklesIcon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                      {program}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Innovative Pedagogies
              </h3>
              <p className="text-lg leading-relaxed">
                Our approach includes storytelling, project-based learning, arts and sports integration, 
                and gamification—all designed to make learning engaging, meaningful, and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Practice Section */}
      <section ref={inclusiveRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Inclusive Education
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our institution's educational philosophy is firmly grounded in inclusive practice, 
                with a dedicated emphasis on supporting neurodivergent learners. By implementing 
                differentiated instructional strategies and cultivating a responsive learning 
                environment, we facilitate the development of individual competencies and the 
                realization of each learner's unique potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Inclusive Features
                  </h3>
                </div>
                <ul className="space-y-3">
                  {inclusiveFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-500 p-1 rounded-full flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="text-center">
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <UserGroupIcon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    Safe & Joyful Learning
                  </h4>
                  <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                    We believe that when children feel safe, valued, and joyful, they flourish—emotionally, 
                    socially, and intellectually. Our nurturing environment encourages curiosity, resilience, 
                    and self-expression, allowing each child to grow not just in knowledge, but in confidence 
                    and character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Educational Journey
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Experience the difference of an education that nurtures the whole child. 
            Discover how we can help your child flourish in a safe, joyful, and inclusive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
