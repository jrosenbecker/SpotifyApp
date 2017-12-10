import { Component } from '@angular/core';
import { AppSettings } from './app.settings';

import queryString from 'query-string';

@Component({
    selector: 'spotify-login-button',
    templateUrl: 'spotifylogin.component.html',
    styleUrls: ['spotifylogin.component.css']
})
export class SpotifyLoginComponent {

    login() {
        let query: String = queryString.stringify({
            client_id: AppSettings.SPOTIFY_CLIENT_ID,
            response_type: 'code',
            redirect_uri: AppSettings.AUTH_CALLBACK_URI,
            scope: AppSettings.SPOTIFY_SCOPES
        })
        let url: String = AppSettings.SPOTIFY_AUTH_ENDPOINT + '?' + query;
        window.location.href = url.toString();
    }
}