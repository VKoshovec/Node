const express = require('express');
const cors = require('cors');

const app = express();
const api = require('./routs/api')

app.use(cors());

app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.use('/api', api);

app.use((_, res, __) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;