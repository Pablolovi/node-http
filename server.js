// server.js

const http = require('http');
const pageData = require('./data');

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    // Configurar el encabezado de la respuesta
    res.writeHead(200, {'content-type': 'text/html'});

    //Crear el contenido HTML usando los datos de data.js
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageData.title}</title>
    </head>
    <body>
      <h1>${pageData.title}</h1>
      <h2>${pageData.subtitle}</h2>
      <p>${pageData}</p>
    </body>
    </html>
    `;

    // Enviar la respuesta HTML
    res.end(html);
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://locoalhost:${PORT}`);
});