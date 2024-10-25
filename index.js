const express = require('express');
const path = require('path');
let initial_path = process.cwd();
const hdfc = express();


hdfc.use(express.static(initial_path));

hdfc.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'netbanking', 'index.html'));
});

hdfc.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'index.html'));
});

hdfc.get('/entry', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dashboard', 'index.html'));
});

hdfc.get('/statement', (req, res) => {
    res.sendFile(path.join(__dirname, 'Statement', 'index.html'));
});

hdfc.listen("3002", () => {
    console.log('listening......');
})