const express = require('express');
const app = express();

// Use the port provided by Render, or default to 3000 for local development
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/public/projects.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
