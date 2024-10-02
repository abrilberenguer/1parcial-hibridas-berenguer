import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

client.connect()
    .then(async() => {
        console.log("Conectado a MongoDB!!")

        const db = client.db("AH20232CP1")
        
        // Colección "Destinos"
        const destinosCollection = await db.collection("Destinos").find().toArray()
        console.log("Colección Destinos:", destinosCollection)

        // Colección "Clientes"
        const clientesCollection = await db.collection("Clientes").find().toArray()
        console.log("Colección Clientes:", clientesCollection)

    })
    .catch((err) => console.log("NO conectado a MongoDB!!", err))