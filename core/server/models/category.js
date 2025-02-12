import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    isPublished: {
        type: Boolean,
        required: true,
    }
})