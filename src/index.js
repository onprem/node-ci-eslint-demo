const express = require('express');

const app = express()

app.get("/health", (req, res) => {
  res.json({ status: 'UP' })
})

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`)
})
