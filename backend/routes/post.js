const express = require('express');
const router = express.Router();
const axios = require('axios');


let posts = [];
// /api/posts => GET
router.get('/', (req, res, next) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        posts = response.data;
        res.send(posts).status(200);
    }).catch(error => {
        res.send(error);
    });
});

// /api/posts => PUT
router.put('/', (req, res) => {
    const updatePost = req.body.post;
    if (updatePost) {
        posts = posts.map(post => {
            if (post.id === post.id) post = updatePost;
            return post;
        });
        res.json(updatePost).status(200);
    } else {
        res.json(`no post data found`).status(404);
    }
});

module.exports = router;
