const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Hello Sai Shiva Teja Sir! Welcome to Jahnavi\'s BDF Lab 1 Server.');
});

// Student details route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Jahnavi',
        rollNumber: '252U1R5056',
        course: 'Backend Development Fundamentals',
        lab: 'Lab 1'
    });
});

// Current date and time route
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toISOString()
    });
});

// Handle all unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: '404 - Page Not Found',
        message: 'The requested route does not exist.'
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server running on port ${PORT}`);
});
