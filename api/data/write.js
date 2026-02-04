const StyleConfig = require('../../models/StyleConfig');

module.exports = async (req, res) => {
    try {
        const data = req.body;
        
        // Remove immutable fields if present
        delete data._id;
        delete data.__v;
        delete data.updatedAt;

        // Force update timestamp
        data.updatedAt = Date.now();
        
        // Update the singleton document, or create if it doesn't exist
        const config = await StyleConfig.findOneAndUpdate(
            {}, 
            { $set: data }, // Use $set to be explicit, though Mongoose handles object updates smartly
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            }
        );
        
        res.json(config);
    } catch (error) {
        console.error('Error writing style config:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
