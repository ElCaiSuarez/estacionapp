console.log("Sistema");

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    console.log(req.body);
    if (req.body && req.body.email == "usuario@sistema.com" && req.body.password == "123456") {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
})

app.get('/api/locations', (req, res) => {
    const locations = [//BACKEND
        { id: 0, name: "Barrio backend 1" },
        { id: 1, name: "Barrio backend 2" },
        { id: 2, name: "Barrio backend 3" },
        { id: 3, name: "Barrio backend 4" }
    ];
    console.log(locations);
    return res.json(locations);
})

app.get('/api/users', (req, res) => {
    const users = [//BACKEND
        { id: 1, name: 'Usuario backend 1' },
        { id: 2, name: 'Usuario backend 2' },
        { id: 3, name: 'Usuario backend 3' },
        { id: 4, name: 'Usuario backend 4' }];
    console.log(users);
    return res.json(users);
})

app.get('/api/parkings', (req, res) => {
    const parkings = [//BACKEND
    { id: 1, name: 'Estacionamiento backend 1' },
    { id: 2, name: 'Estacionamiento backend 2' },
    { id: 3, name: 'Estacionamiento backend 3' },
    { id: 4, name: 'Estacionamiento backend 4' }];
    console.log(parkings);
    return res.json(parkings);
})

app.get('/api/vehicles', (req, res) => {
    const vehicles = [//BACKEND
    { id: 1, name: 'Vehiculo backend 1' },
    { id: 2, name: 'Vehiculo backend 2' },
    { id: 3, name: 'Vehiculo backend 3' },
    { id: 4, name: 'Vehiculo backend 4' }];
    console.log(vehicles);
    return res.json(vehicles);
})

app.get('/api/ping', (req, res) => {
    res.send('pong');
})

app.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
})
