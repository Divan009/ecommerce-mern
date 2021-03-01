// import mongoose
const mongoose = require('mongoose');
const express = require('express');
// import routes
const userRoutes = require('./routes/user');

const app = express()

//db connection
mongoose.connect(
    process.env.DATABASE,
    {useNewUrlParser: true}
).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Route middleware
app.use('/api',userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})