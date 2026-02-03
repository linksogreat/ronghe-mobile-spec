const Component = require('../../models/Component');
const connectDB = require('../../lib/db');

module.exports = async (req, res) => {
    try {
        await connectDB();
        
        // Update the single document or create if it doesn't exist
        // Using findOneAndUpdate with upsert: true
        await Component.findOneAndUpdate(
            { id: 'all_components' },
            { data: req.body, updatedAt: Date.now() },
            { upsert: true, new: true }
        );

        res.status(200).json({ success: true, message: 'Saved successfully to MongoDB' });
    } catch (error) {
        console.error('Write API Error:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
};