import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("AH20232CP1");

// Get Clientes
async function getClientes(eliminados = false){
    await client.connect()
    return db.collection("Clientes").find({ "eliminado": { "$ne": !eliminados } }).toArray();
}
// Get clientes id
async function getClienteId(id){
    await client.connect()
    return db.collection("Clientes").findOne({_id: new ObjectId(id)});
}
// Agregar clientes
async function agregarCliente(cliente){
    console.log(cliente);
    await client.connect()
    await db.collection("Clientes").insertOne(cliente);
    return cliente
}
// Eliminar cliente
async function eliminarCliente(id){
    await client.connect();
    const clienteEliminado = await db.collection("Clientes").findOne({ _id: new ObjectId(id) });
    await db.collection("Clientes").updateOne({ _id: new ObjectId(id) }, { $set: { eliminado: true } });
    return clienteEliminado;
}
// Modificar cliente
const modificarCliente = async (id, clienteActualizado) => {
    await client.connect()
    await db.collection("Clientes").replaceOne({ _id: new ObjectId(id) }, clienteActualizado)
    return clienteActualizado
}
// Actualizar cliente
const actualizarCliente = async (id, clienteActualizado) => {
    await client.connect();
    const clienteActual = await db.collection("Clientes").findOne({ _id: new ObjectId(id) });

    const clienteFinal = {
        ...clienteActual,
        ...clienteActualizado 
    };

    await db.collection("Clientes").updateOne({ _id: new ObjectId(id) }, { $set: clienteActualizado });
    return clienteFinal;
}
// Get destinos clientes
async function getDestinosCliente(idCliente) {
    await client.connect();
    const cliente = await db.collection("Clientes").findOne({ _id: new ObjectId(idCliente) });

    if (!cliente || !cliente.destinos || cliente.destinos.length === 0) {
        return [];
    }

    const destinosIds = cliente.destinos.filter(id => ObjectId.isValid(id));

    const destinos = await db.collection("Destinos").find({
        _id: { $in: destinosIds.map(destinoId => new ObjectId(destinoId)) }
    }).toArray();

    return destinos;
}

export {
    getClientes,
    getClienteId,
    agregarCliente,
    eliminarCliente,
    modificarCliente,
    actualizarCliente,
    getDestinosCliente
}