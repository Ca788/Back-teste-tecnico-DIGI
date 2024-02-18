import mongoose from "mongoose";

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  description: String,
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
