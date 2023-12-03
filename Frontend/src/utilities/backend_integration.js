import axios from 'axios';
import { loginWithSpotifyClick, getData } from './spotify_integration';


// USER DATA:
let spotify_id = null;
// login user
export async function login() {
    // Function to login.
    // Redirects to Spotify login page.
    await loginWithSpotifyClick();
}
// get user data
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
// logout user and clear cache
export function logout() {
    // Function to logout.
    localStorage.clear();
    spotify_id = null;
    window.location.reload();
}
// create a post
export async function createPost(post_data) {
    post_data.user = spotify_id
    // var string_data = JSON.stringify(post_data)
    console.log(post_data)
    try {
        const res = await axios.get('http://localhost:8080/createPost', { params: { data: post_data } });
        console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}