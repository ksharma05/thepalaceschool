import React from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  SparklesIcon,
  HandRaisedIcon,
  MusicalNoteIcon,
  SunIcon,
  UserGroupIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  HeartIcon,
  TrophyIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';

const AcademicsPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const montessoriRef = useGSAP({ animation: 'fadeIn', delay: 0.15 });
  // const curriculumRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const ridsRef = useGSAP({ animation: 'slideInRight', delay: 0.25 });
  const exchangeRef = useGSAP({ animation: 'fadeIn', delay: 0.3 });

  const montessoriAreas = [
    {
      icon: BookOpenIcon,
      title: 'Language Development',
      description: 'Children begin with phonetic sounds using sandpaper letters, movable alphabets, and phonogram boxes. This structured approach helps them progress gradually from simple sounds to more complex reading skills with confidence.'
    },
    {
      icon: PuzzlePieceIcon,
      title: 'Mathematics',
      description: 'Learning moves from concrete to abstract. Children first explore quantities through hands-on materials and then connect them to symbols, supporting the development of their naturally mathematical minds.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Cultural Studies',
      description: 'Children learn about nature, animals, land and water forms, shapes of leaves, air, water, and the environment around them, broadening their understanding of the world.'
    },
    {
      icon: SparklesIcon,
      title: 'My Zone',
      description: 'A thoughtfully prepared area that allows children to choose their own work, fostering decision-making, focus, and independence in a nurturing environment.'
    }
  ];

  const coCurricularActivities = [
    { name: 'Taekwondo', icon: HandRaisedIcon },
    { name: 'Clay Modelling', icon: SparklesIcon },
    { name: 'Western Music', icon: MusicalNoteIcon },
    { name: 'Instrumental Music', icon: MusicalNoteIcon },
    { name: 'Art & Craft', icon: SparklesIcon },
    { name: 'Nature Walks', icon: SunIcon }
  ];

  const ridsFeatures = [
    'Embedding international ethos across the whole school',
    'Enhancing curriculum, teaching and learning',
    'Collaborative projects with partner schools abroad',
    'Cultural exchange programmes',
    'Integration of global issues like sustainability',
    'Financial literacy and environmental awareness',
    'Cross-cultural understanding development'
  ];

  const exchangeHighlights = [
    'Six cultural exchange programs since 2017',
    'Three programs in Jaipur, three in Saumur, France',
    'Language improvement in French and English',
    'Visits to historical landmarks including Saumur Castle',
    'Interactions with civic leaders',
    'Dance, music, and community activities',
    'Building lasting international friendships'
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Academics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Excellence in education through innovative pedagogy, international partnerships, 
              and holistic child development.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Primary Montessori Programme Section */}
      <section ref={montessoriRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Pre-Primary Montessori Programme
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-4xl mx-auto">
                Our Pre-Primary Montessori Programme is rooted in the belief that young children learn best 
                through purposeful exploration and hands-on experiences. During the early years, children 
                naturally develop language, movement, and sensory understanding. The Montessori environment 
                nurtures these developments by encouraging independence, confidence, and the refinement of their senses.
              </p>
            </div>

            {/* Individual Presentations */}
            <div className="bg-surface-primary rounded-2xl shadow-lg p-8 mb-12 border border-border-primary">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-600 p-3 rounded-lg flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Personalized Learning Approach
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Each classroom is led by trained Montessori adults who provide individual presentations 
                    to every child. These presentations are carefully designed to build conceptual clarity 
                    and allow children to learn at their own pace, without pressure. The role of the teacher 
                    is that of a facilitator—observing, guiding, and supporting only when required. This 
                    aligns with the Montessori principle that children learn by doing and understand best 
                    through active engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {montessoriAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={index}
                    className="bg-surface-primary p-8 rounded-xl shadow-lg border border-border-primary hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">
                          {area.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Co-Curricular Activities */}
            <div className="bg-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Co-Curricular Activities
              </h3>
              <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
                Along with the Montessori curriculum, children participate in various co-curricular 
                activities that enrich their physical, creative, and social development.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {coCurricularActivities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <IconComponent className="h-8 w-8 mx-auto mb-2 text-accent-yellow-400" />
                      <p className="text-sm font-medium">{activity.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Class Structure */}
            <div className="mt-12 bg-surface-primary rounded-2xl p-8 border border-border-primary">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-feature-green p-3 rounded-lg">
                  <HeartIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Small Class Sizes for Personalized Care
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Each class has two facilitators and a small group of 12–16 children, ensuring 
                personalised care, gentle guidance, and a strong foundation for lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RIDS Award Section */}
      <section ref={ridsRef} className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-yellow-400 rounded-full mb-6">
                  <TrophyIcon className="h-8 w-8 text-secondary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  RIDS Award 2025-28
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  The Palace School received the prestigious <strong className="text-primary-600">RIDS Award 
                  (Recognition of International Dimension in Schools) 2025-28</strong> from the British Council. 
                  This honour acknowledges the school's sustained efforts in embedding international 
                  dimension across its curriculum.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Through collaborative projects with our partner school abroad, cultural exchange 
                  programmes, and activities integrating global issues such as sustainability, financial 
                  literacy, and environmental awareness, students developed broader perspectives and 
                  cross-cultural understanding.
                </p>
                <div className="bg-surface-secondary p-4 rounded-lg border-l-4 border-primary-600">
                  <p className="text-sm text-text-secondary italic">
                    The RIDS programme is managed by BC Education India, an Indian subsidiary of 
                    British Council UK, committed to enabling young people to achieve their life goals 
                    through international curricula and educational solutions.
                  </p>
                </div>
              </div>
              <div className="bg-surface-primary p-8 rounded-2xl shadow-lg border border-border-primary">
                <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                  <BuildingLibraryIcon className="h-6 w-6 mr-2 text-primary-600" />
                  RIDS Programme Highlights
                </h3>
                <ul className="space-y-3">
                  {ridsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-feature-green p-1 rounded-full flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* French Cultural Exchange Section */}
      <section ref={exchangeRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-600 rounded-full mb-6">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Indo-French Cultural Exchange
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-4xl mx-auto">
                Since 2017, The Palace School, Jaipur, and its official partner <strong className="text-primary-600">Lycée 
                Saint Louis, Saumur, France</strong>, have organized six cultural exchange programs—three in 
                Jaipur and three in Saumur—that foster global citizenship and lasting friendships.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Programme Description */}
              <div className="bg-surface-primary p-8 rounded-2xl shadow-lg border border-border-primary">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Programme Objectives
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  These programs provide young learners with a unique opportunity to experience Indian 
                  and French cultures firsthand, improve their language skills in both French and English, 
                  and build confidence and adaptability through immersive engagement in diverse educational settings.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Students from India and France are warmly welcomed by their peers, taking part in 
                  stimulating workshops, classroom sessions, and cultural excursions that celebrate 
                  the rich traditions and heritage of both nations.
                </p>
                <div className="bg-primary-600 p-6 rounded-xl text-white">
                  <h4 className="font-bold mb-2">Skills Developed</h4>
                  <p className="text-white/90 text-sm">
                    Critical thinking, resilience, flexibility, empathy, and mutual respect through 
                    intercultural dialogue and meaningful community activities.
                  </p>
                </div>
              </div>

              {/* Exchange Highlights */}
              <div className="bg-surface-primary p-8 rounded-2xl shadow-lg border border-border-primary">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Programme Highlights
                </h3>
                <ul className="space-y-4">
                  {exchangeHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-accent-yellow-400 p-1 rounded-full flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                      </div>
                      <span className="text-text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-surface-secondary rounded-lg">
                  <p className="text-sm text-text-tertiary italic">
                    Memorable experiences have included visits to historical landmarks such as Saumur 
                    Castle and iconic Parisian sites, as well as evenings filled with shared dance, 
                    music, and meaningful community activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership Statement */}
            <div className="mt-12 bg-secondary-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Strengthening Indo-French Friendship
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto">
                The Palace School remains committed to broadening horizons through these international 
                experiences—encouraging academic excellence alongside social and emotional growth. This 
                ongoing partnership strengthens the enduring Indo-French friendship and shapes empowered, 
                globally minded students prepared to succeed in a connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Excellence in Education
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-3xl mx-auto">
            Discover how our innovative programmes and international partnerships can help 
            your child develop into a confident, globally-minded learner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-bg-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Visit
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;

