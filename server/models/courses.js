const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new mongoose.Schema({
  department: String,
  programs: [
    {
      program_type: String,
      duration: String,
      courses: [
        {
          course_code: String,
          course_name: String,
          starting_date: Date,
          ending_date: Date,
          fees: String,
          description: String,
        },
      ],
    },
  ],
});

const CourseModel = mongoose.model("Courses", courseSchema);
module.exports = CourseModel;
