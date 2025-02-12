import mongoose from "mongoose";

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keywords:{ 
        type: Array,
        required: true
    },
    author: {
        type: String
    }
})