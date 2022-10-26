<script>
import { storeToRefs } from 'pinia';
import { useParkingsStore } from '../stores/ParkingStore_OLD.js'
export default {
    setup() {
        const store = useParkingsStore();
        const { parkings } = storeToRefs(store);
        const { addParking } = store;
        const { removeParking } = store;
        const { editParking } = store;
        return { store, parkings, addParking, removeParking, editParking }
    },
    data() {
        return {
            /* parkingsLocal: [//EJEMPLO
                { id: 1, name: 'Estacionamiento 1' },
                { id: 2, name: 'Estacionamiento 2' },
                { id: 3, name: 'Estacionamiento 3' },
                { id: 4, name: 'Estacionamiento 4' },], */
            parking: {},
            inputParking: { id: 0, name: "N/A" }
        }
    },
    methods: {
        addParking(parking) {
            this.addParking(parking);
        },
        removeParking(id) {
            this.removeParking(id);
        },
        editParking(parking) {
            this.editParking(parking);
        }
    }
}
</script>

<template>
    <main>
        <h1>Estacionamiento CRUD</h1>
        <!-- {{ parkings }} -->
        <div>
            <h2>Alta</h2>
            <div>
                Id: <input type="text" v-model="inputParking.id" /><br/>
                Nombre: <input type="text" v-model="inputParking.name" /><br/>
            </div>
            <div>
                <button v-on:click="addParking(inputParking)">Agregar Estacionamiento</button>
            </div>
        </div>
        <div>
            <h2>Baja o Modificacion</h2>
            <div>
                <li v-for="parking in parkings">
                    {{ parking.id }} | {{ parking.name }}
                    <button v-on:click="editParking(parking)">Editar Estacionamiento</button>
                    <button v-on:click="removeParking(parking.id)">Borrar Estacionamiento</button>
                </li>
            </div>
        </div>
    </main>
</template>

<style>

</style>