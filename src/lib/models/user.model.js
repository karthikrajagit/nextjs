import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    followers: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        default: []
    },
    following: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        default: []
    }
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;