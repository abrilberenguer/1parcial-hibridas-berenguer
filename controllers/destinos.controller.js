import * as destinoService from "../services/destinos.service.js"
import * as destinoView from "../views/destinos.view.js"

// Get inicio
const getInicio = (req, res) => {
    res.send(destinoView.crearPagina("Inicio - Viajes y Destinos", destinoView.inicio()));
};
// Get destino 
const getDestino = (req, res)=>{
    destinoService.getDestinos()
        .then(productos => {
            res.send(destinoView.crearPagina("Destinos", destinoView.crearListadoDestinos(productos)))
        })
}
// Get destino id
const getDestinoId = (req, res) => {
    console.log(req.params.id)
    destinoService.getDestinoId(req.params.id)
        .then( destino => res.send( destinoView.crearPagina("Destino - Detalles", destinoView.crearDetalleDestino(destino)) ) )
}
// Nuevo destino
const nuevoDestino = (req, res) => {
    res.send( destinoView.crearPagina("Nuevo destino", destinoView.nuevoDestino() ) )
}
// Agregar destino 
const agregarDestino = (req, res) => {
    if (req.body.atracciones_principales) {
        req.body.atracciones_principales = req.body.atracciones_principales.split(',').map(item => item.trim());
    }

    destinoService.agregarDestino(req.body)
        .then((destino) => res.send(destinoView.crearPagina("Nuevo destino", `<p>id: ${destino.id} <br> Titulo: ${destino.titulo}</p>`)))
        .catch((err) => res.send(destinoView.crearPagina("Error Al agregar un destino", `<p>${err}</p>`)));
}
// Eliminar destino 
const eliminarDestino = (req, res) => {
    destinoService.eliminarDestino(req.params.id)
        .then( ( id ) => res.redirect("/destinos") )
        .catch( (err) => res.send(destinoView.crearPagina("Error Al eliminar un destino", `<p>${err}</p>`)) )
}
// Modificar destino form
const modificarDestinoForm = (req, res) => {
    const idDestino = req.params.id
    destinoService.getDestinoId(idDestino)
        .then( destino => res.send( destinoView.crearPagina("Modificar Destino", destinoView.modificarForm(destino) ) ) )
        .catch( (err) => res.send(destinoView.crearPagina("Error Al modificar un destino", `<p>${err}</p>`)) )
    
}
// Modificar destino 
const modificarDestino = (req, res) => {
    const idDestino = req.params.id;
    destinoService.modificarDestino(idDestino, req.body)
        .then( () => res.redirect("/destinos") )
}
// Get destino por tematica
const getDestinoPorTematica = (tematica, titulo, imagen, req, res) => {
    destinoService.getDestinos()
        .then(destinos => {
            const destinosFiltrados = destinos.filter(destino => destino.tematica === tematica);
            const contenido = destinoView.crearListadoDestinos(destinosFiltrados, titulo, imagen);
            res.send(destinoView.crearPagina(`Destinos - ${titulo}`, contenido));
        })
        .catch(error => {
            console.error(`Error al obtener destinos de ${tematica}:`, error);
            res.status(500).send(`Error al obtener destinos de ${tematica}`);
        });
};
// Tematicas 
// Playa
const getDestinoPlaya = (req, res) => {
    getDestinoPorTematica("Playa", "Playas", './playa.webp', req, res);
};
// Ciudad
const getDestinoCiudad = (req, res) => {
    getDestinoPorTematica("Ciudad", "Ciudades", './ciudad.jpg', req, res);
};
// Aventura
const getDestinoAventura = (req, res) => {
    getDestinoPorTematica("Aventura", "Aventuras", './aventura.jpg', req, res);
};
// Cultura
const getDestinoCultural = (req, res) => {
    getDestinoPorTematica("Cultura", "Cultura", './cultura.jpg', req, res);
};
// Naturaleza
const getDestinoNaturaleza = (req, res) => {
    getDestinoPorTematica("Naturaleza", "Naturaleza", './naturaleza.jpg', req, res);
};

export {
    getDestinoId,
    getDestino,
    nuevoDestino,
    agregarDestino,
    eliminarDestino,
    modificarDestinoForm,
    modificarDestino,

    getInicio,

    getDestinoPorTematica,
    getDestinoPlaya,
    getDestinoCiudad,
    getDestinoAventura,
    getDestinoCultural,
    getDestinoNaturaleza
}