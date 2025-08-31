const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS and parse JSON data
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/personenverzeichnis';

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB verbunden!'))
.catch(err => console.log(err));

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});