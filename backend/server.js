const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Define the POST route to search
app.post('/api/search', (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  // Mock search results
  const mockResults = [
    { title: 'Angular Basics', description: 'Learn the fundamentals of Angular.' },
    { title: 'Advanced Angular', description: 'Deep dive into Angular features.' },
    { title: 'Express and Node', description: 'Learn backend development with Express.' }
  ];

  // Filter results based on the query
  const filteredResults = mockResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredResults);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
