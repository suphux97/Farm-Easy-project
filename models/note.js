
const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
email: { type: String, required: true },
ProductName: { type: String, required: true },
Description: { type: String, required: true },
}, {timestamps: true});

module.exports = mongoose.model('note', noteSchema);