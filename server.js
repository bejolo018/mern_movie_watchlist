const express = require ('express');
const mongoose = require ('mongoose');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MONGODB
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port,() => console.log('Server running...'));