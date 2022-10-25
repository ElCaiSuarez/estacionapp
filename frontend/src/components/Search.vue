<script>
import { useLocationsStore } from '../stores/LocationStore.js'
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const store = useLocationsStore();
        const { getLocations } = store;
        const { locationsStore } = storeToRefs(store);
        return { getLocations, locationsStore }
    },
    data() {
        return {
            locations: {},
            locationForm: { id: "", name: "" },
            mensajeError: ""
        }
    },
    methods: {
        async getLocations() {
            await this.getLocations();
            this.locations = this.locationsStore;
        }
    }
}
</script>

<template>
    <div>
        <h1>This is a search page</h1><br />
        <div>
            <!-- <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Seleccione un Barrio</option>
                <option value="1">Villa Devoto</option>
                <option value="2">Villa del Parque</option>
                <option value="3">Montecastro</option>
            </select>
            <label for="floatingSelect">Buscar un Estacionamiento</label><br /> -->
            <button @click="getLocations()" class="btn btn-primary mb-3">Traer barrios del backend</button><br/>
            <select class="form-select" size="3" v-model="selected">
                <option v-for="location in locations" :key="location.id">{{ location.name }}</option>
            </select><br/>
            <button type="submit" class="btn btn-primary mb-3">Buscar estacionamientos</button><br/>
        </div>
    </div>
</template>