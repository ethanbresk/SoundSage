import axios from 'axios';
import { loginWithSpotifyClick, getData } from './spotify_integration';


// USER DATA:
let spotify_data = JSON.parse(localStorage.getItem('spotify_data')) || null;
let spotify_id = spotify_data ? spotify_data.id : null;
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
    // Returns null if login() has never been called, or the localstorage has been cleared.

    if (!spotify_data) {
        spotify_data = await getData();
        if (!spotify_data || spotify_data.error) {
            return null;
        }
        spotify_id = spotify_data.id;
        localStorage.setItem('spotify_data', JSON.stringify(spotify_data));
    }
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
    const user_data = await getUserData()
    const data = {
        user: spotify_id,
        name: user_data.username,
        picture: user_data.picture_url,
        song_url: post_data.selectedAlbum ? post_data.selectedAlbum.external_urls.spotify : "https://open.spotify.com/album/5CnpZV3q5BcESefcB3WJmz",
        song_pic: post_data.selectedAlbum ? post_data.selectedAlbum.images[0].url : "https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd",
        song_name: post_data.selectedAlbum ? post_data.selectedAlbum.name : "Donda",
        title: post_data.title,
        body: post_data.body,
        parent: post_data.parent ? post_data.parent : null
    }
    console.log(post_data);
    console.log(data);
    try {
        const res = await axios.get('http://localhost:8080/createPost', { params: { data: data } });
        console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}
// get posts
export async function getPosts(id) {
    try {
        const res = await axios.get('http://localhost:8080/getPosts', { params: { data: id } });
        console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}
// get single post by id
export async function getPost(id) {
    try {
        console.log(id)
        const res = await axios.get('http://localhost:8080/getPost', { params: { data: id } });
        //console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}
// add Like to a post by id
export async function addLike(id) {
    try {
        console.log(id)
        const res = await axios.get('http://localhost:8080/addLike', { params: { data: id, user: spotify_id } });
        //console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}
// get user data
export async function getUser(id) {
    try {
        //console.log(id)
        const res = await axios.get('http://localhost:8080/getUser', { params: { data: id } });
        //console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}
// get comment notifications
export async function getCommentNotifications(id) {
    try {
        //console.log(id)
        const res = await axios.get('http://localhost:8080/getUser', { params: { data: id } });
        //console.log(res.data)
        const output = []
        for (var i = 0; i < res.data.comment_notification_ids.length; i++) {
            output.push(await getPost(res.data.comment_notification_ids[i]))
        }
        return output
    }
    catch (error) {
        console.log(error)
    }
}
// get like notifications
export async function getLikeNotifications(id) {
    try {
        //console.log(id)
        const res = await axios.get('http://localhost:8080/getUser', { params: { data: id } });
        //console.log(res.data)
        const output = []
        for (var i = 0; i < res.data.like_notification_ids.length; i++) {
            output.push(await getPost(res.data.like_notification_ids[i]))
        }
        console.log("like output" + JSON.stringify(output))
        return output
    }
    catch (error) {
        console.log(error)
    }
}

// remove a like notification
export async function deleteLikeNotification(id) {
    try {
        //console.log(id)
        const res = await axios.get('http://localhost:8080/deleteLikeNotification', { params: { data: id, user: spotify_id } });
        //console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}

// remove a comment notification
export async function deleteCommentNotification(id) {
    try {
        //console.log(id)
        const res = await axios.get('http://localhost:8080/deleteCommentNotification', { params: { data: id, user: spotify_id } });
        //console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}