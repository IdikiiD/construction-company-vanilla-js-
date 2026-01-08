const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/login', (req, res) => {
    console.log('REQ BODY:', req.body);
    res.json({
        success: true,
        data: req.body
    });
});

app.listen(3000, () => console.log('Server started'));