const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    song_url: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true,
    },
    content: {
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
