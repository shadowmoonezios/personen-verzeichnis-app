const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB URI
const mongoURI = 'mongodb://localhost:27017/personenverzeichnis';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB verbunden!'))
.catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
