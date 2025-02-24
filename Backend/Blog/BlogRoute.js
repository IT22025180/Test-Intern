const express = require('express');
const routerP = express.Router();
const PostController = require('./BlogController');

routerP.post('/addPost', PostController.addPost);
routerP.get('/posts', PostController.getPosts);
routerP.post('/updatePost', PostController.updatePosts);
routerP.post('/deletePost', PostController.deletePost);
routerP.get('/userpost/:author', PostController.getUserPosts);

module.exports = routerP;