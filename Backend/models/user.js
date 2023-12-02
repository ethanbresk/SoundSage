const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UInfoSchema = new Schema ({
    username: {
        type: String,
        required: true,
        trim: true
    },
    blogs: [mongoose.Types.ObjectId],
    
})
const User = mongoose.model("User", UserSchema);
module.exports = User;
