import React, { useState } from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { 
  PhotoIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { getCloudinaryUrl, galleryImages, galleryCategories } from '../config/cloudinary';
import type { GalleryImage } from '../config/cloudinary';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const galleryRef = useGSAP({ animation: 'fadeIn', delay: 0.2, stagger: 0.1 });

  // Filter images by category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.event?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current image index for navigation
  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  // Handle keyboard navigation
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

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <PhotoIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Capturing moments of learning, growth, and celebration at The Palace School
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-bg-secondary border-b border-border-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-tertiary" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border-primary rounded-lg bg-bg-primary text-text-primary focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-surface-primary text-text-primary hover:bg-surface-secondary border border-border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-12 bg-bg-primary">
        <div className="container mx-auto px-6">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer border border-border-primary hover:border-primary-500 transition-all duration-300"
                >
                  <img
                    src={getCloudinaryUrl(image.publicId, { width: 400, height: 400 })}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg truncate">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <PhotoIcon className="h-24 w-24 mx-auto text-text-tertiary mb-6" />
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {galleryImages.length === 0 ? 'Gallery Coming Soon' : 'No Photos Found'}
              </h3>
              <p className="text-text-secondary max-w-md mx-auto">
                {galleryImages.length === 0 
                  ? 'We are currently uploading photos of our school events. Please check back soon!'
                  : 'Try adjusting your search or filter to find what you\'re looking for.'
                }
              </p>
              {galleryImages.length === 0 && (
                <div className="mt-8 p-6 bg-surface-secondary rounded-xl max-w-2xl mx-auto border border-border-primary">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    📸 For Administrators
                  </h4>
                  <p className="text-text-secondary text-sm">
                    To add photos, upload them to Cloudinary and add the image details 
                    to the gallery configuration file. Once the backend is ready, 
                    images will be managed through the admin panel.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Event Categories Showcase */}
      {galleryImages.length === 0 && (
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Event Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Annual Day', icon: '🎭', color: 'bg-primary-100 dark:bg-primary-900/30' },
                { name: 'Sports Day', icon: '🏆', color: 'bg-green-100 dark:bg-green-900/30' },
                { name: 'Cultural Events', icon: '🎨', color: 'bg-purple-100 dark:bg-purple-900/30' },
                { name: 'Academics', icon: '📚', color: 'bg-blue-100 dark:bg-blue-900/30' },
                { name: 'Workshops', icon: '🔬', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
                { name: 'Celebrations', icon: '🎉', color: 'bg-pink-100 dark:bg-pink-900/30' },
                { name: 'Field Trips', icon: '🚌', color: 'bg-orange-100 dark:bg-orange-900/30' },
                { name: 'Achievements', icon: '🏅', color: 'bg-amber-100 dark:bg-amber-900/30' },
              ].map((category) => (
                <div
                  key={category.name}
                  className={`${category.color} p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-text-primary">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <XMarkIcon className="h-8 w-8" />
          </button>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </button>
          )}
          {currentIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronRightIcon className="h-10 w-10" />
            </button>
          )}

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getCloudinaryUrl(selectedImage.publicId, { width: 1200, quality: 'auto:best' })}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">
                {selectedImage.title}
              </h3>
              {selectedImage.event && (
                <p className="text-white/80 mt-1">{selectedImage.event}</p>
              )}
              {selectedImage.date && (
                <p className="text-white/60 text-sm mt-1">{selectedImage.date}</p>
              )}
              {selectedImage.description && (
                <p className="text-white/70 text-sm mt-2 max-w-xl mx-auto">
                  {selectedImage.description}
                </p>
              )}
              <p className="text-white/50 text-sm mt-2">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

