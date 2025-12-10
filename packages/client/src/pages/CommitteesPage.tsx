import React, { useState } from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { 
  DocumentArrowDownIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BookOpenIcon,
  ExclamationTriangleIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';

interface CommitteeMember {
  name: string;
  designation: string;
  role: string;
}

interface Committee {
  id: string;
  name: string;
  session: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  members: CommitteeMember[];
}

const CommitteesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('anti-bullying');
  
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const tabsRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const contentRef = useGSAP({ animation: 'fadeIn', delay: 0.4 });

  const committees: Committee[] = [
    {
      id: 'anti-bullying',
      name: 'Anti-Bullying Committee',
      session: '2024-25',
      icon: ShieldCheckIcon,
      members: [
        { name: 'Ms Urvashi Warman', designation: 'Principal, The Palace School', role: 'President' },
        { name: 'Ms Bhavna Godha', designation: 'Teacher, The Palace School', role: 'Vice President' },
        { name: 'Ms Mansi Sharma', designation: 'Counsellor, The Palace School', role: 'Secretary' },
        { name: 'Ms Puja Garg', designation: 'Teacher, The Palace School', role: 'Member' },
        { name: 'Ms Neha Goyal', designation: 'Teacher, The Palace School', role: 'Member' },
        { name: 'Mr Anshul Tholia', designation: 'Internal Auditor, The Palace School', role: 'Member' },
        { name: 'Sher Singh Shekhawat', designation: 'Maintenance Incharge, The Palace School', role: 'Member' },
        { name: 'Oorja Sonkiya', designation: 'Student, The Palace School', role: 'Member' },
        { name: 'Praneel Badaya', designation: 'Student, The Palace School', role: 'Member' },
        { name: 'Impa Chandnani', designation: 'Student, The Palace School', role: 'Member' },
        { name: 'Harsh Vardhan Singh', designation: 'Student, The Palace School', role: 'Member' },
      ]
    },
    {
      id: 'child-abuse',
      name: 'Child Abuse Monitoring Committee',
      session: '2025-26',
      icon: ExclamationTriangleIcon,
      members: [
        { name: 'Ms Urvashi Warman', designation: 'Principal, The Palace School', role: 'Member' },
        { name: 'Ms Surbhi Dhawan', designation: 'Parent Representative on the Managing Committee', role: 'Member' },
        { name: 'Praneel Badaya', designation: 'Student Representative Class XII', role: 'Member' },
        { name: 'Oorja Sonkiya', designation: 'Student Representative Class XII', role: 'Member' },
        { name: 'Ms Shilpa Singh Soni', designation: 'Responsible for Communication and reach out to community, police, SIPU and Child-Welfare Committees', role: 'Member' },
      ]
    },
    {
      id: 'library',
      name: 'Library Committee (Book Selection/Weeding/Discarding)',
      session: '2025-26',
      icon: BookOpenIcon,
      members: [
        { name: 'Purnima Tripathi', designation: 'Librarian', role: 'Member' },
        { name: 'Gaurav Kumar Manwani', designation: 'Librarian', role: 'Member' },
        { name: 'Urvashi Warman', designation: 'Principal', role: 'Member' },
        { name: 'Puja Garg', designation: 'Dean Academics', role: 'Member' },
        { name: 'Bhavna Godha', designation: 'Teacher', role: 'English Coordinator' },
        { name: 'Sweta Gaur', designation: 'Teacher', role: 'Hindi Coordinator' },
        { name: 'Sanjay Vaid', designation: 'Teacher', role: 'Math Coordinator' },
        { name: 'Shamim Khan', designation: 'Teacher', role: 'Science Coordinator' },
        { name: 'Kaishena Joshi', designation: 'Teacher', role: 'Social Science Coordinator' },
        { name: 'Neelima Baj', designation: 'Teacher', role: 'Computer Science Coordinator' },
        { name: 'Preet Shandilya', designation: 'Teacher', role: 'Humanities Coordinator' },
        { name: 'Neha Chaturvedi', designation: 'Teacher', role: 'Humanities Coordinator' },
        { name: 'Neha Goyal', designation: 'Teacher', role: 'Commerce Coordinator' },
        { name: 'Vandana Sharma', designation: 'Teacher', role: 'Commerce Coordinator' },
      ]
    },
    {
      id: 'internal-complaint',
      name: 'Internal Complaint Committee',
      session: '2025-26',
      icon: UserGroupIcon,
      members: [
        { name: 'Ms Urvashi Warman', designation: 'Principal, The Palace School', role: 'Member' },
        { name: 'Ms Rama Datt', designation: 'Member, Princess Diya Kumari Foundation', role: 'Member' },
        { name: 'Mr Anshul Tholia', designation: 'Internal Auditor, The Palace School', role: 'Member' },
        { name: 'Ms Priyanka Negi Mathur', designation: 'Teacher, The Palace School', role: 'Member' },
      ]
    },
    {
      id: 'fee-committee',
      name: 'School Level Fee Committee (SLFC)',
      session: '2024-25',
      icon: CurrencyRupeeIcon,
      members: [
        { name: 'Mrs Rama Datt', designation: 'Management Representative', role: 'President' },
        { name: 'Mrs. Urvashi Warman', designation: 'Principal', role: 'Secretary' },
        { name: 'Mrs Neha Goyal', designation: 'Teacher Nominated by the Managing Committee', role: 'Member' },
        { name: 'Mrs Priyanka Negi Mathur', designation: 'Teacher Nominated by the Managing Committee', role: 'Member' },
        { name: 'Mrs Puja Garg', designation: 'Teacher Nominated by the Managing Committee', role: 'Member' },
        { name: 'Mrs Surabhi Dhawan', designation: 'Parent Selected through Lottery', role: 'Member' },
        { name: 'Mrs Gauri Mittal', designation: 'Parent Selected through Lottery', role: 'Member' },
        { name: 'Mr Prem Chandani', designation: 'Parent Selected through Lottery', role: 'Member' },
        { name: 'Mr Manish Saini', designation: 'Parent Selected through Lottery', role: 'Member' },
        { name: 'Mr Ashish Jain', designation: 'Parent Selected through Lottery', role: 'Member' },
      ]
    }
  ];

  const activeCommittee = committees.find(c => c.id === activeTab) || committees[0];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/committees-2025-26.pdf';
    link.download = 'The-Palace-School-Committees-2025-26.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School Committees
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Transparency and governance through dedicated committees ensuring 
              the welfare of students, staff, and the school community.
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center bg-white text-primary-600 hover:bg-bg-secondary px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <DocumentArrowDownIcon className="h-6 w-6 mr-2" />
              Download Committees PDF
            </button>
          </div>
        </div>
      </section>

      {/* School Info Banner */}
      <section className="bg-bg-secondary py-4 border-b border-border-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
            <span><strong className="text-text-primary">Affiliation No:</strong> 1730614</span>
            <span><strong className="text-text-primary">School Code:</strong> 10955</span>
            <span><strong className="text-text-primary">Principal:</strong> Ms Urvashi Warman</span>
          </div>
        </div>
      </section>

      {/* Tabs and Content Section */}
      <section className="py-12 bg-bg-primary">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div ref={tabsRef} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {committees.map((committee) => {
                const IconComponent = committee.icon;
                return (
                  <button
                    key={committee.id}
                    onClick={() => setActiveTab(committee.id)}
                    className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                      activeTab === committee.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-surface-primary text-text-primary hover:bg-surface-secondary border border-border-primary'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                    <span className="hidden sm:inline">{committee.name.split(' ')[0]}</span>
                    <span className="sm:hidden">{committee.name.split(' ')[0].substring(0, 4)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div ref={contentRef} className="max-w-5xl mx-auto">
            <div className="bg-surface-primary rounded-2xl shadow-lg border border-border-primary overflow-hidden">
              {/* Committee Header */}
              <div className="bg-primary-600 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <activeCommittee.icon className="h-8 w-8 mr-3" />
                    <div>
                      <h2 className="text-2xl font-bold">{activeCommittee.name}</h2>
                      <p className="text-primary-100">Academic Session {activeCommittee.session}</p>
                    </div>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <span className="text-sm font-medium">{activeCommittee.members.length} Members</span>
                  </div>
                </div>
              </div>

              {/* Committee Members Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bg-secondary">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">S.No.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Designation</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-primary">
                    {activeCommittee.members.map((member, index) => (
                      <tr 
                        key={index} 
                        className="hover:bg-bg-secondary transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-sm text-text-secondary">{index + 1}</td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-text-primary">{member.name}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-text-secondary">{member.designation}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            member.role === 'President' || member.role === 'Secretary'
                              ? 'bg-primary-100 text-primary-700'
                              : member.role === 'Vice President'
                              ? 'bg-secondary-100 text-secondary-700'
                              : 'bg-bg-secondary text-text-secondary'
                          }`}>
                            {member.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Committee Footer */}
              <div className="bg-bg-secondary p-4 border-t border-border-primary">
                <p className="text-sm text-text-secondary text-center">
                  As per the notification issued by The Palace School Educational Society, Jaipur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Note */}
      <section className="py-12 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-text-primary mb-4">Statutory Compliance</h3>
            <p className="text-text-secondary leading-relaxed">
              The Internal Complaint Committee is constituted as required under Section 4(1) of the 
              Prevention of The Sexual Harassment of Women at Work Place (Prevention, Prohibition and Redressal) Act, 2013. 
              All committees are formed to ensure transparency, safety, and welfare of all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Our Committees?
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-2xl mx-auto">
            Contact us for more information about our school governance and committee activities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 hover:bg-bg-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CommitteesPage;

