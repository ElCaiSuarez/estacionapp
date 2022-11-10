console.log("Backend de EstacionApp");

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken'

const app = express()
app.use(cors());
app.use(bodyParser.json());

//LOGIN BACKEND post
app.post('/api/login', (req, res) => {
    let userAux = users.filter(user => user.email == req.body.email);//Filtro usuarios, buscando el usuario del login
    console.log(userAux);
    if (userAux.length > 0 && req.body.email == userAux[0].email && req.body.password == userAux[0].password) {
        const token = jsonwebtoken.sign({ usuario: userAux.email, rol: 'ADM' }, 'frase secreta');
        console.log(req.body);
        res.json(token);
    } else {
        console.log("Error 401");
        res.sendStatus(401);
    }
})

//USERS BACKEND
let lastIdUser = 3;
const users = [
    { id: 0, name: 'Usuario 1', email: 'usuario1@sistema.com', password: '123456' },//TIENE 0 VEHICULO y 0 PARKING
    { id: 1, name: 'Usuario 2', email: 'usuario2@sistema.com', password: '123456' },//TIENE 2 VEHICULOS y 2 PARKING
    { id: 2, name: 'Usuario 3', email: 'usuario3@sistema.com', password: '123456' },//TIENE 1 VEHICULO y 0 PARKING
    { id: 3, name: 'Usuario 4', email: 'usuario4@sistema.com', password: '123456' }//TIENE 0 VEHICULO y 1 PARKING
]
//USERS BACKEND get
app.get('/api/users', (req, res) => {
    let userAux = users.filter(user => user.email == req.query.email);
    if(userAux.length > 0){
        return res.json(userAux[0]);
    }else{
        res.send(false)
        console.log('ERROR! Usuario inexistente: ' + req.query.email);
    }
    /*const token = req.headers['authorization'];
    jsonwebtoken.verify(token, 'frase secreta', (err, payload) => {
        if (err) {
            console.log("Error 401 : Unauthorized");
            res.sendStatus(401);
        } else {
            if (req.query.email) {
                let userAux = users.filter(user => user.email == req.query.email);//Filtro usuarios, buscando el usuario del body
                console.log(req.query.email);
                console.log(userAux);
                return res.json(userAux)
            } else {
                res.send('ERROR! falta email ');
            }

        }
    })*/
})
//USERS BACKEND post 
app.post('/api/users', (req, res) => {
    //Buscar en usuarios por email para que no este repetido
    if (!req.body.name) {
        return res.send('ERROR! falta nombre ');
    }
    if (!req.body.email) {
        return res.send('ERROR! falta email ');
    }
    if (!req.body.password) {
        return res.send('ERROR! falta password ');
    }
    let userAux = users.filter(user => user.email == req.body.email);//Filtro usuarios, buscando el usuario del post
    console.log(userAux);
    if (userAux.length > 0) {
        return res.send('ERROR! Usuario existente: ' + req.body.email)
    }
    lastIdUser++;
    let user = { id: lastIdUser, name: req.body.name, email: req.body.email, password: req.body.password }
    users.push(user);
    res.send('Usuario registrado: ' + req.body.email)
    console.log('Usuario registrado: ' + req.body.email);
    //La autenticacion no sera necesaria en el post de usuarios, ya que solo se utilizara para registrar nuevos usuarios
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
app.post('/api/users/update', (req, res) => {
    let userAux = users.filter(user => user.email == req.body.emailAnterior);//Filtro usuarios, buscando el usuario del post
    if(userAux.length <= 0){
        console.log('ERROR! Usuario inexistente: ' + req.body.emailAnterior);
        return res.send('ERROR! Usuario inexistente: ' + req.body.emailAnterior)
    }
    if (req.body.name) {
        userAux[0].name = req.body.name;
    }
    if (req.body.email) {
        userAux[0].email = req.body.email;
    }
    if (req.body.password) {
        userAux[0].password = req.body.password;
    }    
    console.log('Usuario actualizado: ' + req.body.email);
    res.send('Usuario actualizado: ' + req.body.email)
    //La autenticacion no sera necesaria en el post de usuarios, ya que solo se utilizara para registrar nuevos usuarios
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

//PARKINGS BACKEND
let lastIdParking = 2;
const parkings = [
    { id: 0, name: 'Estacionamiento 1', locationId: 0, userId: 1 },
    { id: 1, name: 'Estacionamiento 2', locationId: 0, userId: 1 },
    { id: 2, name: 'Estacionamiento 3', locationId: 1, userId: 3 },
]
//PARKINGS BACKEND get
app.get('/api/parkings', (req, res) => {
    console.log(req.query.email);
    let userAux = users.filter(user => user.email == req.query.email);
    if (userAux.length > 0) {
        console.log(userAux[0]);
        let parkingAux = parkings.filter(parking => parking.userId == userAux[0].id)
        return res.json(parkingAux);
    } else {
        res.send('ERROR! Usuario inexistente: ' + req.query.email)
        console.log('ERROR! Usuario inexistente: ' + req.query.email);
    }
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
//PARKINGS BACKEND get con locationId
app.get('/api/parkings/location', (req, res) => {
    console.log(req.query.locationId);
    let locationAux = locations.filter(location => location.id == req.query.locationId);
    if (locationAux.length > 0) {
        console.log(locationAux[0]);
        let parkingAux = parkings.filter(parking => parking.locationId == locationAux[0].id)
        return res.json(parkingAux);
    } else {
        res.send('ERROR! Barrio inexistente: ' + req.query.locationId)
        console.log('ERROR! Barrio inexistente: ' + req.query.locationId);
    }
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
    console.log(req.body);
    if (!req.body.name) {
        return res.send('ERROR! falta nombre ');
    }
    if (req.body.locationId < 0) {
        return res.send('ERROR! falta barrio ');
    }
    if (!req.body.userId) {
        return res.send('ERROR! falta userId ');
    }
    let userAux = users.filter(user => user.id == req.body.userId);
    if (userAux.length <= 0) {
        return res.send('ERROR! Usuario inexsistente ');
    }
    let locationAux = locations.filter(location => location.id == req.body.locationId);
    if (locationAux.length <= 0) {
        return res.send('ERROR! Barrio inexsistente ');
    }
    let parkingAux = parkings.filter(parking => parking.name == req.body.name);
    if (parkingAux.length > 0) {
        return res.send('ERROR! Parking existente ');
    }
    lastIdParking++
    let parking = { id: lastIdParking, name: req.body.name, locationId: req.body.locationId, userId: req.body.userId };
    parkings.push(parking);
    res.send('Alta OK ' + req.body.name)
    console.log('Alta OK ' + req.body.name);
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

//LOCATIONS BACKEND
const locations = [
    { id: 0, name: "Barrio 1" },//TIENE 2 PARKING
    { id: 1, name: "Barrio 2" },//TIENE 1 PARKING
    { id: 2, name: "Barrio 3" }//NO TIENE PARKING
]
//LOCATIONS BACKEND get
app.get('/api/locations', (req, res) => {
    console.log(locations);
    return res.json(locations);
})

//VEHICLES BACKEND
let lastIdVehicle = 2;
const vehicles = [
    { id: 0, patent: 'ABC111', userId: 1 },
    { id: 1, patent: 'ABC222', userId: 1 },
    { id: 2, patent: 'CBA333', userId: 2 },
]
//VEHICLES BACKEND get
app.get('/api/vehicles', (req, res) => {
    console.log(req.query.email);
    let userAux = users.filter(user => user.email == req.query.email);
    if (userAux.length > 0) {
        console.log(userAux[0]);
        let vehiclesAux = vehicles.filter(vehicle => vehicle.userId == userAux[0].id)
        return res.json(vehiclesAux);
    } else {
        res.send('ERROR! Usuario inexistente: ' + req.query.email)
        console.log('ERROR! Usuario inexistente: ' + req.query.email);
    }

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
    if (!req.body.patent || !req.body.userId) {
        return res.send('ERROR! falta patente o userId ');
    }
    let userAux = users.filter(user => user.id == req.body.userId);
    if (userAux.length <= 0) {
        return res.send('ERROR! Usuario inexsistente ');
    }
    let vehicleAux = vehicles.filter(vehicle => vehicle.patent == req.body.patent);
    if (vehicleAux.length > 0) {
        return res.send('ERROR! Vehiculo existente ');
    }
    lastIdVehicle++
    let vehicle = { id: lastIdVehicle, patent: req.body.patent, userId: req.body.userId };
    vehicles.push(vehicle);
    res.send('Alta OK ' + req.body.patent)
    console.log('Alta OK ' + req.body.patent);

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
