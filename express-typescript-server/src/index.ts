import express, { Request, Response } from 'express'; // Import Request & Response from express
import cors from 'cors';
import bodyParser from 'body-parser';

type SearchResult = {
  id: number;
  title: string;
  description: string;
};

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy data
const results: SearchResult[] = [
  { id: 1, title: 'Angular', description: 'A popular frontend framework by Google.' },
  { id: 2, title: 'Express', description: 'A minimal backend framework for Node.js.' },
  { id: 3, title: 'TypeScript', description: 'A typed superset of JavaScript.' }
];

// Search endpoint
app.post('/api/search', (req: Request, res: Response):void => {
  const query: string = req.body.query?.toLowerCase();
  if (!query) {
    res.status(400).json({ message: 'Query is required' });
  }

  const filteredResults = results.filter(item =>
    item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
  );

  res.json(filteredResults); // This line was previously empty, now correctly returning results
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
