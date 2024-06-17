import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  price: {
    type: String,
    required: [true, "Price cannot be empty"],
  },
  image: {
    type: String,
  },
  instructor: [{ type: mongoose.Types.ObjectId, ref: "Instructor" }],
});

const Course = mongoose.Model("Course", courseSchema);
