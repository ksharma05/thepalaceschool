import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Activity,
  AlertCircle,
  BookOpen,
  Building,
  Calendar,
  FileText,
  Home,
  IndianRupee,
  Mail,
  Shield,
  User,
  Users,
} from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { decodeBase64Url } from '../utils/helpers';

const admissionFormSchema = z.object({
  studentName: z.string().min(1, 'Student name is required'),
  dob: z.string().min(1, 'Date of Birth is required'),
  religion: z.string().min(1, 'Religion is required'),
  fatherName: z.string().min(1, 'Father name is required'),
  fatherPhone: z
    .string()
    .min(10, 'Valid phone number is required')
    .max(10, 'Phone number must be exactly 10 digits'),
  fatherWhatsapp: z
    .string()
    .max(10, 'WhatsApp number must be exactly 10 digits')
    .optional()
    .or(z.literal('')),
  fatherEmail: z.string().email('Valid email is required').optional().or(z.literal('')),
  motherName: z.string().min(1, 'Mother name is required'),
  motherPhone: z
    .string()
    .max(10, 'Phone number must be exactly 10 digits')
    .optional()
    .or(z.literal('')),
  motherWhatsapp: z
    .string()
    .max(10, 'WhatsApp number must be exactly 10 digits')
    .optional()
    .or(z.literal('')),
  motherEmail: z.string().email('Valid email is required').optional().or(z.literal('')),
  residentialAddress: z.string().min(1, 'Residential address is required'),
  admissionStandard: z.string().min(1, 'Admission standard is required'),
  notes: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof admissionFormSchema>;

interface SchoolData {
  centerId: number;
  branchName: string;
  branchCode: string;
  branchAddress: string;
  logoPhotoImageURL: string;
  coverPhotoImageURL: string;
  createdDate: string;
  updatedDate: string;
}

interface ToastState {
  visible: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
}

const inputClass =
  'w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-600/20 transition-colors duration-200';

const selectClass =
  'w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 bg-white focus:border-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-600/20 transition-colors duration-200 appearance-none';

const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';
const errorClass = 'mt-1 text-xs text-red-500';

const AdmissionEnquiryPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingSchool, setIsLoadingSchool] = useState(true);
  const [schoolData, setSchoolData] = useState<SchoolData | null>(null);
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    type: 'success',
    title: '',
    message: '',
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const centerId = searchParams.get('centerId') ?? '0';
  const boardId = searchParams.get('boardId') ?? '0';

  const ADMISSION_API_URL =
    centerId !== '0' && boardId !== '0'
      ? `https://server-core.agasty.ai/agasty/api/v1/admMngmnt/center/${centerId}/board/${boardId}`
      : null;

  const SCHOOL_INFO_API_URL =
    centerId !== '0'
      ? `https://server-core.agasty.ai/agasty/api/v1/unauth/info/center/${centerId}`
      : null;

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      studentName: '',
      dob: '',
      religion: '',
      fatherName: '',
      fatherPhone: '',
      fatherWhatsapp: '',
      fatherEmail: '',
      motherName: '',
      motherPhone: '',
      motherWhatsapp: '',
      motherEmail: '',
      residentialAddress: '',
      admissionStandard: '',
      notes: '',
    },
    mode: 'onChange',
  });

  const showToast = (type: 'success' | 'error', title: string, message: string) => {
    setToast({ visible: true, type, title, message });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
  };

  useEffect(() => {
    const fetchSchoolData = async () => {
      if (!SCHOOL_INFO_API_URL) {
        setIsLoadingSchool(false);
        return;
      }
      try {
        setIsLoadingSchool(true);
        const response = await fetch(SCHOOL_INFO_API_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data: SchoolData = await response.json();
        setSchoolData(data);
      } catch (error) {
        console.error('Error fetching school data:', error);
      } finally {
        setIsLoadingSchool(false);
      }
    };
    fetchSchoolData();
  }, [centerId]);

  const onSubmit = async (data: AdmissionFormValues) => {
    setIsSubmitting(true);
    try {
      if (!ADMISSION_API_URL) {
        showToast('error', 'Error', 'Unable to process admission. Please try again later.');
        return;
      }

      const payload = {
        title: 'Admission Form',
        description: 'New student admission registration',
        status: 'DRAFT',
        studentName: data.studentName,
        dateOfBirth: new Date(data.dob).toISOString(),
        religion: data.religion,
        fatherName: data.fatherName,
        fatherPhone: data.fatherPhone,
        fatherWhatsapp: data.fatherWhatsapp || '',
        fatherEmail: data.fatherEmail || '',
        motherName: data.motherName,
        motherPhone: data.motherPhone || '',
        motherWhatsapp: data.motherWhatsapp || '',
        motherEmail: data.motherEmail || '',
        residentialAddress: data.residentialAddress,
        admissionStandard: data.admissionStandard,
        notes: data.notes || '',
      };

      const response = await fetch(ADMISSION_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorData: { message?: string } = {};
        try {
          errorData = errorText ? JSON.parse(errorText) : {};
        } catch {
          errorData = {};
        }
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      showToast('success', 'Registration Successful!', 'Your admission enquiry has been submitted. We will be in touch shortly.');
      reset();
      setTimeout(() => navigate('/'), 2500);
    } catch (error) {
      console.error('Error submitting admission form:', error);
      showToast('error', 'Submission Failed', 'Failed to register admission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Toast Notification */}
      {toast.visible && (
        <div
          className={`fixed top-6 right-6 z-50 max-w-sm w-full rounded-xl shadow-2xl px-5 py-4 flex items-start gap-3 transition-all duration-300 ${
            toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          <div className="mt-0.5 flex-shrink-0">
            {toast.type === 'success' ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
          </div>
          <div>
            <p className="font-semibold text-sm">{toast.title}</p>
            <p className="text-sm text-white/90 mt-0.5">{toast.message}</p>
          </div>
          <button
            onClick={() => setToast((t) => ({ ...t, visible: false }))}
            className="ml-auto flex-shrink-0 text-white/70 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* School Cover Photo / Hero */}
        {!isLoadingSchool && schoolData && (
          <div className="mb-8">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div
                className="relative h-64 md:h-80 w-full bg-gradient-to-r from-secondary-600 to-secondary-800"
                style={
                  schoolData.coverPhotoImageURL
                    ? {
                        backgroundImage: `url(${decodeBase64Url(schoolData.coverPhotoImageURL)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-semibold">Admission Registration</p>
                  <p className="text-white/80 text-sm mt-1">
                    {schoolData.branchName} — {schoolData.branchAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading skeleton for cover */}
        {isLoadingSchool && (
          <div className="mb-8 h-64 rounded-2xl bg-gray-200 animate-pulse" />
        )}

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Side — Important Notes */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-amber-600 to-orange-700 px-8 pb-6 pt-8 text-white text-center">
                  <div className="mb-4 inline-block rounded-2xl bg-white/20 p-3">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold">Important Notes</h2>
                  <p className="text-sm text-amber-100">
                    Please read carefully before filling the application
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5">
                  {/* Note 1 */}
                  <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 p-5 transition-all duration-300 hover:shadow-md">
                    <div className="mb-3 flex items-center space-x-3">
                      <div className="rounded-full bg-red-500 p-2 text-white flex-shrink-0">
                        <IndianRupee className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-gray-900">Registration Fee</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      The registration fee of{' '}
                      <span className="font-bold text-red-600">₹ 1500/-</span> is
                      non-refundable and registration does not guarantee admission.
                    </p>
                  </div>

                  {/* Note 2 */}
                  <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-5 transition-all duration-300 hover:shadow-md">
                    <div className="mb-3 flex items-center space-x-3">
                      <div className="rounded-full bg-green-500 p-2 text-white flex-shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-gray-900">School Fee Structure</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      The{' '}
                      <span className="font-bold text-red-600">School Fee</span> is a
                      tuition fee charged for the course of study. A certificate for
                      payment of{' '}
                      <span className="font-bold text-red-600">Tuition Fee</span> will
                      be provided for the amount paid.
                    </p>
                  </div>

                  {/* Note 3 */}
                  <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-5 transition-all duration-300 hover:shadow-md">
                    <div className="mb-3 flex items-center space-x-3">
                      <div className="rounded-full bg-purple-500 p-2 text-white flex-shrink-0">
                        <Activity className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-gray-900">Extra Activities</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Any activity beyond school hours and/or outsourced/extra services
                      will be charged separately. Parents may choose any offered
                      activity on payment.
                    </p>
                  </div>

                  {/* Note 4 */}
                  <div className="rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 p-5 transition-all duration-300 hover:shadow-md">
                    <div className="mb-3 flex items-center space-x-3">
                      <div className="rounded-full bg-amber-500 p-2 text-white flex-shrink-0">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-gray-900">Age Criteria</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      The age prescribed by the state government will be considered in
                      case of any objection. The school is under legal obligation to
                      follow state government directions.
                    </p>
                  </div>

                  {/* Declaration */}
                  <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <div>
                        <p className="text-sm font-semibold text-amber-900">
                          Important Declaration
                        </p>
                        <p className="text-xs text-amber-800 mt-1">
                          By submitting this form, you acknowledge that you have read
                          and agreed to all terms and conditions mentioned above.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 px-8 pb-8 pt-8 text-white text-center">
                <div className="mb-4 inline-block rounded-2xl bg-white/20 p-3">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h1 className="mb-2 text-3xl font-bold">Admission Registration</h1>
                <p className="text-lg text-white/80">
                  Complete the form below to register for admission
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-10">
                {/* Basic Information */}
                <section className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-blue-100 p-2">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Basic Information</h3>
                  </div>
                  <hr className="border-gray-200" />

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Student Name */}
                    <div>
                      <label className={labelClass}>Student's Name *</label>
                      <input
                        {...register('studentName')}
                        placeholder="Enter student full name"
                        className={inputClass}
                      />
                      {errors.studentName && (
                        <p className={errorClass}>{errors.studentName.message}</p>
                      )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className={labelClass}>Date of Birth *</label>
                      <input
                        {...register('dob')}
                        type="date"
                        max={new Date().toISOString().split('T')[0]}
                        className={inputClass}
                      />
                      {errors.dob && (
                        <p className={errorClass}>{errors.dob.message}</p>
                      )}
                    </div>

                    {/* Religion */}
                    <div>
                      <label className={labelClass}>Religion *</label>
                      <div className="relative">
                        <Controller
                          control={control}
                          name="religion"
                          render={({ field }) => (
                            <select {...field} className={selectClass}>
                              <option value="">Select religion</option>
                              <option value="Hindu">Hindu</option>
                              <option value="Muslim">Muslim</option>
                              <option value="Sikh">Sikh</option>
                              <option value="Christian">Christian</option>
                              <option value="Buddhist">Buddhist</option>
                              <option value="Jain">Jain</option>
                              <option value="Parsi">Parsi</option>
                              <option value="Jewish">Jewish</option>
                              <option value="Other">Other</option>
                            </select>
                          )}
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.religion && (
                        <p className={errorClass}>{errors.religion.message}</p>
                      )}
                    </div>

                    {/* Admission Standard */}
                    <div>
                      <label className={labelClass}>Admission Standard *</label>
                      <div className="relative">
                        <Controller
                          control={control}
                          name="admissionStandard"
                          render={({ field }) => (
                            <select {...field} className={selectClass}>
                              <option value="">Select standard</option>
                              <option value="LEVEL I">LEVEL I</option>
                              <option value="LEVEL II">LEVEL II</option>
                              <option value="LEVEL III">LEVEL III</option>
                              <option value="1">I</option>
                              <option value="2">II</option>
                              <option value="3">III</option>
                              <option value="4">IV</option>
                              <option value="5">V</option>
                              <option value="6">VI</option>
                              <option value="7">VII</option>
                              <option value="8">VIII</option>
                              <option value="9">IX</option>
                              <option value="10">X</option>
                              <option value="11">XI</option>
                              <option value="12">XII</option>
                            </select>
                          )}
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.admissionStandard && (
                        <p className={errorClass}>{errors.admissionStandard.message}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Father's Information */}
                <section className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-blue-100 p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Father's Information</h3>
                  </div>
                  <hr className="border-gray-200" />

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Father Name */}
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input
                        {...register('fatherName')}
                        placeholder="Enter father's name"
                        className={inputClass}
                      />
                      {errors.fatherName && (
                        <p className={errorClass}>{errors.fatherName.message}</p>
                      )}
                    </div>

                    {/* Father Phone */}
                    <div>
                      <label className={labelClass}>Phone *</label>
                      <input
                        {...register('fatherPhone')}
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="10-digit phone number"
                        className={inputClass}
                      />
                      {errors.fatherPhone && (
                        <p className={errorClass}>{errors.fatherPhone.message}</p>
                      )}
                    </div>

                    {/* Father WhatsApp */}
                    <div>
                      <label className={labelClass}>WhatsApp</label>
                      <div className="relative">
                        <IoLogoWhatsapp className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                        <input
                          {...register('fatherWhatsapp')}
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="WhatsApp number"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                      {errors.fatherWhatsapp && (
                        <p className={errorClass}>{errors.fatherWhatsapp.message}</p>
                      )}
                    </div>

                    {/* Father Email */}
                    <div>
                      <label className={labelClass}>Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          {...register('fatherEmail')}
                          type="email"
                          placeholder="Email address"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                      {errors.fatherEmail && (
                        <p className={errorClass}>{errors.fatherEmail.message}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Mother's Information */}
                <section className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-pink-100 p-2">
                      <Users className="h-5 w-5 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Mother's Information</h3>
                  </div>
                  <hr className="border-gray-200" />

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Mother Name */}
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input
                        {...register('motherName')}
                        placeholder="Enter mother's name"
                        className={inputClass}
                      />
                      {errors.motherName && (
                        <p className={errorClass}>{errors.motherName.message}</p>
                      )}
                    </div>

                    {/* Mother Phone */}
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        {...register('motherPhone')}
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="10-digit phone number"
                        className={inputClass}
                      />
                      {errors.motherPhone && (
                        <p className={errorClass}>{errors.motherPhone.message}</p>
                      )}
                    </div>

                    {/* Mother WhatsApp */}
                    <div>
                      <label className={labelClass}>WhatsApp</label>
                      <div className="relative">
                        <IoLogoWhatsapp className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                        <input
                          {...register('motherWhatsapp')}
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="WhatsApp number"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                      {errors.motherWhatsapp && (
                        <p className={errorClass}>{errors.motherWhatsapp.message}</p>
                      )}
                    </div>

                    {/* Mother Email */}
                    <div>
                      <label className={labelClass}>Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          {...register('motherEmail')}
                          type="email"
                          placeholder="Email address"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                      {errors.motherEmail && (
                        <p className={errorClass}>{errors.motherEmail.message}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Residential Address */}
                <section className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-orange-100 p-2">
                      <Home className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Residential Address</h3>
                  </div>
                  <hr className="border-gray-200" />

                  <div>
                    <label className={labelClass}>Residential Address *</label>
                    <textarea
                      {...register('residentialAddress')}
                      placeholder="Enter complete residential address"
                      rows={3}
                      className={`${inputClass} min-h-[90px] resize-none`}
                    />
                    {errors.residentialAddress && (
                      <p className={errorClass}>{errors.residentialAddress.message}</p>
                    )}
                  </div>
                </section>

                {/* Special Needs */}
                <section className="space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-indigo-100 p-2">
                      <FileText className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Please mention if your ward is a child with special needs. Brief details.
                    </h3>
                  </div>
                  <hr className="border-gray-200" />

                  <div>
                    <label className={labelClass}>Additional Notes</label>
                    <textarea
                      {...register('notes')}
                      placeholder="Enter any special requirements, medical conditions, or additional information about the child"
                      rows={3}
                      className={`${inputClass} min-h-[90px] resize-none`}
                    />
                  </div>
                </section>

                {/* School Info for screen readers & fallback */}
                {!isLoadingSchool && schoolData && !schoolData.logoPhotoImageURL && (
                  <div className="flex items-center gap-2 text-secondary-600">
                    <Building className="h-5 w-5" />
                    <span className="font-semibold">{schoolData.branchName}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full rounded-2xl bg-gradient-to-r from-secondary-600 to-secondary-800 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : isValid ? (
                      <span className="flex items-center justify-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Complete Admission Registration
                      </span>
                    ) : (
                      'Please fill all required fields'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnquiryPage;
