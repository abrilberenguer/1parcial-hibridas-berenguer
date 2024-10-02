import { Router } from "express"; 
import * as controller from "../controllers/destinos.controller.js"

const route = Router()

route.get("/destinos", controller.getDestinos);
route.get("/destinos/:id", controller.getDestinoId);
route.post("/destinos", controller.agregarDestino);
route.put("/destinos/:id", controller.reemplazarDestino);
route.patch("/destinos/:id", controller.actualizarDestino);
route.delete("/destinos/:id", controller.borrarDestino);

export default route