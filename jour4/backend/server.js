const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuration de la connexion MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Middleware pour parser le JSON
app.use(express.json());

// Route de bienvenue
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API!' });
});

// Route pour le statut et l'heure
app.get('/api/status', (req, res) => {
  connection.query('SELECT NOW() as current_time', (err, results) => {
    if (err) {
      return res.status(500).json({ 
        status: 'error',
        error: err.message 
      });
    }
    res.json({ 
      status: 'success',
      database: 'connected',
      current_time: results[0].current_time
    });
  });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
}); 