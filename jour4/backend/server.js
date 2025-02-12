const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuration de la connexion MySQL avec gestion de la reconnexion
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Fonction pour gérer la reconnexion
function handleDisconnect() {
  connection.connect((err) => {
    if(err) {
      console.error('Error connecting to database:', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log('Successfully connected to database');
    }
  });

  connection.on('error', (err) => {
    console.error('Database error:', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

// Initialiser la connexion
handleDisconnect();

// Middleware pour parser le JSON
app.use(express.json());

// Route de test du backend
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend fonctionne correctement!',
    timestamp: new Date().toISOString()
  });
});

// Route de test de la base de données
app.get('/api/db-test', (req, res) => {
  connection.query('SELECT * FROM test_table', (err, results) => {
    if (err) {
      return res.status(500).json({ 
        status: 'error',
        message: 'Erreur de base de données',
        error: err.message 
      });
    }
    res.json({ 
      status: 'success',
      message: 'Connexion à la base de données réussie',
      data: results
    });
  });
});

// Route pour le statut
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