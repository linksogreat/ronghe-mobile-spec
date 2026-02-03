const Component = require('../../models/Component');
const connectDB = require('../../lib/db');

module.exports = async (req, res) => {
    try {
        await connectDB();
        
        // Try to find the single document that stores all components
        // Assuming we store everything in one document with a specific ID for now, 
        // similar to how components.json was a single file.
        const componentsDoc = await Component.findOne({ id: 'all_components' });

        if (!componentsDoc) {
            // If not found (first run), return empty object or default structure
            // In a real app, you might want to seed this first.
            return res.status(200).json({});
        }

        res.status(200).json(componentsDoc.data);
    } catch (error) {
        console.error('Read API Error:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};