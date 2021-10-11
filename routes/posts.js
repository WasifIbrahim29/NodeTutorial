const express= require('express');
const router= express.Router();
const Post = require('../models/Post');

router.get('/', (req,res)=> {
    res.send("We are on posts");
});

router.post('/addPost', (req,res)=> {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    console.log("post: ",post);

    post.save().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json({message: err});
    })

});

module.exports = router;

