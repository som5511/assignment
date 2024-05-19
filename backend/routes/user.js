const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const router = express.Router();

// For signup
const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(), 
    lastName: zod.string()
})
router.post("/signup", async (req, res) => {
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken. Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username
    })

    if(user){
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const dbUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


//For signin

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})


//for updating user information
// const updateBody = zod.object({
// 	password: zod.string().optional(),
//     firstName: zod.string().optional(),
//     lastName: zod.string().optional(),
// })

// router.put("/update", authMiddleware, async (req, res) => {
//     const { success } = updateBody.safeParse(req.body)
//     if (!success) {
//         res.status(411).json({
//             message: "Error while updating information"
//         })
//     }

//     await User.updateOne(req.body, {
//         id: req.userId
//     })

//     res.json({
//         message: "Updated successfully"
//     })
// })


// Update user progress and bookmarks
router.post('/status', async (req, res) => {
    const { userId, progress, bookmark, removeBookmark } = req.body;
    const user = await User.findById(userId);
    
    if (progress !== undefined) {
        user.progress = progress;
    }

    if (bookmark) {
        if (!user.bookmarks.includes(bookmark)) {
            user.bookmarks.push(bookmark);
        }
    }

    if (removeBookmark) {
        user.bookmarks = user.bookmarks.filter(b => b !== removeBookmark);
    }

    await user.save();
    res.json({ progress: user.progress, bookmarks: user.bookmarks });
});




module.exports = router;