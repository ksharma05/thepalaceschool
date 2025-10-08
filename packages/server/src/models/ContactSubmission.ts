import { Schema, model, Document } from 'mongoose';

export interface IContactSubmission extends Document {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
