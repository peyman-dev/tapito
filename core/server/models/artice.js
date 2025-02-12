import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
})

export default mongoose.models.Article || mongoose.model("Article", Schema);