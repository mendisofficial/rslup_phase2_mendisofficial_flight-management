const express = require('express');
const app = express();
const port = 3000;

// Sample flight data (for demonstration purposes)
const flights = [
  { id: 1, flightNumber: 'AA123', origin: 'JFK', destination: 'LAX' },
  { id: 2, flightNumber: 'UA456', origin: 'ORD', destination: 'SFO' },
];

// Endpoint to get a list of all flights
app.get('/flights', (req, res) => {
  res.json(flights);
});

// Endpoint to get flight details by ID
app.get('/flights/:id', (req, res) => {
  const flightId = parseInt(req.params.id);
  const flight = flights.find((flight) => flight.id === flightId);

  if (flight) {
    res.json(flight);
  } else {
    res.status(404).json({ error: 'Flight not found' });
  }
});

app.listen(port, () => {
  console.log(`Flight management app listening at http://localhost:${port}`);
});
