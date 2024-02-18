import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://carlos:aaNY3IopP8VleBpe@cluster0.qhg0m7p.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MondoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectToDatabase;
