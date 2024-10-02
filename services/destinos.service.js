import { readFile, writeFile } from "fs/promises"
import { resolve } from "path"
import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("AH20232CP1");

// Get destinos
async function getDestinos(filtros = {}){
    const filterMongo = {eliminado: {$ne: true}}
    if(filtros.tematica !== undefined) {
        filterMongo.tematica = { $eq: filtros.tematica }
    }
    if(filtros.puntuacionMayorQue !== undefined || filtros.puntuacionMenorQue !== undefined) {
        filterMongo.$and = [
            {puntuacion: { $gt: parseInt(filtros.puntuacionMayorQue) }}, 
            {puntuacion: { $lt: parseInt(filtros.puntuacionMenorQue) }}];
    }
    await client.connect()
    return db.collection("Destinos").find(filterMongo).toArray()
}
// Get destino id
async function getDestinoId(id){
    await client.connect()
    return db.collection("Destinos").findOne({_id: new ObjectId(id)});
}
// Agregar destino
async function agregarDestino(destino){
    console.log(destino);
    await client.connect()
    await db.collection("Destinos").insertOne(destino)
    return destino
}
// Eliminar destino
async function eliminarDestino(id){
    await client.connect();
    const destinoEliminado = await db.collection("Destinos").findOne({ _id: new ObjectId(id) });
    await db.collection("Destinos").updateOne({ _id: new ObjectId(id) }, { $set: { eliminado: true } });
    return destinoEliminado;
}
// Modificar destino 
const modificarDestino = async (id, destinoActualizado) => {
    await client.connect()
    await db.collection("Destinos").replaceOne({ _id: new ObjectId(id) }, destinoActualizado)
    return destinoActualizado
}
// Actualizar destino 
const actualizarDestino = async (id, destinoActualizado) => {
    await client.connect();
    const destinoActual = await db.collection("Destinos").findOne({ _id: new ObjectId(id) });

    const destinoFinal = {
        ...destinoActual,
        ...destinoActualizado 
    };

    await db.collection("Destinos").updateOne({ _id: new ObjectId(id) }, { $set: destinoActualizado });
    return destinoFinal;
}

export {
    getDestinoId,
    getDestinos,
    agregarDestino,
    eliminarDestino,
    modificarDestino,
    actualizarDestino
}
