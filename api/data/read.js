const StyleConfig = require('../../models/StyleConfig');

module.exports = async (req, res) => {
    try {
        // Find the first document (singleton)
        let config = await StyleConfig.findOne();
        
        if (!config) {
            // If not found in DB, try to return empty or handle initialization
            // For now, return 404 or empty object, but ideally this should be seeded
            return res.status(404).json({ error: 'Configuration not found' });
        }
        
        res.json(config);
    } catch (error) {
        console.error('Error reading style config:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
