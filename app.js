const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching joke' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
