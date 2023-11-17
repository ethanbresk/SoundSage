// Express setup
const express = require('express');
const app = express();
 
// Default request
app.get('/', (req, res) => { 
    res.send('SoundSage base page') 
    res.end() 
}) 
 
// Port assignment
const PORT = process.env.PORT || 5001;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));