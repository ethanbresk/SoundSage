// Include env variables
require("dotenv").config(); 

// Express setup
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Setup:

const mongoose = require('mongoose');
const connectDB = async () => {
    mongoose.set('strictQuery', false);
    await mongoose
        .connect(process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
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


// Default request
app.get('/', (req, res) => { 
    res.json("Hello World!");
}) 

// get blogs
app.get('/blogs', (req, res) => {
    res.json({ blogs: [{ id: 1, title: "example blog", author: "aaron & ethan", song: "songTitle by author", likes: 0 }, { id: 2, title: "example blog", author: "aaron & ethan", song: "songTitle by author", likes: 0 }], isPending: false, error: null });
}) 

// get or send user data to/from database
app.get('/userdata', async (req, res) => {
    const username = req.query.data.display_name

    //if ()
    res.json(req.query.data)
}) 