const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    spotify_id: {
        type: String,
        required: true,
        trim: true
    },
    spotify_url: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    picture_url: {
        type: String,
        default: null,
    },
    total_likes: {
        type: Number,
        default: 0
    },
    posts: [mongoose.Types.ObjectId],
    
})
const User = mongoose.model("User", UserSchema);
module.exports = User;
