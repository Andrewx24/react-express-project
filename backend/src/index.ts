import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: 'http://localhost:5173', // Your Vite dev server address
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Example API endpoint
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Backend connected successfully!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
