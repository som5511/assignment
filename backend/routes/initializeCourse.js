const Course = require('./routes/Course');

const initializeCourse = async () => {
  const defaultCourse = {
    title: 'Introduction to Machine Learning',
    description: 'This is a comprehensive course on Machine Learning.',
    lectures: [
      {
        title: '1. Introduction to Machine Learning',
        videoUrl: 'https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png',
        duration: 10
      },
      {
        title: '2. Concepts of Machine Learning',
        videoUrl: 'https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png',
        duration: 15
      },
      {
        title: '3. Application of Machine Learning',
        videoUrl: 'https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png',
        duration: 20
      },
      {
        title: '4. Neural Network and Deep Learning',
        videoUrl: 'https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png',
        duration: 25
      }
    ]
  };

  try {
    let course = await Course.findOne({ title: defaultCourse.title });
    if (!course) {
      course = new Course(defaultCourse);
      await course.save();
      console.log('Default course created successfully');
    } else {
      console.log('Default course already exists');
    }
    return course;
  } catch (error) {
    console.error('Error initializing default course:', error);
  }
};

module.exports = initializeCourse;
