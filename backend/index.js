// import libraries
const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('welcome to titans local business project');
});

// mock test data
const businesses = [
  { id: 1, name: 'Starbucks', location: 'downtown', description: 'coffee shop' },
  { id: 2, name: 'Chelsea Piers', location: 'midtown', description: 'gym' },
  { id: 2, name: 'Omakase', location: 'brooklyn', description: 'sushi' },
];

app.get('/api/businesses', (req, res) => {
  res.json(businesses);
});
//

// start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server listening on PORT: ${PORT}`);
});
