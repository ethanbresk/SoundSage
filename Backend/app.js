// Include env variables
require("dotenv").config(); 

// Express setup
const express = require('express');
const app = express();

// Setup:
const mongoose = require('mongoose');
const connectDB = async () => {
    mongoose.set('strictQuery', false);
    await mongoose
        .connect([process.env.MONGODB_URI],
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
    res.send('SoundSage base page') 
    res.end() 
}) 
 
// Port assignment
const PORT = process.env.PORT;
 
// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));