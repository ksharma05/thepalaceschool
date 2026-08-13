import React from 'react';
import { useGSAP } from '../hooks/useGSAP';
import {
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  BanknotesIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

interface OneTimeFee {
  label: string;
  amount: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  note?: string;
}

interface FeeRow {
  className: string;
  annual2526: number;
  quarterly2526: number;
  annual2627: number;
  quarterly2627: number;
  annual2728: number;
  quarterly2728: number;
}

interface DisclosureDocument {
  title: string;
  description: string;
  href: string;
}

const formatCurrency = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

const oneTimeFees: OneTimeFee[] = [
  { label: 'Registration Fee', amount: formatCurrency(1500), icon: ClipboardDocumentCheckIcon },
  { label: 'Admission Fee', amount: formatCurrency(30000), icon: AcademicCapIcon },
  { label: 'Development Fee', amount: formatCurrency(5000), icon: BuildingLibraryIcon },
  { label: 'Caution Money', amount: formatCurrency(10000), icon: BanknotesIcon, note: 'Refundable' },
];

const feeRows: FeeRow[] = [
  { className: 'M-I, M-II, M-III', annual2526: 108998, quarterly2526: 27250, annual2627: 122078, quarterly2627: 30520, annual2728: 136728, quarterly2728: 34182 },
  { className: 'I - V', annual2526: 112332, quarterly2526: 28083, annual2627: 125811, quarterly2627: 31453, annual2728: 140909, quarterly2728: 35227 },
  { className: 'VI - VIII', annual2526: 114643, quarterly2526: 28661, annual2627: 128400, quarterly2627: 32100, annual2728: 143808, quarterly2728: 35952 },
  { className: 'IX - X', annual2526: 116659, quarterly2526: 29165, annual2627: 130658, quarterly2627: 32665, annual2728: 146337, quarterly2728: 36584 },
  { className: 'XI & XII', annual2526: 119616, quarterly2526: 29904, annual2627: 133970, quarterly2627: 33492, annual2728: 150046, quarterly2728: 37512 },
];

const feeNotes: string[] = [
  'Fee at the time of admission shall be paid via cheque / demand draft drawn in favour of "The Palace School Educational Society".',
  'Fee for the entire academic year is chargeable irrespective of date of admission or leaving the school.',
  'A student will be considered as continuing in the next session only on payment of the 1st instalment of the fee by 15th April of each new academic session.',
  'Remaining fee shall be payable in 3 instalments by 10th of July, October and January of the session. A late payment charge of ₹20 per day (including Sunday / Holiday / Vacation) will be levied on payment of fee after the dates mentioned herein.',
  'Non-payment of instalment by the last day of the month (April, July, October and January) will entail de-enrolment of the student from the rolls of the school without any further notice.',
  'If late payment charges are not added in the payment of fee, the same is recoverable separately.',
  "After school hours' activity of any nature will be separately chargeable. In case a cheque is bounced, the parent will be liable to pay bank charges also.",
  'Additional fees of ₹5,000 will be charged for practicals in Class XI & XII.',
];

const certificateDocuments: DisclosureDocument[] = [
  {
    title: 'CBSE Affiliation Certificate',
    description: 'General affiliation extended up to Senior Secondary level, valid till 31.03.2029',
    href: '/documents/cbse-affiliation-certificate.pdf',
  },
  {
    title: 'RTE Act 2009 Recognition Certificate',
    description: 'Recognition certificate under the Rajasthan Right of Children to Free and Compulsory Education Rules, 2011',
    href: '/documents/rte-recognition-certificate.pdf',
  },
  {
    title: 'DEO Recognition Certificate',
    description: 'Recognition certificate issued under sub-rule (4) of Rule 8-A by the District Elementary Education Officer, Jaipur',
    href: '/documents/deo-certificate.pdf',
  },
  {
    title: 'Building Safety Certificate',
    description: 'Issued by the Executive Engineer, PWD City Dn. III, Jaipur',
    href: '/documents/building-safety-certificate.pdf',
  },
  {
    title: 'Fire Safety NOC',
    description: 'Fire No Objection Certificate issued by Nagar Nigam, Jaipur Heritage',
    href: '/documents/fire-noc.pdf',
  },
  {
    title: 'Water & Sanitation Test Certificate',
    description: 'Potable water test certificate issued by National Test House (NWR), Jaipur',
    href: '/documents/water-sanitation-certificate.pdf',
  },
];

const academicCalendarDocuments: DisclosureDocument[] = [
  {
    title: 'Academic Calendar — Class I to XII',
    description: 'Fixture for the academic session 2026-27 (April 2026 to January 2027)',
    href: '/documents/academic-calendar-class-1-to-12-2026-27.pdf',
  },
  {
    title: 'Academic Calendar — Pre-Primary',
    description: 'Fixture for the academic session 2026-27 (April 2026 to January 2027)',
    href: '/documents/academic-calendar-pre-primary-2026-27.pdf',
  },
];

const DocumentListSection: React.FC<{ documents: DisclosureDocument[] }> = ({ documents }) => (
  <div className="max-w-4xl mx-auto bg-surface-primary rounded-2xl border border-border-primary shadow-lg divide-y divide-border-primary overflow-hidden">
    {documents.map((doc) => (
      <a
        key={doc.title}
        href={doc.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 hover:bg-bg-secondary transition-colors duration-200 group"
      >
        <span className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-lg bg-primary-100 text-primary-700">
          <DocumentTextIcon className="h-6 w-6" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-text-primary">{doc.title}</p>
          <p className="text-sm text-text-secondary">{doc.description}</p>
        </div>
        <span className="flex-shrink-0 flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700">
          View PDF
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </span>
      </a>
    ))}
  </div>
);

const CBSEMandatoryDisclosurePage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const certificatesRef = useGSAP({ animation: 'fadeIn', delay: 0.2 });
  const oneTimeRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const tableRef = useGSAP({ animation: 'fadeIn', delay: 0.4 });
  const notesRef = useGSAP({ animation: 'fadeIn', delay: 0.2 });
  const calendarRef = useGSAP({ animation: 'fadeIn', delay: 0.2 });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-3">
              As per CBSE Affiliation Bye-Laws
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CBSE Mandatory Disclosure
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Affiliation No. 1730614 &middot; School No. 10955 &middot; The Palace School, The City Palace, Jaipur
            </p>
          </div>
        </div>
      </section>

      {/* Documents & Certificates */}
      <section ref={certificatesRef} className="py-16 bg-bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-2">
            Documents & Certificates
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Statutory certificates and compliance documents as mandated by the CBSE Affiliation Bye-Laws, 2018.
          </p>
          <DocumentListSection documents={certificateDocuments} />
        </div>
      </section>

      {/* Academic Calendar */}
      <section ref={calendarRef} className="py-16 bg-bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-2">
            Academic Calendar 2026-27
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Theme of the year: My City My Curriculum &middot; Zero Waste & Sustainability
          </p>
          <DocumentListSection documents={academicCalendarDocuments} />
        </div>
      </section>


      {/* Fee Structure */}
      <section className="py-16 bg-bg-secondary border-y border-border-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-2">
            Fee Structure
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            As approved by the School Level Fee Committee for academic sessions 2025-26 to 2027-28.
          </p>

          {/* One-time Fees */}
          <div ref={oneTimeRef} className="mb-12">
            <h3 className="text-xl font-bold text-text-primary text-center mb-2">
              One-Time Fees (From New Entrant)
            </h3>
            <p className="text-sm text-text-secondary text-center mb-8">
              Applicable for M-I to XII at the time of admission
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {oneTimeFees.map((fee) => {
                const IconComponent = fee.icon;
                return (
                  <div
                    key={fee.label}
                    className="bg-surface-primary rounded-xl border border-border-primary p-6 text-center shadow-lg"
                  >
                    <IconComponent className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                    <p className="text-sm font-medium text-text-secondary mb-1">{fee.label}</p>
                    <p className="text-xl font-bold text-text-primary">{fee.amount}</p>
                    {fee.note && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium bg-success-600/10 text-success-600">
                        {fee.note}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          

          {/* Fee Table */}
          <div ref={tableRef} className="max-w-6xl mx-auto mb-12">
            <div className="bg-surface-primary rounded-2xl shadow-lg border border-border-primary overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <h3 className="text-2xl font-bold">School Fee (INR)</h3>
                <p className="text-primary-100">
                  Fee for academic year 2025-26, effective up to academic year 2027-28
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bg-secondary">
                      <th rowSpan={2} className="px-4 py-4 text-left font-semibold text-text-primary align-bottom">
                        Class
                      </th>
                      <th colSpan={2} className="px-4 py-2 text-center font-semibold text-text-primary border-l border-border-primary">
                        2025-26
                      </th>
                      <th colSpan={2} className="px-4 py-2 text-center font-semibold text-text-primary border-l border-border-primary">
                        2026-27
                      </th>
                      <th colSpan={2} className="px-4 py-2 text-center font-semibold text-text-primary border-l border-border-primary">
                        2027-28
                      </th>
                    </tr>
                    <tr className="bg-bg-secondary">
                      <th className="px-4 py-2 text-right font-medium text-text-secondary border-l border-border-primary">Annual</th>
                      <th className="px-4 py-2 text-right font-medium text-text-secondary">Quarterly</th>
                      <th className="px-4 py-2 text-right font-medium text-text-secondary border-l border-border-primary">Annual</th>
                      <th className="px-4 py-2 text-right font-medium text-text-secondary">Quarterly</th>
                      <th className="px-4 py-2 text-right font-medium text-text-secondary border-l border-border-primary">Annual</th>
                      <th className="px-4 py-2 text-right font-medium text-text-secondary">Quarterly</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-primary">
                    {feeRows.map((row) => (
                      <tr key={row.className} className="hover:bg-bg-secondary transition-colors duration-200">
                        <td className="px-4 py-4 font-medium text-text-primary whitespace-nowrap">{row.className}</td>
                        <td className="px-4 py-4 text-right text-text-secondary border-l border-border-primary">{formatCurrency(row.annual2526)}</td>
                        <td className="px-4 py-4 text-right text-text-secondary">{formatCurrency(row.quarterly2526)}</td>
                        <td className="px-4 py-4 text-right text-text-secondary border-l border-border-primary">{formatCurrency(row.annual2627)}</td>
                        <td className="px-4 py-4 text-right text-text-secondary">{formatCurrency(row.quarterly2627)}</td>
                        <td className="px-4 py-4 text-right text-text-primary font-medium border-l border-border-primary">{formatCurrency(row.annual2728)}</td>
                        <td className="px-4 py-4 text-right text-text-primary font-medium">{formatCurrency(row.quarterly2728)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-bg-secondary p-4 border-t border-border-primary">
                <p className="text-sm text-text-secondary text-center">
                  As approved by the School Level Fee Committee (SLFC) — Principal, The Palace School
                </p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div ref={notesRef} className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">Notes</h3>
            <ol className="space-y-4">
              {feeNotes.map((note, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-text-secondary leading-relaxed">{note}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      

      {/*
        Additional CBSE Mandatory Disclosure sections (Results, Staff (Teaching), and
        School Infrastructure) can be added here as further page sections once that
        data is provided.
      */}

      {/* CTA Section */}
      <section className="py-16 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About These Documents?
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-2xl mx-auto">
            Reach out to us for clarification on fees, certificates, or admission enquiries.
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

export default CBSEMandatoryDisclosurePage;
