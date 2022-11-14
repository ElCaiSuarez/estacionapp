<template>
    <div>
        <h1>Mis Vehiculos</h1><br />
        <button @click="mostrarCrear()" class="btn btn-success mb-3">Crear</button><br />
        <div>
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Patente</th>
                            <th scope="col">Usuario</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vehicle in vehicles" :key="vehicle.id">
                            <th scope="row">{{ vehicle.id }}</th>
                            <td>{{ vehicle.patent }}</td>
                            <td>{{ vehicle.userId }}</td>
                            <td><button @click="mostrarDelete(vehicle)"
                                    class="btn btn-danger mb-3">Borrar</button><br /></td>
                        </tr>
                    </tbody>
                </table>
                <div class="alert alert-success" v-show="crear">
                    <label>Patente </label><br />
                    <input v-model="vehiclePost.patent" required /><br /><br />
                    <button @click="createVehicle(vehiclePost)" class="btn btn-success mb-3">Crear</button><br />
                </div>
                <div class="alert alert-danger" v-show="borrar">
                    <input v-model="vehicleForm.id" hidden />
                    <label>Patente </label><br />
                    <input v-model="vehicleForm.patent" disabled />
                    <input v-model="vehicleForm.userId" hidden /><br /><br />
                    <button @click="deleteVehicle(vehicleForm)" class="btn btn-danger mb-3">Borrar</button><br />
                </div>
                <div class="alert alert-danger" v-show="mostrar">
                    {{ mensajeError }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vehicleService from '../services/vehicleService';

export default {
    data() {
        return {
            vehicles: [],
            vehicleForm: { id: 0, patent: "", userId: 0 },
            vehiclePost: { patent: "", email: "" },
            vehicle: {},
            mensajeError: "",
            mostrar: false,
            crear: false,
            editar: false,
            borrar: false
        }
    },
    mounted: function () {
        console.log("Vehiculos por Usuario: ");
        let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuarioAux.email);
        vehicleService.getVehicles(usuarioAux.email).then(res => {
            this.vehicles = res
            console.log(this.vehicles);
        });
    },
    methods: {
        async mostrarCrear() {
            this.borrar = false;
            this.editar = false;
            this.crear = true;
        },
        async createVehicle(vehiclePost) {
            try {
                    let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
                    vehiclePost.email = usuarioAux.email;
                    console.log("Vehiculo Creado: " + vehiclePost.patent);
                    this.vehicles.push(await vehicleService.postVehicle(vehiclePost))
                    alert("Vehiculo Creado")
                    this.crear = false;

            } catch (e) {
                this.mensajeError = e;
            }
        },
        async mostrarDelete(vehicle) {
            this.crear = false;
            this.editar = false;
            this.borrar = true;
            this.vehicleForm.id = vehicle.id;
            this.vehicleForm.patent = vehicle.patent;
            this.vehicleForm.userId = vehicle.userId;
        },
        async deleteVehicle(vehicleForm) {
            try {
                console.log("Vehiculo Borrado: " + vehicleForm);
                this.vehicles.pop(await vehicleService.deleteVehicle(vehicleForm))
                alert("Vehiculo Borrado")
                this.borrar = false;
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>