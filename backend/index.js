const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
var cors = require('cors');
const routes = require('./routes');
const { urlencoded } = require('express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}))
app.use(routes)
const mongoString = 'mongodb://127.0.0.1:27017/brightFuture'
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})