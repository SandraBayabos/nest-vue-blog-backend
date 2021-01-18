import * as mongoose from 'mongoose';

// use Mongoose to define the type of data we will store in the db
export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: String,
  date_posted: String
})