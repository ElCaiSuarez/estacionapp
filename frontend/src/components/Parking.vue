<template>
    <div>
        <h1>This is a parking page</h1><br />
        <div>
            <button @click="getParkings()" class="btn btn-primary mb-3">Traer estacionamientos del
                backend</button><br />
            <select class="form-select" size="3" v-model="selected">
                <option v-for="parking in parkings" :key="parking.id">{{ parking.name }}</option>
            </select><br />
            {{ mensajeError }}
            id <input type="number" v-model="parkingForm.id"/>
            Nombre <input v-model="parkingForm.name" /><br/><br/>
            <button @click="postParking()" class="btn btn-primary mb-3">Agregar estacionamiento</button><br />
            {{ mensajeError }}
        </div>
    </div>
</template>

<script>
import parkingService from '../services/parkingService';

export default {
    data() {
        return {
            parkings: [],
            parkingForm: { id:0, name: "" },
            mensajeError: ""
        }
    },
    methods: {
        async getParkings() {
            try {
                this.parkings = await parkingService.getParkings()
            } catch (e) {
                this.mensajeError = e;
            }

        },
        async postParking() {
            try {
                await parkingService.postParking({ ...this.parkingForm })
                this.parkings.push({ ...this.parkingForm })
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>