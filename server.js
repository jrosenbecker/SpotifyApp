const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const api = require('./server/api');

app.set('port', (process.env.PORT || 3000));
var env = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// start  the server on the proper port
app.listen(app.get('port'), (err) => {
    if(err) {
        return console.log('An error occurred', err);
    }

    console.log(`Server is listening on ${app.get('port')}`)
});