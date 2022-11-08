<template>
    <div>
        <h1>This is a vehicle page</h1><br />
        <div>
            <button @click="getVehicles()" class="btn btn-primary mb-3">Traer vehiculos del
                backend</button><br />
            <select class="form-select" size="3" v-model="selected">
                <option v-for="vehicle in vehicles" :key="vehicle.id">{{ vehicle.patent }}</option>
            </select><br />
            {{ mensajeError }}
            id <input type="number" v-model="vehicleForm.id"/>
            Patente <input v-model="vehicleForm.patent" /><br/><br/>
            <button @click="postVehicle()" class="btn btn-primary mb-3">Agregar vehiculo</button><br />
            {{ mensajeError }}
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
            mensajeError: ""
        }
    },
    methods: {
        async getVehicles() {
            try {
                this.vehicles = await vehicleService.getVehicles()
            } catch (e) {
                this.mensajeError = e;
            }

        },
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