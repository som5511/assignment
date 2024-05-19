const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/assignment")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    progress: {type: Number, default: 0},
    bookmarks: [String]
});

const LectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true 
  }
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lectures: [LectureSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});



const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', CourseSchema);


module.exports = {
	User, Course
};