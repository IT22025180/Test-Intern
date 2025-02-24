const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//rest
const app = express();

const uri = 'mongodb+srv://vanuja2003:2003vanuja@cluster0.c8ywhvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to mongodb');
    } catch (error) {
        console.log('Mongodb error: ', error);
    }
};

connect();

app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to Backend'
    });
});

app.use(express.json());

//port
const PORT = process.env.PORT || 8000;

//run
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});

