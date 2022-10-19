<script>
import { storeToRefs } from 'pinia';
import { useVehiclesStore } from '../stores/VehicleStore.js'
export default {
  setup() {
    const store = useVehiclesStore();
    const { vehicles } = storeToRefs(store);
    const { addVehicle } = store;
    const { removeVehicle } = store;
    const { editVehicle } = store;
    return { store, vehicles, addVehicle, removeVehicle, editVehicle }
  },
  data() {
    return {
      /* vehicles: [
        { id: 1, name: 'Vehiculo 1' },
        { id: 2, name: 'Vehiculo 2' },
        { id: 3, name: 'Vehiculo 3' },
        { id: 4, name: 'Vehiculo 4' },], */
      vehicle: {},
      inputVehicle: { id: 0, name: "N/A" }
    }
  },
  methods: {
    addVehicle(vehicle) {
      this.addVehicle(vehicle);
    },
    removeVehicle(id) {
      this.removeVehicle(id);
    },
    editVehicle(vehicle) {
      this.editVehicle(vehicle);
    }
  }
}
</script>

<template>
  <main>
    <h1>Vehiculo CRUD</h1>
    <!-- {{ vehicles }} -->
    <div>
      <h2>Alta</h2>
      <div>
        Id: <input type="text" v-model="inputVehicle.id" /><br/>
        Nombre: <input type="text" v-model="inputVehicle.name" /><br/>
      </div>
      <div>
        <button v-on:click="addVehicle(inputVehicle)">Agregar Vehiculo</button>
      </div>
    </div>
    <div>
      <h2>Baja o Modificacion</h2>
      <div>
        <li v-for="vehicle in vehicles">
          {{ vehicle.id }} | {{ vehicle.name }}
          <button v-on:click="editUser(vehicle)">Editar Vehiculo</button>
          <button v-on:click="editVehicle(vehicle.id)">Borrar Vehiculo</button>
        </li>
      </div>
    </div>
  </main>
</template>

<style>

</style>