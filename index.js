const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
let initial_path = path.join(__dirname, "./");
const hdfc = express();


hdfc.use(express.static(initial_path));

hdfc.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "netbanking/index.html"))
})

hdfc.get('/hdfc/login', (req, res) => {
    res.sendFile(path.join(initial_path, "login/index.html"))
})

hdfc.get('/hdfc/entry', (req, res) => {
    res.sendFile(path.join(initial_path, "Dashboard/index.html"))
})    

hdfc.get('/statement/', (req, res) => {
    res.sendFile(path.join(initial_path, "Statement/index.html"))
})

hdfc.listen("3002", () => {
    console.log('listening......');
})

exports.hdfc = functions.https.onRequest(hdfc);