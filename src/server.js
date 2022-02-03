import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Peruvian Food API 🧄🧅🥔🍋');
});

app.listen(PORT, console.log(`Server running on Port 1234 🔥`));
