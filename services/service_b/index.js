const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is a simple Node.js project Service B API!');
});

//Normally I just put port 3000 for every project.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Simple Node.js project Service B API running on http://localhost:${PORT}`);
});