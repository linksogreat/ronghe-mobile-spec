const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Component = require('../models/Component');
const StyleConfig = require('../models/StyleConfig');
const connectDB = require('../lib/db');
require('dotenv').config();

const seedData = async () => {
    try {
        await connectDB();
        
        // Seed Components
        const componentsPath = path.join(__dirname, '../data/components.json');
        if (fs.existsSync(componentsPath)) {
            const componentsData = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
            await Component.findOneAndUpdate(
                { id: 'all_components' },
                { data: componentsData, updatedAt: Date.now() },
                { upsert: true, new: true }
            );
            console.log('Components seeded successfully');
        } else {
            console.warn('components.json not found, skipping components seed');
        }

        // Seed Style Config
        const stylePath = path.join(__dirname, '../data/data.json');
        if (fs.existsSync(stylePath)) {
            const styleData = JSON.parse(fs.readFileSync(stylePath, 'utf8'));
            await StyleConfig.findOneAndUpdate(
                {}, // Match any document (effectively singleton)
                styleData,
                { upsert: true, new: true }
            );
            console.log('Style config seeded successfully');
        } else {
            console.warn('data.json not found, skipping style seed');
        }

        console.log('All seeding completed');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedData();