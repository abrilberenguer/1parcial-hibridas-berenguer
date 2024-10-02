import { json } from "express";
import * as service from "../../services/destinos.service.js";

// Get destinos
function getDestinos(req, res) {
    const filtros = req.query
    service.getDestinos(filtros)
        .then((destinos) => res.status(200).json(destinos))
}
// Get destino id
function getDestinoId(req, res) {
    const id = req.params.id
    service.getDestinoId(id)
        .then(destino => res.status(200).json(destino))
}
// Agregar destino 
function agregarDestino(req, res) {
    service.agregarDestino(req.body)
        .then((destino) => res.status(201).json(destino))
}
// Reemplazar destino 
function reemplazarDestino(req, res) {
    const id = req.params.id
    service.modificarDestino(id, req.body)
        .then((destino) => res.status(201).json(destino))
}
// Actualizar destino 
function actualizarDestino(req, res) {
    const id = req.params.id
    service.actualizarDestino(id, req.body)
        .then(destino => {
            if( destino ) {
                res.status(201).json(destino);
            } else{
                res.status(404).json({error: { message: "No se encuentra el destino" }})
            }
        })
}
// Borrar destino 
function borrarDestino (req, res) {
    const id = req.params.id
    service.eliminarDestino(id)
        .then((id) => res.status(202).json(id))
}

export {
    getDestinos,
    getDestinoId,
    agregarDestino,
    reemplazarDestino,
    actualizarDestino,
    borrarDestino
}