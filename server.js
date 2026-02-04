const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./lib/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Connect to MongoDB
connectDB();

// API Routes
app.get('/api/components', require('./api/components/read'));
app.post('/api/components', require('./api/components/write'));
app.get('/api/data', require('./api/data/read'));
app.post('/api/data', require('./api/data/write'));

// Serve static files (moved after API routes to prevent conflicts with folders)
app.use(express.static(path.join(__dirname)));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}