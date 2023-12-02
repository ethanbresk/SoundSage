import axios from 'axios';
import { loginWithSpotifyClick, getData } from './spotify_integration';


// USER DATA:
let spotify_id = null;
export async function login() {
    // Function to login.
    // Redirects to Spotify login page.
    await loginWithSpotifyClick();
}
export async function getUserData() {
    // Function to get user data (profile info, posts, etc).
    // Multiple invocations pull new data from the database.
    // Returns null if login() has not yet been called, or the current session has expired.

    const spotify_data = await getData();
    if (!spotify_data || spotify_data.error) {
        return null;
    }
    spotify_id = spotify_data.id;
    // Login:
    try {
        const res = await axios.get('http://localhost:8080/login', { params: { data: spotify_data } });
        return res.data;
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            // My error:
            const errorMessage = error.response.data.error;
            throw errorMessage;
        } else {
            // Network error:
            const errorMessage = "Network error - please try again later.";
            throw errorMessage;
        }
    }
}
export function logout() {
    // Function to logout.
    localStorage.clear();
    spotify_id = null;
    window.location.reload();
}