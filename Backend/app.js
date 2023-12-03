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

// get blogs
app.get('/getPosts', async (req, res) => {
    res.json({ blogs: [{ id: 1, title: "example blog", author: "aaron & ethan", song: "songTitle by author", likes: 0 }, { id: 2, title: "example blog 2", author: "aaron & ethan", song: "songTitle 2 by author", likes: 0 }], isPending: false, error: null });
}) 

// create a post
app.get('/createPost', async (req, res) => {
    const blog_post = req.query.data;
    try {
        post = new Post({
            post_title: blog_post.title,
            post_body: blog_post.body,
            user_id: blog_post.user,
            song_url: blog_post.song
        });
        await post.save();
        res.json(post);
    }
    catch (error) {
        res.status(400).json({ error: "problem creating post" });
        return;
    }
})
