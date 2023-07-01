require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 3000;

let db;

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
    } else {
        console.log('Connected to MongoDB');
        db = client.db();
    }
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App is running at http://localhost:${port}`));
