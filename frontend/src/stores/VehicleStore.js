import { defineStore } from 'pinia'
import axios from 'axios'

export const useVehiclesStore = defineStore('vehiclesStore', {
  state: () => {
    return {
      vehiclesStore: {}, //BACKEND
      vehicles: [//LOCAL FRONTEND
        { id: 1, name: 'Vehiculo 1' },
        { id: 2, name: 'Vehiculo 2' },
        { id: 3, name: 'Vehiculo 3' },
        { id: 4, name: 'Vehiculo 4' }],
    }
  },
  actions: {
    async getVehicles() {
      const vehicles = await axios.get('http://localhost:3001/api/vehicles');
      this.vehiclesStore = vehicles;
      console.log("VehiclesStore.js " + this.vehiclesStore);
    },
    removeVehicle(id) {
      //TODO PUT
    },
    addVehicle(vehicle) {
      //TODO POST
      this.vehicles.push(vehicle);
    },
    editVehicle(vehicle) {
      //TODO PUT
    }
  },
})