import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Peruvian Food API 🧄🧅🥔🍋');
});

app.listen(1234, console.log(`Server running on Port 1234 🔥`));
