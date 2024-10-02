import * as service from "../../services/clientes.service.js";

// Get clientes
function getClientes(req, res) {
    const filtros = req.query
    service.getClientes(filtros)
        .then((clientes) => res.status(200).json(clientes))
}
// Get clientes id
function getClienteId(req, res) {
    const id = req.params.id
    service.getClienteId(id)
        .then(cliente => res.status(200).json(cliente))
}
// Agregar cliente
function agregarCliente(req, res) {
    service.agregarCliente(req.body)
        .then((cliente) => res.status(201).json(cliente))
}
// Reemplzar cliente
function reemplazarCliente(req, res) {
    const id = req.params.id
    service.modificarCliente(id, req.body)
        .then((cliente) => res.status(201).json(cliente))
}
// Actualizar cliente
function actualizarCliente(req, res) {
    const id = req.params.id
    service.actualizarCliente(id, req.body)
        .then(cliente => {
            if( cliente ) {
                res.status(201).json(cliente);
            } else{
                res.status(404).json({error: { message: "No se encuentra el cliente" }})
            }
        })
}
// Borrar cliente
function borrarCliente (req, res) {
    const id = req.params.id
    service.eliminarCliente(id)
        .then((id) => res.status(202).json(id))
}
// Obtener destinos de un cliente por id
function getDestinosCliente(req, res) {
    const idCliente = req.params.id;

    service.getDestinosCliente(idCliente)
        .then(destinos => {
            if (destinos) {
                res.status(200).json(destinos);
            } else {
                res.status(404).json({ error: "Cliente no encontrado o sin destinos." });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Error en el servidor" });
        });
}

export {
    getClientes,
    getClienteId,
    agregarCliente,
    reemplazarCliente,
    actualizarCliente,
    borrarCliente,
    getDestinosCliente
}