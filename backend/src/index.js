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
    console.log("Email recibido: " + req.body.email);
    let userAux = users.filter(user => user.email == req.body.email);//Filtro usuarios, buscando el usuario del login
    if (userAux.length > 0 && req.body.email == userAux[0].email && req.body.password == userAux[0].password) {
        const token = jsonwebtoken.sign({ usuario: userAux.email, rol: 'ADM' }, 'frase secreta');
        console.log("Usuario encontrado: " + userAux[0]);
        console.log("Login exitoso con token: " + token);
        res.json(token);
    } else {
        console.log("Login unauthorized - Error 401");
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
    console.log("Email recibido: " + req.query.email);
    let userAux = users.filter(user => user.email == req.query.email);
    if(userAux.length > 0){
        console.log("Usuario encontrado: " + userAux[0]);
        return res.json(userAux[0]);
    }else{
        res.send(false)
        console.log('ERROR! Usuario inexistente: ' + req.query.email);
    }
})
//USERS BACKEND post 
app.post('/api/users', (req, res) => {
    if (!req.body.name) {
        console.log('ERROR! falta nombre ');
        return res.send('ERROR! falta nombre ');
    }
    if (!req.body.email) {
        console.log('ERROR! falta email ');
        return res.send('ERROR! falta email ');
    }
    if (!req.body.password) {
        console.log('ERROR! falta password ');
        return res.send('ERROR! falta password ');
    }
    let userAux = users.filter(user => user.email == req.body.email);//Filtro usuarios, buscando el usuario del post
    if (userAux.length > 0) {
        console.log('ERROR! Usuario existente: ' + req.body.email);
        return res.send('ERROR! Usuario existente: ' + req.body.email)
    }
    lastIdUser++;
    let user = { id: lastIdUser, name: req.body.name, email: req.body.email, password: req.body.password }
    users.push(user);
    res.send('Usuario registrado: ' + req.body.email)
    console.log('Usuario registrado: ' + user);
})
//USERS BACKEND post Actualizar
app.post('/api/users/update', (req, res) => {
    console.log("Email recibido: " + req.body.emailAnterior);
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
    console.log('Usuario actualizado: ' + userAux[0]);
    res.send('Usuario actualizado: ' + req.body.email)
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
    console.log("Email recibido: " + req.query.email);
    let userAux = users.filter(user => user.email == req.query.email);
    if (userAux.length > 0) {
        console.log("Usuario encontrado: " + userAux[0]);
        let parkingAux = parkings.filter(parking => parking.userId == userAux[0].id)
        console.log("Estacionamientos del usuario: " + parkingAux);
        return res.json(parkingAux);
    } else {
        res.send('ERROR! Usuario inexistente: ' + req.query.email)
        console.log('ERROR! Usuario inexistente: ' + req.query.email);
    }
})
//PARKINGS BACKEND get con locationId
app.get('/api/parkings/location', (req, res) => {
    console.log("LocationId recibido: " + req.query.locationId);
    let locationAux = locations.filter(location => location.id == req.query.locationId);
    if (locationAux.length > 0) {
        console.log("Barrio encontrado: " + locationAux[0]);
        let parkingAux = parkings.filter(parking => parking.locationId == locationAux[0].id)
        console.log("Estacionamientos del barrio: " + parkingAux);
        return res.json(parkingAux);
    } else {
        res.send('ERROR! Barrio inexistente: ' + req.query.locationId)
        console.log('ERROR! Barrio inexistente: ' + req.query.locationId);
    }
})
//PARKINGS BACKEND post
app.post('/api/parkings', (req, res) => {
    console.log("Nombre: " + req.body.name);
    console.log("LocationId: " + req.body.locationId);
    console.log("Email: " + req.body.email);
    if (!req.body.name) {
        console.log('ERROR! falta nombre ');
        return res.send('ERROR! falta nombre ');
    }
    if (req.body.locationId < 0) {
        console.log('ERROR! falta barrio ');
        return res.send('ERROR! falta barrio ');
    }
    if (!req.body.email) {
        console.log('ERROR! falta email ');
        return res.send('ERROR! falta email ');
    }
    let userAux = users.filter(user => user.email == req.body.email);
    if (userAux.length <= 0) {
        console.log('ERROR! Usuario inexsistente ');
        return res.send('ERROR! Usuario inexsistente ');
    }
    let locationAux = locations.filter(location => location.id == req.body.locationId);
    if (locationAux.length <= 0) {
        console.log('ERROR! Barrio inexsistente ');
        return res.send('ERROR! Barrio inexsistente ');
    }
    let parkingAux = parkings.filter(parking => parking.name == req.body.name);
    if (parkingAux.length > 0) {
        console.log('ERROR! Parking existente ');
        return res.send('ERROR! Parking existente ');
    }
    lastIdParking++
    let parking = { id: lastIdParking, name: req.body.name, locationId: req.body.locationId, userId: userAux[0].id };
    parkings.push(parking);
    console.log('Parking registrado: ' + parking.id + " " + parking.name + " " + parking.locationId + " " + parking.userId);
    return res.json(parking);
})
app.delete('/api/parkings', (req, res) => {
    console.log("Id recibido: " + req.query.id);
    let parkingAux = parkings.filter(parking => parking.id == req.query.id);
    if (parkingAux.length <= 0) {
        console.log('ERROR! Parking inexistente ' + req.query.id);
        return res.send('ERROR! Parking inexistente ')
    }
    parkingAux[0].name = null;
    parkingAux[0].locationId = null;
    parkingAux[0].userId = null;
    console.log('Parking borrado: ' + req.query.id);
    return res.json(parkingAux[0]);
})
app.patch('/api/parkings', (req, res) => {
    console.log("Id recibido: " + req.body.id);
    let parkingAux = parkings.filter(parking => parking.id == req.body.id);
    if (parkingAux.length <= 0) {
        console.log('ERROR! Parking inexistente ' + req.body.id);
        return res.send('ERROR! Parking inexistente ')
    }
    parkingAux[0].name = req.body.name;
    console.log('Parking Actualizado: ' + req.body.id);
    return res.json(parkingAux[0]);
})

//LOCATIONS BACKEND
const locations = [
    { id: 0, name: "Barrio 1" },//TIENE 2 PARKING
    { id: 1, name: "Barrio 2" },//TIENE 1 PARKING
    { id: 2, name: "Barrio 3" }//NO TIENE PARKING
]
//LOCATIONS BACKEND get
app.get('/api/locations', (req, res) => {
    console.log("Barrios: " + locations);
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
    console.log("Email recibido: " + req.query.email);
    let userAux = users.filter(user => user.email == req.query.email);
    if (userAux.length > 0) {
        console.log("Usuario encontrado: " + userAux[0]);
        let vehiclesAux = vehicles.filter(vehicle => vehicle.userId == userAux[0].id)
        console.log("Vehiculos del usuario: " + vehiclesAux);
        return res.json(vehiclesAux);
    } else {
        res.send('ERROR! Usuario inexistente: ' + req.query.email)
        console.log('ERROR! Usuario inexistente: ' + req.query.email);
    }
})
app.post('/api/vehicles', (req, res) => {
    console.log("Patente: " + req.body.patent);
    console.log("Email: " + req.body.email);
    if (!req.body.patent) {
        console.log('ERROR! falta patente');
        return res.send('ERROR! falta patente');
    }
    if(!req.body.email){
        console.log('ERROR! falta email');
        return res.send('ERROR! falta email');
    }
    let userAux = users.filter(user => user.email == req.body.email);
    if (userAux.length <= 0) {
        console.log('ERROR! Usuario inexsistente' + req.body.email);
        return res.send('ERROR! Usuario inexsistente ');
    }
    let vehicleAux = vehicles.filter(vehicle => vehicle.patent == req.body.patent);
    if (vehicleAux.length > 0) {
        console.log('ERROR! Vehiculo existente ' + req.body.patent);
        return res.send('ERROR! Vehiculo existente ');
    }
    lastIdVehicle++
    let vehicle = { id: lastIdVehicle, patent: req.body.patent, userId: userAux[0].id };
    vehicles.push(vehicle);
    console.log('Vehiculo registrado:  ' + vehicle.id + " " + vehicle.patent + " " + vehicle.userId);
    return res.json(vehicle);
})
app.delete('/api/vehicles', (req, res) => {
    console.log("Patente recibida: " + req.query.patent);
    let vehicleAux = vehicles.filter(vehicle => vehicle.patent == req.query.patent);
    if (vehicleAux.length <= 0) {
        console.log('ERROR! Vehiculo inexistente ' + req.query.patent);
        return res.send('ERROR! Vehiculo inexistente ')
    }
    vehicleAux[0].patent = null;
    vehicleAux[0].userId = null;
    console.log('Vehiculo borrado: ' + req.query.patent);
    return res.json(vehicleAux[0]);
})

//OTROS
app.get('/api/ping', (req, res) => {
    res.send('pong');
})
app.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
})
