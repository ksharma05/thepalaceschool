import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useGSAP } from '../../hooks/useGSAP';
import type { LeadershipProfile } from '../../utils/leadershipProfiles';

interface LeadershipDetailTemplateProps {
  profile: LeadershipProfile;
}

const LeadershipDetailTemplate: React.FC<LeadershipDetailTemplateProps> = ({ profile }) => {
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const { detail } = profile;

  return (
    <div className="min-h-screen bg-bg-primary">
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
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                {detail.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <div className="text-text-secondary leading-relaxed">
                  <img
                    src={profile.image}
                    alt={detail.imageAlt}
                    className="float-left w-40 sm:w-56 md:w-64 mr-6 mb-4 rounded-xl shadow-lg object-cover"
                  />

                  {detail.bioParagraphs.map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}

                  <div className="clear-both" />

                  <div className="mt-8 pt-6 border-t border-border-primary">
                    {detail.signature.salutation && (
                      <p className="text-lg font-medium text-text-secondary mb-4">
                        {detail.signature.salutation}
                      </p>
                    )}
                    <p className="text-lg font-semibold text-text-primary mb-1">
                      {detail.signature.name}
                    </p>
                    {/* {detail.signature.roleLines.map((line) => (
                      <p
                        key={line.text}
                        className={
                          line.variant === 'secondary'
                            ? 'text-text-secondary'
                            : 'text-primary-600 font-medium'
                        }
                      >
                        {line.text}
                      </p>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-surface-primary rounded-xl shadow-lg p-8 border border-border-primary">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                {detail.aboutHeading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {detail.aboutBlocks.map((block) => (
                  <div key={block.heading}>
                    <h4 className="text-lg font-semibold text-primary-600 mb-3">
                      {block.heading}
                    </h4>
                    <p className="text-text-secondary">
                      {block.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipDetailTemplate;
