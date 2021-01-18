import { Document } from 'mongoose';

// Defined the tyoes of data for a Post type
export interface Post extends Document {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string
}