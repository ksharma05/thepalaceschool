import React, { useState } from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { API_ENDPOINTS, apiRequest } from '../config/api';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contactInfoRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const formRef = useGSAP({ animation: 'slideInRight', delay: 0.4 });
  const mapRef = useGSAP({ animation: 'scaleIn', delay: 0.6 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await apiRequest(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      details: [
        'The Palace School',
        '123 Education Street',
        'Academic City, AC 12345',
        'United States'
      ]
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: [
        'Main Office: +1 (555) 123-4567',
        'Admissions: +1 (555) 123-4568',
        'Emergency: +1 (555) 123-4569'
      ]
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: [
        'info@palaceschool.edu',
        'admissions@palaceschool.edu',
        'support@palaceschool.edu'
      ]
    },
    {
      icon: ClockIcon,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactInfoRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-text-secondary">
              Multiple ways to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-primary p-6 rounded-xl shadow-lg border border-border-primary text-center"
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-text-secondary text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Send us a Message
                </h2>
                <p className="text-text-secondary">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success-500 border border-success-600 rounded-lg flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-white mr-3" />
                  <span className="text-white">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error-500 border border-error-600 rounded-lg">
                  <span className="text-white">
                    Sorry, there was an error sending your message. Please try again.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-bg-primary text-text-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="academic">Academic Programs</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-bg-primary text-text-primary resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map */}
            <div ref={mapRef}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Find Us
                </h2>
                <p className="text-text-secondary">
                  Visit our campus and experience the Palace School difference.
                </p>
              </div>

              {/* Map placeholder - Replace with actual map integration */}
              <div className="bg-bg-secondary rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="h-16 w-16 text-text-tertiary mx-auto mb-4" />
                    <p className="text-text-primary text-lg font-semibold">
                      Interactive Map
                    </p>
                    <p className="text-text-tertiary text-sm">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-bg-secondary p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Directions
                </h3>
                <div className="space-y-2 text-text-secondary text-sm">
                  <p>• Located in the heart of Academic City</p>
                  <p>• 5 minutes from City Center</p>
                  <p>• Public transportation available</p>
                  <p>• Ample parking space</p>
                  <p>• Wheelchair accessible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
