const Posts = require('./BlogModel');
const { DateTime } = require('luxon');


//add post
//author is fetching from frontend from storeduser's username(uname)
exports.addPost = async (req, res) => {
    try {

        const { title, content, author } = req.body;

        const newPost = new Posts({
            title,
            content,
            author
        });

        await newPost.save();
        res.json({ success: true, message: 'Post added successfully' });
    }
    catch (error) {
        console.error('Error adding Post: ', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

//get all posts 
exports.getPosts = async (req, res) => {
    try {
        const allPosts = await Posts.find();
        res.json({ allPosts });
    } catch (error) {
        console.error('Error getting posts:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

//get user defined post 
exports.getUserPosts = async (req, res) => {

    const author = req.params.author;

    Posts.find({ author: author })
        .then(posts => {
            if (posts.length == 0) {
                return res.status(404).json({ message: `No posts found for ${author}` });
            }
            res.json(posts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            res.status(500).json({ message: 'Internal server error ' });
        });
};


//update posts
exports.updatePosts = async (req, res) => {

    try {

        const { _id, title, content } = req.body;

        const updatedAt = DateTime.now().setZone('Asia/Colombo').toISO();

        const updatedPost = await Posts.findOneAndUpdate({ _id }, {
            _id,
            title,
            content,
            updatedAt,
        }, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ success: false, message: 'Selected Post not found' });
        }

        res.json({ success: true, message: 'Post updated successfully', data: updatedClinic });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


//deleteposts
exports.deletePost = async (req, res) => {
    try {
        const { _id } = req.body;

        const deletedPost = await Posts.findOneAndDelete({ _id });

        if (!deletedPost) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }

        res.json({ success: true, message: 'Post deleted successfully', data: deletedPost });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}
