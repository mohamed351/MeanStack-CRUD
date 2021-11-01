const express = require("express");
const Posts = require("../models/Posts");
require("../models/Posts");


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let postes = await Posts.find();
        res.json(postes);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post("/", (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    post.save().then(a => {
        res.status(200).json(a)
    }).catch(a => {
        res.status(500).json({ message: error });
    });


});

router.get("/:postid", async (req, res) => {
    try {
        var post = await Posts.findById(req.params.postid);
        res.json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.delete("/:postid", async (req, res) => {
    try {
        var post = await Posts.findByIdAndRemove(req.params.postid);
        res.json(post);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
router.put("/:postid", async (req, res) => {
    try {
        console.log(req.params.postid);
        var post = await Posts.findByIdAndUpdate(req.params.postid, { $set: { title: req.body.title, description: req.body.description } })


        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;