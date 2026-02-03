const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Component = require('../models/Component');
const connectDB = require('../lib/db');
require('dotenv').config();

const seedData = async () => {
    try {
        await connectDB();
        
        const dataPath = path.join(__dirname, '../data/components.json');
        
        if (!fs.existsSync(dataPath)) {
            console.error('Data file not found!');
            process.exit(1);
        }

        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        await Component.findOneAndUpdate(
            { id: 'all_components' },
            { data: data, updatedAt: Date.now() },
            { upsert: true, new: true }
        );

        console.log('Data seeded successfully to MongoDB');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedData();