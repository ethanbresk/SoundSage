// Require env variables
require("dotenv").config(); 

// Express setup
const express = require('express');
const app = express();

// Mongoose setup
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
 
// Default request
app.get('/', (req, res) => { 
    res.send('SoundSage base page') 
    res.end() 
}) 
 
// Port assignment
const PORT = process.env.PORT;
 
// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));