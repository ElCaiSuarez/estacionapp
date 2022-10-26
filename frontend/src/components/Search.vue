<template>
    <div>
        <h1>This is a search page</h1><br />
        <div>
            <button @click="getLocations()" class="btn btn-primary mb-3">Traer barrios del backend</button><br />
            <select class="form-select" size="3" v-model="selected">
                <option v-for="location in locations" :key="location.id">{{ location.name }}</option>
            </select><br />
            {{ mensajeError }}
            <!-- <button type="submit" class="btn btn-primary mb-3">Buscar estacionamientos</button><br /> -->
        </div>
    </div>
</template>

<script>
import locationService from '../services/locationService';

export default {
    data() {
        return {
            locations: [],
            locationForm: { id: "", name: "" },
            mensajeError: ""
        }
    },
    methods: {
        async getLocations() {
            try {
                this.locations = await locationService.getLocations()
            } catch (e) {
                this.mensajeError = e;
            }

        }
    }
}
</script>