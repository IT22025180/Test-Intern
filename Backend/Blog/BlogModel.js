const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: {
        type: String,
        default: () => new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })
    },
    updatedAt: String
},
    {
        collection: "Posts"
    });

const Posts = mongoose.model('Posts', Post);
module.exports = Posts;
