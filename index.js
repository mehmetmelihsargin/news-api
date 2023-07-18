const NewsAPI = require('newsapi');
const express = require('express');
const app = express();
const newsapi = new NewsAPI('b36e8013267648a091a2ec30c6bf77d5');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    newsapi.v2.topHeadlines({
        category: 'business',
        language: 'tr',
        country: 'tr'
    }).then(response => {
        res.send(response);
    }).catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});