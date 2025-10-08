import { Schema, model, Document } from 'mongoose';

export interface IStaticContent extends Document {
  page: string;
  content: string;
}

const StaticContentSchema = new Schema<IStaticContent>({
  page: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IStaticContent>('StaticContent', StaticContentSchema);
