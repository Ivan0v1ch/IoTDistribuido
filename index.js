const express = require("express")

const app = express()
const port = 8080;


let state = 'apagado';

app.get('/', (req, res) => {
    res.send("Hola");
})

app.get('/on', (req, res) => {
    state = 'encendido'
    res.send({ state });
})

app.get('/off', (req, res) => {
    state = 'apagado'
    res.send({ state });
})


app.get('/status', (req, res) => {
    res.send({ state })
})


app.listen(port, () => {
    console.log(`Iniciando servidor en puerto: ${port}`)
})
