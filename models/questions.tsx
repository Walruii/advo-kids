import mongoose, { Document } from "mongoose";

export interface SimpleQuestion {
  _id: string;
  questionStatement: string;
  questionNumber: number;
  storylineNumber: number;
  language: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: number;
}
export interface QuestionSchema extends Document {
  questionStatement: string;
  questionNumber: number;
  storylineNumber: number;
  language: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: number;
}
const questionSchema = new mongoose.Schema({
  questionStatement: { type: String, required: true },
  questionNumber: { type: Number, required: true },
  storylineNumber: Number,
  language: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: Number,
});

// mongoose.models = {};
const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);
// var User = mongoose.model('User', userSchema);

export default Question;
