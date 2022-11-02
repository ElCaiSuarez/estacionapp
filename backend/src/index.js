console.log("Sistema");

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express() 
app.use(cors());
app.use(bodyParser.json());
//Entidades
const users = [{
    id: 0, name: "usuario1@sistema.com", password: "123456",
    id: 1, name: "usuario2@sistema.com", password: "123456",
    id: 2, name: "usuario3@sistema.com", password: "123456",
    id: 3, name: "usuario4@sistema.com", password: "123456"
}]
const vehicles = [{
    id: 0, name: "Vehiculo1", userId: 1,
    id: 1, name: "Vehiculo2", userId: 1,
    id: 2, name: "Vehiculo3", userId: 2,
    id: 3, name: "Vehiculo4", userId: 3
}]
const locations = [{
    id: 0, name: "Barrio1",
    id: 1, name: "Barrio2",
    id: 2, name: "Barrio3",
    id: 3, name: "Barrio4"
}]
const parkings = [{
    id: 0, name: "Estacionamiento1", locationId: 0, userId: 1,
    id: 1, name: "Estacionamiento2", locationId: 0, userId: 2,
    id: 2, name: "Estacionamiento3", locationId: 1, userId: 3,
    id: 3, name: "Estacionamiento4", locationId: 3, userId: 3
}]
//POST LOGIN
app.post('/api/login', (req,res) => {
    const usuarioAux = users.filter(usuario => usuario.name = req.body.email);
    console.log(req.body);
    if(req.body && usuarioAux.length == 1 && req.body.password == usuarioAux[0].password){
        res.sendStatus(200);
    }else{
        res.sendStatus(401);
    }
    
})

app.get('/api/ping', (req,res) => {
    res.send('pong');
})

app.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
})
