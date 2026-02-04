const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Data files
const VISITORS_FILE = path.join(__dirname, '../data/visitors.json');
const SUBS_FILE = path.join(__dirname, '../data/subs.json');

// Helper to write data
const saveData = (file, data) => {
    let current = [];
    if (fs.existsSync(file)) {
        try {
            current = JSON.parse(fs.readFileSync(file));
        } catch (e) {
            console.error("Error reading file:", e);
        }
    }
    current.push(data);
    fs.writeFileSync(file, JSON.stringify(current, null, 2));
};

// API: Decrypt Identity
app.post('/api/decrypt', (req, res) => {
    const { name, email, purpose } = req.body;

    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and Email required.' });
    }

    // Log visitor
    const visitor = {
        name,
        email,
        purpose: purpose || 'General Interest',
        timestamp: new Date().toISOString()
    };
    saveData(VISITORS_FILE, visitor);

    // Return the "Real" Identity
    res.json({
        success: true,
        identity: {
            name: "Ariful Karim Sahaf",
            alias: "SXRDFISH",
            education: "Undergraduate student at East West University",
            contact: {
                email: "arifulsahaf@gmail.com",
                phone: "+8801640542998"
            },
            role: "AI Architect & Creative Technologist"
        }
    });
});

// API: Subscribe
app.post('/api/subscribe', (req, res) => {
    const { email, topics } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email required.' });
    }

    const sub = {
        email,
        topics: topics || [],
        timestamp: new Date().toISOString()
    };
    saveData(SUBS_FILE, sub);

    res.json({ success: true, message: 'Subscribed successfully.' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

    // Create data dir if not exists
    if (!fs.existsSync(path.join(__dirname, '../data'))) {
        fs.mkdirSync(path.join(__dirname, '../data'));
    }
});
