const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store tasks
let tasks = [];

// API route to handle GET requests for assessment tasks
app.get('/assessment', (req, res) => {
    res.json(tasks);
});

// API route to handle POST requests to create a new assessment task
app.post('/assessment', (req, res) => {
    const { Name, taskType, status } = req.body;

    if (!Name || !taskType || !status) {
        return res.status(400).json({ message: 'Name, taskType, and status are required.' });
    }

    const newTask = { id: tasks.length + 1, Name, taskType, status };
    tasks.push(newTask);
    res.status(201).json({ message: 'Task created', task: newTask });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
