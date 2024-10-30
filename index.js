const express = require("express")

const app = express()
const port = 8080;


let state = 'apagado';

app.get('/', (req, res) => {
    res.json({ mensaje: "Hola" });
})

app.get('/on', (req, res) => {
    state = 'encendido'
    res.json({ estado: state });
})

app.get('/off', (req, res) => {
    state = 'apagado'
    res.json({ estado: state });
})


app.get('/status', (req, res) => {
    res.json({ estado: state });
})


app.listen(port, () => {
    console.log(`Iniciando servidor en puerto: ${port}`)
})
