console.log("Backend de EstacionApp");

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken'

const app = express()
app.use(cors());
app.use(bodyParser.json());

//LOGIN BACKEND
app.post('/api/login', (req, res) => {
    if (req.body && req.body.email == "usuario@sistema.com" && req.body.password == "123456") {
        const token = jsonwebtoken.sign({ usuario: 'usuario@sistema.com', rol: 'ADM' }, 'frase secreta');
        console.log(req.body);
        res.json(token);
    } else {
        console.log("Error 401");
        res.sendStatus(401);
    }
})

//USERS BACKEND
const users = [
    { id: 1, name: 'Usuario backend 1' },
    { id: 2, name: 'Usuario backend 2' },
    { id: 3, name: 'Usuario backend 3' },
    { id: 4, name: 'Usuario backend 4' }
]
    //USERS BACKEND get
app.get('/api/users', (req, res) => {
    console.log(users);
    return res.json(users);
})

//PARKINGS BACKEND
const parkings = [
    { id: 1, name: 'Estacionamiento backend 1' },
    { id: 2, name: 'Estacionamiento backend 2' },
    { id: 3, name: 'Estacionamiento backend 3' },
    { id: 4, name: 'Estacionamiento backend 4' }
]
    //PARKINGS BACKEND get
app.get('/api/parkings', (req, res) => {
    console.log(parkings);
    return res.json(parkings);
})

//LOCATIONS BACKEND
const locations = [
    { id: 0, name: "Barrio backend 1" },
    { id: 1, name: "Barrio backend 2" },
    { id: 2, name: "Barrio backend 3" },
    { id: 3, name: "Barrio backend 4" }
]
    //LOCATIONS BACKEND get
app.get('/api/locations', (req, res) => {
    console.log(locations);
    return res.json(locations);
})

//VEHICLES BACKEND
const vehicles = [
    { id: 1, name: 'Vehiculo backend 1' },
    { id: 2, name: 'Vehiculo backend 2' },
    { id: 3, name: 'Vehiculo backend 3' },
    { id: 4, name: 'Vehiculo backend 4' }
]
    //VEHICLES BACKEND get
app.get('/api/vehicles', (req, res) => {
    console.log(vehicles);
    return res.json(vehicles);
})

//OTROS
app.get('/api/ping', (req, res) => {
    res.send('pong');
})
app.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
})
