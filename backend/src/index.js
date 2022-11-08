console.log("Backend de EstacionApp");

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken'

const app = express()
app.use(cors());
app.use(bodyParser.json());

const users = [{
    id: 0, name: 'Usuario backend 1', email: "usuario1@sistema.com", password: "123456", //TIENE 0 VEHICULO y 0 PARKING
    id: 1, name: 'Usuario backend 1', email: "usuario2@sistema.com", password: "123456", //TIENE 2 VEHICULOS y 2 PARKING
    id: 2, name: 'Usuario backend 1', email: "usuario3@sistema.com", password: "123456", //TIENE 1 VEHICULO y 0 PARKING
    id: 3, name: 'Usuario backend 1', email: "usuario4@sistema.com", password: "123456" //TIENE 0 VEHICULO y 1 PARKING
}]
const vehicles = [{
    id: 0, name: "Vehiculo1", userId: 1,
    id: 1, name: "Vehiculo2", userId: 1,
    id: 2, name: "Vehiculo3", userId: 2,
}]
const locations = [{
    id: 0, name: "Barrio1", //TIENE 2 PARKING
    id: 1, name: "Barrio2", //TIENE 1 PARKING
    id: 2, name: "Barrio3", //NO TIENE PARKING
}]
const parkings = [{
    id: 0, name: "Estacionamiento1", locationId: 0, userId: 1,
    id: 1, name: "Estacionamiento2", locationId: 0, userId: 1,
    id: 2, name: "Estacionamiento3", locationId: 1, userId: 3,
}]

//LOGIN BACKEND
app.post('/api/login', (req, res) => {
    //Buscar en usuarios por email y guardarlo en una constante para comparar en el if
    if (req.body && req.body.email == "usuario@sistema.com" && req.body.password == "123456") {
        const token = jsonwebtoken.sign({ usuario: 'usuario@sistema.com', rol: 'ADM' }, 'frase secreta');
        console.log(req.body);
        res.json(token);
    } else {
        console.log("Error 401");
        res.sendStatus(401);
    }
})

//USERS BACKEND get
app.get('/api/users', (req, res) => {
    //Buscar en usuarios por email(PARAMETRO)
    console.log(users);
    return res.json(users);
    /* const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) =>{
        if(err){
            console.log("Error 401");
            res.sendStatus(401);
        }else{
            console.log(users);
            res.json(users)
        }
    })
}) */
})
//USERS BACKEND post 
app.post('/api/users', (req, res) => {
    //Buscar en usuarios por email para que no este repetido
    users.push(req.body);
    res.send('Alta OK')
    console.log('Alta OK' + req.body);
    /* const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) =>{
        if(err){
            console.log("Error 401");
            res.sendStatus(401);
        }else{
            users.push(req.body);
            res.send('Alta OK')
            console.log('Alta OK' + req.body);
        }
    }) */
})

//PARKINGS BACKEND get
app.get('/api/parkings', (req, res) => {
    console.log(parkings);
    return res.json(parkings);
    /* const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) =>{
        if(err){
            console.log("Error 401");
            res.sendStatus(401);
        }else{
            console.log(parkings);
            res.json(parkings)
        }
    })
}) */
})
//PARKINGS BACKEND post
app.post('/api/parkings', (req, res) => {
    parkings.push(req.body);
    res.send('Alta OK')
    console.log('Alta OK' + req.body);
    /* const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) =>{
        if(err){
            console.log("Error 401");
            res.sendStatus(401);
        }else{
            parkings.push(req.body);
            res.send('Alta OK')
            console.log('Alta OK' + req.body);
        }
    }) */
})

//LOCATIONS BACKEND get
app.get('/api/locations', (req, res) => {
    console.log(locations);
    return res.json(locations);
})

//VEHICLES BACKEND get
app.get('/api/vehicles', (req, res) => {
    console.log(vehicles);
    return res.json(vehicles);
    /* const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) =>{
        if(err){
            console.log("Error 401");
            res.sendStatus(401);
        }else{
            console.log(vehicles);
            res.json(vehicles)
        }
    })
}) */
})
app.post('/api/vehicles', (req, res) => {
    vehicles.push(req.body);
    res.send('Alta OK')
    console.log('Alta OK' + req.body);
    /* const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) =>{
        if(err){
            console.log("Error 401");
            res.sendStatus(401);
        }else{
            vehicles.push(req.body);
            res.send('Alta OK')
            console.log('Alta OK' + req.body);
        }
    }) */
})
//OTROS
app.get('/api/ping', (req, res) => {
    res.send('pong');
})
app.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
})
