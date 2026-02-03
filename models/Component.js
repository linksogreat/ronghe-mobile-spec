const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    data: { type: Object, required: true }, // Stores the entire JSON object for now to match current structure
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Component', ComponentSchema);