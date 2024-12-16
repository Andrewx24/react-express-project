import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

// Initialize Express application
const app = express();

// Configure CORS middleware for handling cross-origin requests
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests only from this origin (likely your frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization']  // Allowed request headers
}));

// Parse JSON bodies in incoming requests
app.use(express.json());

// POST route handler for the root path
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
});  // <- This closing parenthesis was missing

// GET route handler for testing API connectivity
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Backend connected successfully!' }); 
});

// Server configuration and startup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});