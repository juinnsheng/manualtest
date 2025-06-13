// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}`);
});
