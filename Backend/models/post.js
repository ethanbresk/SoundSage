const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    user_picture: {
        type: String,
        required: true,
    },
    song_url: {
        type: String,
        required: true,
    },
    num_of_likes: {
        type: Number,
        default: 0
    },
    post_title: {
        type: String,
        required: true,
    },
    post_body: {
        type: String,
        required: true,
    },
    parent: {
        type: mongoose.Types.ObjectId,
        default: null
    },
    children: [mongoose.Types.ObjectId],
})
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
