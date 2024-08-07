const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataFile = 'data.json';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Load initial data
let data = { waterSpray: 0, fans: 0 };
if (fs.existsSync(dataFile)) {
    data = JSON.parse(fs.readFileSync(dataFile));
}

// Endpoint to update counts
app.post('/update', (req, res) => {
    const { type } = req.body;
    if (type === 'waterSpray') {
        data.waterSpray += 1;
    } else if (type === 'fans') {
        data.fans += 1;
    }
    fs.writeFileSync(dataFile, JSON.stringify(data));
    res.sendStatus(200);
});

// Endpoint to get counts
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
