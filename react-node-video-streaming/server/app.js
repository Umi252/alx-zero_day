const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const videos = [
    
    {
        id: 0,
        poster: 'video/0/poster',
        duration: '3 mins',
        name: 'sample 1',
    },

{
        id: 1,
        poster: 'video/1/poster',
        duration: '4 mins',
        name: 'sample 2',
    },
{
        id: 2,
        poster: 'video/2/poster',
        duration: '5 mins',
        name: 'sample 3',
    },
{
        id: 3,
        poster: 'video/3/poster',
        duration: '6 mins',
        name: 'sample 4',
    },

    ];
const app = express();

app.get('/video', (req, res) => {
    res.sendFile('assets/sample.mp4', { root: __dirname });
});

app.cors = (cors());
app.get('/videos', (req, res) => {
    res.json(videos);
});
app.get('/video/:id/data', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json(videos[id]);
})
app.listen(4000, () => {
    console.log('Listening on port 4000!')
});