// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
const express = require('express');
require('dotenv').config();

const app = express()

dotenv.config()

//db connection
mongoose.connect(
    process.env.DATABASE,
    {useNewUrlParser: true}
).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Route
app.get("/", (req, res) => {
    res.send("hello from node nodemon");
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})