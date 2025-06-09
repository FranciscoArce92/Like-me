const { Router } = require('express');
const { getAllPosts, createPost } = require('../controllers/posts.controllers');

const router = Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPost);

module.exports = router;

