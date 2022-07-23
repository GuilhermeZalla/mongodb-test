const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details'
    }
});

module.exports = mongoose.model('User', userSchema);