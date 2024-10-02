import { Router } from "express";
import * as controllerCliente from "../controllers/clientes.controller.js";

const route = Router();

route.get("/clientes", controllerCliente.getClientes);
route.get("/clientes/:id", controllerCliente.getClienteId);
route.post("/clientes", controllerCliente.agregarCliente);
route.put("/clientes/:id", controllerCliente.reemplazarCliente);
route.patch("/clientes/:id", controllerCliente.actualizarCliente);
route.delete("/clientes/:id", controllerCliente.borrarCliente);
route.get("/clientes/:id/destinos", controllerCliente.getDestinosCliente);

export default route;