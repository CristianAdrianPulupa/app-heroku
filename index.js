const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola desde Heroku con base de datos!');
});

// Ruta para probar conexión a la base de datos
app.get('/db', (req, res) => {
  db.query('SELECT NOW() AS fecha_actual', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).send('Error en la base de datos');
    }

    res.send(`✅ Conectado. Fecha desde la DB: ${results[0].fecha_actual}`);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
