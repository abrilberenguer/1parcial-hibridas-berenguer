import express from "express";
import destinosRoute from "./routes/destinos.routes.js";
import clientesRoute from "./routes/clientes.routes.js";
import apiDestinosRoute from "./api/routes/destinos.routes.js";
import apiClientesRoute from "./api/routes/clientes.routes.js"; 

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas api
app.use("/api", apiDestinosRoute); 
app.use("/api", apiClientesRoute); 
// Rutas generales
app.use(destinosRoute);
app.use(clientesRoute);

app.listen(3333, () => console.log("Servidor funcionando"));