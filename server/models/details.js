const mongoose = require('mongoose');
const detailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Details', detailsSchema);