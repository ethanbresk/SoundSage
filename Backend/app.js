// Include env variables
require("dotenv").config(); 

// Express setup
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Mongoose Setup:
const mongoose = require('mongoose');
const connectDB = async () => {
    mongoose.set('strictQuery', false);
    await mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Connected to DB"))
        .catch(console.error);
}
connectDB().then(() => {
    // Database connection established, continue setting up the app
    // ... Define your routers and endpoints here
    app.listen(8080, () => {
        console.log('Server listening on port 8080');
    });
});

mongoose.set('debug', true);


// mongo collections
const User = require('./models/user.js');
const Post = require('./models/post.js');

// Default request
app.get('/', (req, res) => { 
    res.json("Hello World!");
}) 

// get user data via spotify data object:
app.get('/login', async (req, res) => {
    const spotify = req.query.data;
    // Grab ID:
    const id = spotify.id;
    if (!id) {
        res.status(400).json({ error: "invalid spotify id" });
        return;
    }
    // Find or create User:
    try {
        let user = await User.findOne({ spotify_id: id });
        if (!user) {
            user = new User({
                spotify_id: id,
                spotify_url: spotify.external_urls.spotify,
                username: spotify.display_name,
                picture_url: spotify.images ? spotify.images[0].url : null
            });
            await user.save();
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error: "problem accessing user info" });
        return;
    }
}) 

// get posts of a given user (or all posts if id is null)
app.get('/getPosts', async (req, res) => {
    id = req.query.data
    //console.log(id)
    try {
        if (id == null) {
            const posts = await Post.find({});
            res.json({ blogs: posts, isPending: false, error: null })
        }
        else {
            const posts = await Post.find({ user_id: id });
            res.json({ blogs: posts, isPending: false, error: null })
        }
    }
    catch (error) {
        res.status(400).json({ error: "problem getting posts" });
        return;
    }
}) 

// get post from id
app.get('/getPost', async (req, res) => {
    id = req.query.data;
    try {
        const post = await Post.findById(id)
        res.json(post)
    }
    catch (error) {
        res.status(400).json({ error: "problem getting post" });
        return;
    }
}) 

// create a post
app.get('/createPost', async (req, res) => {
    const blog_post = req.query.data;
    try {
        post = new Post({
            post_title: blog_post.title,
            post_body: blog_post.body,
            user_id: blog_post.user,
            user_name: blog_post.name,
            user_picture: blog_post.picture,
            song_url: blog_post.song,
            parent: blog_post.parent ? blog_post.parent : null
        });
        await post.save();
        // add post to user
        const user = await User.findOne({ spotify_id: blog_post.user });
        user.posts.push(post._id)
        await user.save();
        // add post to parent's children
        const parent_post = await Post.findById(blog_post.parent)
        parent_post.children.push(post._id)
        await parent_post.save();
        // if this is a comment, add to the user's comment notification list
        if (blog_post.parent) {
            user.comment_notification_ids.push(blog_post.parent)
            await user.save();
        }
        res.json(post);
    }
    catch (error) {
        res.status(400).json({ error: "problem creating post" });
        return;
    }
})

// add like by post id
app.get('/addLike', async (req, res) => {
    id = req.query.data;
    user_id = req.query.user;
    try {
        const post = await Post.findById(id)
        post.num_of_likes += 1
        // add user to list of liked users for the post
        post.liked_users.push(user_id)
        await post.save();
        // add psot as a like notification for user
        const user = await User.findOne({ spotify_id: user_id })
        user.like_notification_ids.push(post._id)
        await user.save();
        res.json(post)
    }
    catch (error) {
        res.status(400).json({ error: "problem getting post" });
        return;
    }
}) 

// get user data for other profiles
app.get('/getUser', async (req, res) => {
    id = req.query.data;
    try {
        const user = await User.findOne({ spotify_id: id })
        //console.log(user)
        res.json(user)
    }
    catch (error) {
        res.status(400).json({ error: "problem getting post" });
        return;
    }
}) 

// delete notification
app.get('/deleteNotification', async (req, res) => {
    id = req.query.data;
    try {
        const user = await User.findOne({ spotify_id: id })
        //console.log(user)
        const index = user.like_notification_ids.indexOf(id)
        user.like_notification_ids.splice(index, 1)
        await user.save()
        res.json(user)
    }
    catch (error) {
        res.status(400).json({ error: "problem getting post" });
        return;
    }
}) 