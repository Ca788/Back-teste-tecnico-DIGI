const express = require("express");
const app = express();
const cors = require("cors");

/* Para permitir requisição no meu domínio*/
app.use(cors());

/* Para permitir conexão de dados via JSON*/
app.use(express.json());

/* Conexão com o banco de dados*/
const conn = require("./db/conn");

conn();

/* Routes */
const routes = require("./routes/routes");
app.use(routes);
app.use(express.json());

/* Conexão com o servidor local*/
app.listen(5000, () => {
  console.log("Server started on port 🔥 http://localhost:5000");
});
