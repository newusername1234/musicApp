const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/artists', (req, res) => {
    db.Artist.findAll()
            .then(r => res.json(r));
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});