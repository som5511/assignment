const express = require('express');
const userRouter = require("./user");
const courseRouter = require("./course");

const router = express.Router();

router.use("/user", userRouter);
router.use("/course", courseRouter);

module.exports = router;