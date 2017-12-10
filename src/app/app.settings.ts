let hostname: String = window.location.hostname;
if(hostname === 'localhost') {
    hostname = hostname + ":" + window.location.port;
}

export class AppSettings {
    public static AUTH_CALLBACK_URI = 'http://' + hostname + "/api/auth"
    public static SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize/";
    public static SPOTIFY_CLIENT_ID = "f4efedb3a3bf4900ac91071952a604ac";
    public static SPOTIFY_SCOPES = 'playlist-read-private playlist-modify-private playlist-modify-public streaming user-library-read user-library-modify user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played'
}