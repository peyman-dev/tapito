import mongoose from "mongoose";

const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN", "WRITER"],
        default: "USER",
    },
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: false,
        unique: true,
        index: true
    },
}, {
    timestamps: true
})

const UserModel = mongoose.models.User || mongoose.model("User", Schema);

export default UserModel;