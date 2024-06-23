const express = require('express');
const app = express();
const port = 3000;

// Questions data with options
const questions = {
    business: [
        {
            question: "What is the biggest challenge your business is facing today?",
            options: ["Market competition", "Customer acquisition", "Cash flow", "Regulatory compliance"]
        },
        {
            question: "How do you currently measure business success?",
            options: ["Revenue growth", "Customer satisfaction", "Market share", "Employee engagement"]
        }
    ],
    health: [
        {
            question: "How frequently do you engage in physical exercise?",
            options: ["Daily", "Weekly", "Monthly", "Rarely"]
        },
        {
            question: "What type of diet do you follow?",
            options: ["Vegetarian", "Vegan", "Non-Vegetarian", "Pescatarian"]
        }
    ],
    technology: [
        {
            question: "Which programming language do you primarily use?",
            options: ["JavaScript", "Python", "Java", "C#"]
        },
        {
            question: "How many years of experience do you have in the tech industry?",
            options: ["Less than 1 year", "1-3 years", "3-5 years", "More than 5 years"]
        }
    ]
};

// Business questions endpoint
app.get('/api/v2/business', (req, res) => {
    res.json(questions.business);
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
