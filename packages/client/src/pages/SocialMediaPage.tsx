import React, { useState, useEffect } from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { 
  ShareIcon, 
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  UserGroupIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { socialPlatforms, samplePosts } from '../config/socialMedia';
import type { SocialPost } from '../config/socialMedia';
import { getCloudinaryUrl } from '../config/cloudinary';
import { API_ENDPOINTS, apiRequest } from '../config/api';

const SocialMediaPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const platformsRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const galleryRef = useGSAP({ animation: 'slideInRight', delay: 0.4 });
  const updatesRef = useGSAP({ animation: 'scaleIn', delay: 0.6 });

  const [posts, setPosts] = useState<SocialPost[]>(samplePosts);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch posts from backend
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await apiRequest(API_ENDPOINTS.SOCIAL_MEDIA.POSTS);
      
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setPosts(result.data);
        } else {
          // Fallback to sample posts if API fails
          setPosts(samplePosts);
        }
      } else {
        // Fallback to sample posts if API fails
        setPosts(samplePosts);
      }
    } catch (error) {
      console.error('Error fetching social media posts:', error);
      // Fallback to sample posts on error
      setPosts(samplePosts);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Helper function to format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return '1 day ago';
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  const socialMediaStats = [
    { label: 'Total Followers', value: '10K+', icon: UserGroupIcon },
    { label: 'Monthly Reach', value: '50K+', icon: ShareIcon },
    { label: 'Engagement Rate', value: '85%', icon: ChatBubbleLeftRightIcon },
    { label: 'Content Posts', value: '500+', icon: PhotoIcon }
  ];

  const getSocialIcon = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488'
    };
    return iconMap[iconName] || '';
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ShareIcon className="h-24 w-24 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Social Media
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stay connected with The Palace School community across all platforms
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialMediaStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section ref={platformsRef} className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-xl text-text-secondary">
              Connect with us across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface-secondary p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-border-primary hover:border-primary-500"
              >
                <div className="flex items-center mb-4">
                  <div className={`${platform.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={getSocialIcon(platform.icon)} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary-600 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {platform.handle}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm mb-3">
                  {platform.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {platform.followers} followers
                  </span>
                  <span className="text-text-tertiary text-sm group-hover:text-primary-600 transition-colors">
                    Follow →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section ref={galleryRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Recent Posts
              </h2>
              <button
                onClick={fetchPosts}
                disabled={isLoading}
                className="p-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors disabled:opacity-50"
                title="Refresh posts"
              >
                <ArrowPathIcon className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            <p className="text-xl text-text-secondary">
              Latest updates from our social media channels
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
              <p className="mt-4 text-text-secondary">Loading posts...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border-primary hover:border-primary-500"
                >
                  {/* Post Image */}
                  <div className="aspect-video bg-bg-primary overflow-hidden">
                    {post.image ? (
                      <img
                        src={getCloudinaryUrl(post.image, { width: 600, height: 400 })}
                        alt={post.content}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <PhotoIcon className="h-16 w-16 text-primary-400" />
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary-600">
                        {post.platform}
                      </span>
                      <span className="text-xs text-text-tertiary">
                        {formatTimestamp(post.timestamp)}
                      </span>
                    </div>
                    <p className="text-text-primary text-sm mb-4 line-clamp-3">
                      {post.content}
                    </p>

                    {/* Post Engagement */}
                    <div className="flex items-center gap-4 text-text-tertiary text-sm">
                      {post.likes && (
                        <div className="flex items-center gap-1">
                          <HeartIcon className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                      )}
                      {post.comments && (
                        <div className="flex items-center gap-1">
                          <ChatBubbleOvalLeftIcon className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      )}
                      {post.shares && (
                        <div className="flex items-center gap-1">
                          <ArrowPathIcon className="h-4 w-4" />
                          <span>{post.shares}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 text-xs text-primary-600 group-hover:underline">
                      View Post →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && posts.length === 0 && (
            <div className="text-center py-12">
              <PhotoIcon className="h-24 w-24 mx-auto text-text-tertiary mb-4" />
              <h3 className="text-xl font-bold text-text-primary mb-2">No Posts Available</h3>
              <p className="text-text-secondary">Check back soon for updates from our social media!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section ref={updatesRef} className="py-20 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated with school news, events, 
            and student achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/thepalaceschool?igsh=MWdidzVyYWV5NThncw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-bg-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1AF8tQzQWH/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Like on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;
