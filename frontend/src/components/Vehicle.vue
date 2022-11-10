<template>
    <div>
        <h1>Mis Vehiculos</h1><br />
        <div>
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Patente</th>
                            <th scope="col">Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- v-on:click="updateVehicles(vehicle.id)" -->
                        <tr v-for="vehicle in vehicles" :key="vehicle.id" >
                            <th scope="row">{{vehicle.id}}</th>
                            <td>{{vehicle.patent}}</td>
                            <td>{{vehicle.userId}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- <button @click="getVehicles()" class="btn btn-primary mb-3">Traer vehiculos del
                backend</button><br />
            <select class="form-select" size="3" v-model="selected">
                <option v-for="vehicle in vehicles" :key="vehicle.id">{{ vehicle.patent }}</option>
            </select><br />
            {{ mensajeError }}
            id <input type="number" v-model="vehicleForm.id"/>
            Patente <input v-model="vehicleForm.patent" /><br/><br/>
            <button @click="postVehicle()" class="btn btn-primary mb-3">Agregar vehiculo</button><br />
            {{ mensajeError }} -->
        </div>
    </div>
</template>

<script>
import vehicleService from '../services/vehicleService';

export default {
    data() {
        return {
            vehicles: [],
            vehicleForm: { id:0, patent: "" },
            vehicle: {},
            mensajeError: "",
            mostrar: false
        }
    },
    mounted:function(){
        console.log("Busqueda por Usuario");
        let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuarioAux.email);
        vehicleService.getVehicles(usuarioAux.email).then(res => {
            this.vehicles = res
            console.log(this.vehicles);
        });
    },
    methods: {
        /* async updateVehicles(vehicle) {
            try {
                console.log("Actualizado: " + vehicle);
                this.vehicle = await vehicleService.updateVehicles(vehicle)
            } catch (e) {
                this.mensajeError = e;
            }

        }, */
        async postVehicle() {
            try {
                await vehicleService.postVehicle({ ...this.vehicleForm })
                this.vehicles.push({ ...this.vehicleForm })
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>