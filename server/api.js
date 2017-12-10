// RESTful API Requests go in here, routed to {domain}/api

const express = require('express');
const request = require('request');
const appSettings = require('../app.config');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/auth', (req, response) => {
    var code = req.query.code;
    var reqBody = {
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: appSettings.SPOTIFY_REDIRECT_URI,
        client_id: appSettings.SPOTIFY_CLIENT_ID,
        client_secret: appSettings.SPOTIFY_CLIENT_SECRET
    };

    var url = appSettings.SPOTIFY_ACCESS_TOKEN_URI;
    // TODO: Spotify doesn't accept application/json, need to use form-encoded
    var options = {
        method: 'post',
        form: reqBody,
        url: url
    }

    request(options, (err, res, body) => {
        body = JSON.parse(body);
        if(err) {
            console.error('error posting json: ', err);
            throw err;
        }

        var headers = res.headers
        var statusCode = res.statusCode
        response.cookie('spotify-auth-token', body.access_token);
        response.redirect('/');
    });

    
    
});

module.exports = router;