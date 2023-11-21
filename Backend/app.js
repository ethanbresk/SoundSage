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

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


// Default request
app.get('/', (req, res) => { 
    res.json("Hello World!");
}) 

app.get('/blogs', (req, res) => {
    res.json({ data: "hello", isPending: false, error: null });
}) 
 
// Port assignment
const PORT = process.env.PORT;
 
// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));