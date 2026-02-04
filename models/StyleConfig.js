const mongoose = require('mongoose');

const StyleConfigSchema = new mongoose.Schema({
    colors: { type: Array, default: [] },
    typography: { type: Array, default: [] },
    shadows: { type: Array, default: [] },
    corners: { type: Array, default: [] },
    spacings: { type: Array, default: [] },
    buttons: { type: Object, default: {} },
    commonIcons: { type: Array, default: [] },
    customIcons: { type: Array, default: [] },
    ipMascots: { type: Array, default: [] },
    updatedAt: { type: Date, default: Date.now }
}, { strict: false });

module.exports = mongoose.model('StyleConfig', StyleConfigSchema);
