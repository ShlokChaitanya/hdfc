const express = require('express');
const path = require('path');
let initial_path = process.cwd();
const hdfc = express();

hdfc.use(express.static((path.join(__dirname, 'public'))));

hdfc.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, 'public', 'netbanking', 'index.html'));
});

hdfc.get('/login', (req, res) =>     {
    res.sendFile(path.join(initial_path, 'public', 'login', 'index.html'));
});

hdfc.get('/entry', (req, res) => {
    res.sendFile(path.join(initial_path, 'public', 'Dashboard', 'index.html'));
});

hdfc.get('/statement', (req, res) => {
    res.sendFile(path.join(initial_path, 'public', 'Statement', 'index.html'));
});

const PORT = process.env.PORT || 3002;
hdfc.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
