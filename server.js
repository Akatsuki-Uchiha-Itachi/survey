const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Questions data with options
const questions = {
    education: [
        {
            question: "Will you pursue higher education?",
            options: ["Yes", "No"]
        },
        {
            question: "Do your grades reflect your potential?",
            options: ["Yes", "No"]
        }
    ],
    health: [
        {
            question: "How many hours sleep do you take in a day?",
            options: ["3", "6", "8", "8+"]
        },
        {
            question: "Do you give yourself selftime?",
            options: ["Yes", "No"]
        }
    ],
    technology: [
        {
            question: "How many projects have you created?",
            options: ["1", "more than 1", "more than 5"]
        },
        {
            question: "Are you in AI/ML?",
            options: ["Yes", "No"]
        }
    ]
};

// Use the CORS middleware
app.use(cors());

// Education questions endpoint
app.get('/api/v2/education', (req, res) => {
    res.json(questions.education);
});

// Health questions endpoint
app.get('/api/v2/health', (req, res) => {
    res.json(questions.health);
});

// Technology questions endpoint
app.get('/api/v2/technology', (req, res) => {
    res.json(questions.technology);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
