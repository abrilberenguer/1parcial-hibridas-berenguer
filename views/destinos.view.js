// Crear listado destinos 
export function crearListadoDestinos(destinos, subtitulo = "Viajes y Destinos", imagenSeccion = './turismo.jpg') {
    let html = "";
    html += `<img src='./img/${imagenSeccion}' alt='Imagen de la sección ${subtitulo}' class='card-img'/>`;
    html += `<h1>${subtitulo}</h1>`;
    html += "<div class='cards-container'>"; 

    if (destinos.length === 0) {
        html += "<p>No hay destinos disponibles</p>";
    } else {
        destinos.forEach(destino => {
            html += "<div class='card'>";
            html += `<img src='./img/${destino.imagen}' alt='Imagen de ${destino.lugar}' class='card-img'/>`;
            html += "<div class='card-body'>";
            html += `<h2>${destino.lugar}</h2>`;
            html += `<p>${destino.tematica}</p>`;
            html += `<p>${destino.descripcion}</p>`;
            html += `<p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill star" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg> Calificación: ${destino.puntuacion} puntos.</p>`;
            html += `<a href='${destino.link}' target='_blank' class='card-link'>Quiero conocer más</a>`;
            html += "<div class='btn-detalles'>";
            html += `<a href='/destinos/${destino._id}' class='btn-detalles'>Ver detalles</a>`;
            html += "</div>"; 
            html += "</div>"; 
            html += "</div>"; 
        });
    }

    html += "</div>"; 
    return html;
}
// Crear pagina 
export function crearPagina(titulo, contenido){
    let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${titulo}</title>
            <link rel="stylesheet" href="/styles.css">
            <link rel="icon" href="../img/favicon.png" type="image/png">
        </head>
        <body>
            <header>
                <nav>
                    <div class="nav-title">
                        <img class='img-logo' src='../img/favicon.png'>
                        <p><a href="/inicio">Viajes y Destinos</a></p></div>
                    <div class="nav-items">
                            <a href="/destinos">Todos</a>
                            <a href="/playas">Playas</a>
                            <a href="/ciudades">Ciudades</a>
                            <a href="/aventuras">Aventuras</a>
                            <a href="/cultura">Cultura</a>
                            <a href="/naturaleza">Naturaleza</a>
                        </div>
                </nav>
            </header>
            <main>
                ${contenido}
            </main>
            <footer>
                <div class="footer-content">
                    <div class="footer-section links">
                        <ul>
                            <li><a href="/inicio">Inicio</a></li>
                            <li><a href="/destinos">Todos los destinos</a></li>
                            <li><a href="/clientes">Clientes</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2024 Viajes y Destinos | Todos los derechos reservados
                </div>
            </footer>

        </body>
    </html>
    `;
    return html
}
// Crear destalles destino 
export function crearDetalleDestino(destino) {
    let html = "<h1>Detalles</h1>";
    html += "<div class='destino-detalle'>";
    
    html += `<h2>${destino.lugar}</h2>`;
    html += `<p><strong>Temática:</strong> ${destino.tematica}</p>`;
    html += `<a href='${destino.link}' class='card-link'>Conoce más</a>`;
    html += `<img src='../img/${destino.imagen}' alt="Imagen de ${destino.lugar}" class='destino-imagen'>`;
    
    html += `<p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill star" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg> Calificación: ${destino.puntuacion} puntos.</p>`;
    html += "<div class='destino-info'>";
    html += `<p>${destino.descripcion}</p>`;
    html += "<p><strong>Atracciones principales:</strong></p>";
    html += "<ul>";
    destino.atracciones_principales.forEach(atraccion => {
        html += `<li>${atraccion}</li>`;
    });
    html += "</ul>";
    html += "</div>";
    html += "<a href='/destinos' class='card-link'>Volver Atrás</a>";
    
    html += "</div>";
    return html;
}
// Crear inicio
export function inicio (destino){
    let html = "<h1>Explorá el Mundo con Nosotros.</h1>"
    html += "<p class='subtitulo'>Descubrí los mejores destinos, actividades y culturas alrededor del planeta.</p>"
    
    html += "<div class='contenedor-inicio'>";
    html += "<section class='card-section'>";
    html += `<img src='./img/playa.webp' alt="Imagen de Playa" class='card-image'>`;
    html += "<h3 class='card-title'>Playas</h3>";
    html += "<p class='card-description'>¿Queres descansar? Encontrá las playas más paradisíacas y conoce las mejores recomendaciones.</p>"
    html += "<a href='/playas' class='card-link'>Ver más</a>";
    html += "</section>";

    html += "<section class='card-section'>";
    html += `<img src='./img/ciudad.jpg' alt="Imagen de Playa" class='card-image'>`;
    html += "<h3 class='card-title'>Ciudades</h3>";
    html += "<p class='card-description'>Para recorrer, caminar y conocer. Explorá las ciudades más vibrantes y llenas de vida alrededor del mundo.</p>"
    html += "<a href='/ciudades' class='card-link'>Ver más</a>";
    html += "</section>"
    
    html += "<section class='card-section'>";
    html += `<img src='./img/aventura.jpg' alt="Imagen de Playa" class='card-image'>`;
    html += "<h3 class='card-title'>Aventuras</h3>";
    html += "<p class='card-description'>Embárcate en las aventuras más emocionantes y desafiantes.</p>";
    html += "<a href='/aventuras' class='card-link'>Ver más</a>";
    html += "</section>";

    html += "<section class='card-section'>";
    html += `<img src='./img/cultura.jpg' alt="Imagen de Playa" class='card-image'>`;
    html += "<h3 class='card-title'>Cultura</h3>";
    html += "<p class='card-description'>Sumérgete en la riqueza cultural de diferentes países y regiones.</p>";
    html += "<a href='/cultura' class='card-link'>Ver más</a>";
    html += "</section>";

    html += "<section class='card-section'>";
    html += `<img src='./img/naturaleza.jpg' alt="Imagen de Playa" class='card-image'>`;
    html += "<h3 class='card-title'>Naturaleza</h3>";
    html += "<p class='card-description'>Descubre los paisajes más impresionantes y las maravillas naturales.</p>";
    html += "<a href='/naturaleza' class='card-link'>Ver más</a>";
    html += "</section>";
    html += "</div>"

    return html    
}
// Crear listado clientes
export function listadoClientes(clientes) {
    let html = "";
    html += `<h1>Clientes</h1>`;
    html += "<div class='cards-container'>"; 

    if (clientes.length === 0) {
        html += "<p>No hay clientes disponibles</p>";
    } else {
        clientes.forEach(cliente => {
            html += "<div class='card'>";
            html += `<img src='./img/${cliente.foto}' alt='Imagen de ${cliente.nombre}' class='card-img'/>`;
            html += "<div class='card-body'>";
            html += `<h2>${cliente.nombre}</h2>`;
            html += `<p>${cliente.descripcion}</p>`;
            if (cliente.destinos && cliente.destinos.length > 0) {
            html += "<p><strong>Destinos creados:</strong></p>";
            html += "<ul>";
            cliente.destinos.forEach(destino => {
                html += `<li>${destino}</li>`;
            });
            html += "</ul>";
            } else {
                html += "<p>No hay proyectos disponibles.</p>";
            }
            html += "</ul>";
            html += "</div>"; 
            html += "</div>"; 
        });
    }

    html += "</div>"; 
    return html;
}