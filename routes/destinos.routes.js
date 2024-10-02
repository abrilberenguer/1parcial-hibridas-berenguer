import express from "express"
import * as controllerDestino from "../controllers/destinos.controller.js"

const route = express.Router()
route.get("/inicio", controllerDestino.getInicio);

route.get("/destinos", controllerDestino.getDestino);
route.get("/destinos/nuevo", controllerDestino.nuevoDestino);
route.post("/destinos/nuevo", controllerDestino.agregarDestino);
route.get("/destinos/eliminar/:id", controllerDestino.eliminarDestino);
route.get("/destinos/modificar/:id", controllerDestino.modificarDestinoForm);
route.post("/destinos/modificar/:id", controllerDestino.modificarDestino);
route.get("/destinos/:id", controllerDestino.getDestinoId);

route.get("/playas", controllerDestino.getDestinoPlaya);
route.get("/ciudades", controllerDestino.getDestinoCiudad);
route.get("/aventuras", controllerDestino.getDestinoAventura);
route.get("/cultura", controllerDestino.getDestinoCultural);
route.get("/naturaleza", controllerDestino.getDestinoNaturaleza);

export default route