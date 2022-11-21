const express = require("express");
const app = express();
const port = 3000;

// importamos conexión db
const sequelize = requiere ('../database/db.js')


// rutas 
app.get("/", (req, res) => {
  res.send("Hola mundo ");
});


// arrancamos el sv 
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }