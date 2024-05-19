const express = require("express");
const { mongoose } = require('mongoose');
const { authMiddleware } = require("../middleware");
const { Course } = require("../db");

const router = express.Router();

const DEFAULT_COURSE_ID = '60c72b1f9f1b2c001c8e4d9c'; 

// Get user's course details
router.get('/course', authMiddleware, async (req, res) => {
  try {
    const course = await Course.findById(DEFAULT_COURSE_ID);
    if (!course) {
      return res.status(404).send({ error: 'Course not found' });
    }
    res.send(course);
  } catch (error) {
    res.status(500).send();
  }
});

// Update user progress
router.put('/progress', authMiddleware, async (req, res) => {
  const { progress } = req.body;

  try {
    req.user.progress = progress;
    await req.user.save();
    res.send({ message: 'Progress updated successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add a bookmark
router.post('/bookmarks', authMiddleware, async (req, res) => {
  const { videoId } = req.body;

  try {
    if (!req.user.bookmarks.includes(videoId)) {
      req.user.bookmarks.push(videoId);
      await req.user.save();
    }
    res.send({ message: 'Bookmark added successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Remove a bookmark
router.delete('/bookmarks/:videoId', authMiddleware, async (req, res) => {
  const { videoId } = req.params;

  try {
    req.user.bookmarks = req.user.bookmarks.filter(bookmark => bookmark !== videoId);
    await req.user.save();
    res.send({ message: 'Bookmark removed successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;