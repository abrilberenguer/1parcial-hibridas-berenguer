import express from "express";
import * as controllerCliente from "../controllers/clientes.controller.js";

const route = express.Router();

route.get("/clientes", controllerCliente.getClientes);
route.get("/clientes/nuevo", controllerCliente.nuevoCliente);
route.post("/clientes/nuevo", controllerCliente.agregarCliente);
route.get("/clientes/eliminar/:id", controllerCliente.eliminarCliente);
route.get("/clientes/modificar/:id", controllerCliente.modificarClienteForm);
route.post("/clientes/modificar/:id", controllerCliente.modificarCliente);
route.get("/clientes/:id", controllerCliente.getClienteId);

export default route;
