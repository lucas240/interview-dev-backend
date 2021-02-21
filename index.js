const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');

app.get('/api/members', (req, res) => {
    connection.query('SELECT * from member', (err, results) => {
    if (err) {
        res.status(500).send('Error retrieving data');
    } else {
        res.json(results);
    }});
});  

app.post('/api/members', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO member SET ?', formData, (err, results) => {
    if (err) {
        console.log(err);
        res.status(500).send("Error saving an member");
    } else {
        res.sendStatus(200);
    }
    });
});

// app.delete('/api/movie/:id', (req, res) => {
//     const idMovie = req.params.id;
//     connection.query('DELETE FROM movie WHERE id = ?', [idMovie], err => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error deleting a movie");
//         } else {
//             res.sendStatus(200);
//         }
//     });
    
// });

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});