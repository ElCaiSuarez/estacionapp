import { defineStore } from 'pinia'
//import axios from 'axios'

export const useVehiclesStore = defineStore('vehiclesStore', {
  state: () => {
    return {
      vehicles: [
        { id: 1, name: 'Vehiculo 1' },
        { id: 2, name: 'Vehiculo 2' },
        { id: 3, name: 'Vehiculo 3' },
        { id: 4, name: 'Vehiculo 4' },]
    }
  },
  actions: {
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