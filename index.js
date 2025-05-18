require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Conexión a base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect(err => {
  if (err) {
    console.error('❌ Error de conexión:', err.message);
    return;
  }
  console.log('✅ Conectado a la base de datos');
});

app.get('/', (req, res) => res.send('API Clientes en Heroku'));

app.get('/clientes', (req, res) => {
  db.query('SELECT * FROM clientes', (err, rows) => {
    if (err) return res.status(500).send('Error al obtener clientes');
    res.json(rows);
  });
});

app.post('/clientes', (req, res) => {
  const { nombre, email } = req.body;
  db.query('INSERT INTO clientes (nombre, email) VALUES (?, ?)', [nombre, email], (err, result) => {
    if (err) return res.status(500).send('Error al insertar cliente');
    res.json({ id: result.insertId, nombre, email });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
