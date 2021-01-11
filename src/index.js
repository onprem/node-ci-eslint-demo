const express = require('express');

const app = express();

app.get('/health', (_req, res) => {
  res.json({ status: 'UP' });
});

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on http://localhost:5000');
});
