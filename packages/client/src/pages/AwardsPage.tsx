import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGSAP } from '../hooks/useGSAP';
import {
  TrophyIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { awards } from '../utils/awards';
import type { Award, AwardImage } from '../utils/awards';

// Icon + accent colour per award, keyed off Award['icon']
const iconMap = {
  globe: { Icon: GlobeAltIcon, accent: 'bg-feature-blue' },
  trophy: { Icon: TrophyIcon, accent: 'bg-feature-orange' },
  academic: { Icon: AcademicCapIcon, accent: 'bg-feature-purple' },
} as const;

// Flattened list of every image on the page, so the lightbox can step
// across award sections rather than only within one.
const allImages: AwardImage[] = awards.flatMap((award) => award.images);

const AwardsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<AwardImage | null>(null);
  const location = useLocation();

  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const summaryRef = useGSAP({ animation: 'fadeIn', delay: 0.2, stagger: 0.1 });

  const currentIndex = selectedImage
    ? allImages.findIndex((image) => image.src === selectedImage.src)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) setSelectedImage(allImages[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < allImages.length - 1) setSelectedImage(allImages[currentIndex + 1]);
  };

  // Keyboard navigation for the lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Layout scrolls to top on pathname change, which defeats /awards#rids-award.
  // Re-apply the hash scroll once the sections have mounted.
  React.useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TrophyIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Awards &amp; Achievements
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Recognitions that celebrate the dedication of our students, parents, faculty and staff
            </p>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section ref={summaryRef} className="py-16 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {awards.map((award) => {
              const { Icon, accent } = iconMap[award.icon];
              return (
                <a
                  key={award.id}
                  href={`#${award.id}`}
                  className="bg-surface-primary border border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`${accent} h-12 w-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-text-inverse" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">
                    {award.awardingBody} · {award.year}
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {award.summary}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Award Story Sections */}
      {awards.map((award: Award, index: number) => {
        const { Icon, accent } = iconMap[award.icon];
        const isReversed = index % 2 === 1;
        return (
          <section
            key={award.id}
            id={award.id}
            className={`py-20 scroll-mt-24 ${index % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-secondary'}`}
          >
            <div className="container mx-auto px-6">
              <div
                className={`max-w-6xl mx-auto flex flex-col gap-12 lg:items-center ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Copy */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${accent} h-10 w-10 rounded-lg flex items-center justify-center shrink-0`}>
                      <Icon className="h-5 w-5 text-text-inverse" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                      {award.awardingBody} · {award.year}
                    </p>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                    {award.title}
                  </h2>

                  {award.date && (
                    <p className="text-sm text-text-tertiary mb-6">{award.date}</p>
                  )}

                  <ul className="space-y-3 mb-8">
                    {award.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <CheckBadgeIcon className="h-6 w-6 text-primary-600 shrink-0" />
                        <span className="text-text-primary font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    {award.body.map((paragraph, i) => (
                      <p key={i} className="text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div className="lg:w-1/2">
                  <div
                    className={`grid gap-4 ${
                      award.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {award.images.map((image, i) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        className={`group relative overflow-hidden rounded-xl bg-surface-secondary shadow-md hover:shadow-xl transition-shadow duration-300 ${
                          // First image of a multi-image set spans both columns
                          award.images.length > 1 && i === 0 ? 'col-span-2' : ''
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {image.caption && (
                          <span className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs md:text-sm px-3 py-2 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {image.caption}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cta-text mb-4">
            Be part of our story
          </h2>
          <p className="text-lg text-cta-text/90 max-w-2xl mx-auto mb-8">
            Admissions are open for the 2026-27 session. Join a school recognised for excellence in
            education and holistic development.
          </p>
          <Link
            to="/admission-enquiry?centerId=1837&boardId=295"
            className="inline-block bg-surface-primary text-primary-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Admission Enquiry
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-8 w-8" />
          </button>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Previous image</span>
              <ChevronLeftIcon className="h-10 w-10" />
            </button>
          )}
          {currentIndex < allImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Next image</span>
              <ChevronRightIcon className="h-10 w-10" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg mx-auto"
            />
            <div className="mt-4 text-center">
              {selectedImage.caption && (
                <p className="text-white text-base md:text-lg">{selectedImage.caption}</p>
              )}
              <p className="text-white/50 text-sm mt-2">
                {currentIndex + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsPage;
