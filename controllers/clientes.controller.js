import * as service from "../services/clientes.service.js"
import * as view from "../views/destinos.view.js"

// Get clientes
const getClientes = (req, res)=>{
    service.getClientes()
        .then(clientes => {
            res.send(view.crearPagina("Clientes", view.listadoClientes(clientes)))
        })
}
// Get cliente id
const getClienteId = (req, res) => {
    console.log(req.params.id)
    service.getClienteId(req.params.id)
        .then( cliente => res.send( view.crearPagina("detalle", view.listadoClientes(cliente)) ) )
}
// Nuevo cliente
const nuevoCliente = (req, res) => {
    res.send( view.crearPagina("Nuevo cliente", view.nuevoCliente() ) )
}
// Agregar cliente
const agregarCliente = (req, res) => {
    service.agregarCliente(req.body)
        .then((cliente) => res.send(view.crearPagina("Nuevo cliente", `<p>id: ${cliente.id} <br> Cliente: ${cliente.nombre}</p>`)))
        .catch((err) => res.send(view.crearPagina("Error Al agregar un cliente", `<p>${err}</p>`)));
}
// Eliminar cliente
const eliminarCliente = (req, res) => {
    service.eliminarCliente(req.params.id)
        .then( ( id ) => res.redirect("/clientes") )
        .catch( (err) => res.send(view.crearPagina("Error Al eliminar un cliente", `<p>${err}</p>`)) )
}
// Modificar cliente
const modificarClienteForm = (req, res) => {
    const idCliente = req.params.id
    service.getClienteId(idCliente)
        .then( cliente => res.send( view.crearPagina("Modificar cliente", view.modificarForm(cliente) ) ) )
        .catch( (err) => res.send(view.crearPagina("Error Al modificar un cliente", `<p>${err}</p>`)) )
    
}
// Modificar cliente
export const modificarCliente = (req, res) => {
    const idCliente = req.params.id;
    service.modificarCliente(idCliente, req.body)
        .then( () => res.redirect("/clientes") )
}

export {
    getClienteId,
    getClientes,
    nuevoCliente,
    agregarCliente,
    eliminarCliente,
    modificarClienteForm
}