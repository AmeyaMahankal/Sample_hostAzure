const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const mongoString = "mongodb+srv://ameyamahankal:4mq7FaDOD8LzQg18@cluster0.sjpz1jh.mongodb.net/"
const aModel = require('./ArtifactModel')

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req, res) => {
    res.send('Hello,I updated World!');
});

app.get('/getAllArtifacts', async (req, res) => {
    try {
        const allArtifacts = await aModel.find();
        res.json(allArtifacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});