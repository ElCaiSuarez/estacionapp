<template>
    <div>
        <div>
            <h2>Mis Estacionamientos</h2><br />
            <button @click="mostrarCrear()" class="btn btn-success mb-3">Crear</button><br />
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Barrio</th>
                            <th scope="col">Usuario</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="parking in parkings" :key="parking.id">
                            <th scope="row">{{ parking.id }}</th>
                            <td>{{ parking.name }}</td>
                            <td>{{ parking.locationId }}</td>
                            <td>{{ parking.userId }}</td>
                            <td><button @click="mostrarUpdate(parking)"
                                    class="btn btn-primary mb-3">Actualizar</button><br /></td>
                            <td><button @click="mostrarDelete(parking)"
                                    class="btn btn-danger mb-3">Borrar</button><br /></td>
                        </tr>
                    </tbody>
                </table>
                <div class="alert alert-success" v-show="crear">
                    <label>Nombre </label><br />
                    <input v-model="parkingPost.name" required /><br />
                    <label>Barrio </label><br />
                    <select v-model="locationPost" class="form-control">
                        <option v-for="location in locations" :value="location">{{location.name}}</option>
                    </select><br />
                    <button @click="createParking(parkingPost)" class="btn btn-success mb-3">Crear</button><br />
                </div>
                <div class="alert alert-primary" v-show="editar">
                    <input v-model="parkingForm.id" hidden />
                    <label>Nombre </label><br />
                    <input v-model="parkingForm.name" />
                    <input v-model="parkingForm.locationId" hidden /><br />
                    <input v-model="parkingForm.userId" hidden /><br />
                    <button @click="updateParking(parkingForm)" class="btn btn-primary mb-3">Guardar</button><br />
                </div>
                <div class="alert alert-danger" v-show="borrar">
                    <input v-model="parkingForm.id" hidden />
                    <label>Nombre </label><br />
                    <input v-model="parkingForm.name" disabled />
                    <input v-model="parkingForm.locationId" hidden />
                    <input v-model="parkingForm.userId" hidden /><br /><br />
                    <button @click="deleteParking(parkingForm)" class="btn btn-danger mb-3">Borrar</button><br />
                </div>
                <div class="alert alert-danger" v-show="mostrar">
                    {{ mensajeError }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import parkingService from '../services/parkingService';
import locationService from '../services/locationService';

export default {
    data() {
        return {
            parkings: [],
            parkingForm: { id: 0, name: "", locationId: 0, userId: 0 },
            parkingPost: { patent: "", locationId: 0, email: "" },
            parking: {},
            locations: [],
            locationPost: {},
            mensajeError: "",
            mostrar: false,
            crear: false,
            editar: false,
            borrar: false
        }
    },
    mounted: function () {
        console.log("Busqueda por Usuario");
        let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuarioAux.email);
        locationService.getLocations().then(res => {
            this.locations = res
            console.log(this.locations);
        });
        parkingService.getParkingsEmail(usuarioAux.email).then(res => {
            this.parkings = res
            console.log(this.parkings);
        });
    },
    methods: {
        async mostrarCrear() {
            this.borrar = false;
            this.editar = false;
            this.crear = true;
        },
        async createParking(parkingPost) {
            try {
                    let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
                    parkingPost.email = usuarioAux.email;
                    parkingPost.locationId = this.locationPost.id
                    console.log("Parking Creado: " + parkingPost.name);
                    this.parkings.push(await parkingService.postParking(parkingPost))
                    alert("Parking Creado")
                    this.crear = false;
            } catch (e) {
                this.mensajeError = e;
            }
        },
        async mostrarUpdate(parking) {
            this.crear = false;
            this.borrar = false;
            this.editar = true;
            this.parkingForm.id = parking.id;
            this.parkingForm.name = parking.name;
            this.parkingForm.locationId = parking.locationId;
            this.parkingForm.userId = parking.userId;
        },
        async updateParking(parkingForm) {
            try {
                console.log("Parking Actualizado: " + parkingForm);
                this.parking = await parkingService.updateParking(parkingForm)
                alert("Parking Actualizado")
                this.editar = false;
            } catch (e) {
                this.mensajeError = e;
            }
        },
        async mostrarDelete(parking) {
            this.crear = false;
            this.editar = false;
            this.borrar = true;
            this.parkingForm.id = parking.id;
            this.parkingForm.name = parking.name;
            this.parkingForm.locationId = parking.locationId;
            this.parkingForm.userId = parking.userId;
        },
        async deleteParking(parkingForm) {
            try {
                console.log("Parking Borrado: " + parkingForm);
                this.parkings.pop(await parkingService.deleteParking(parkingForm))
                alert("Parking Borrado")
                this.borrar = false;
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>