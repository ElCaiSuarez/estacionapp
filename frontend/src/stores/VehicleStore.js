import { defineStore } from 'pinia'

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
      //TODO
    },
    addVehicle(vehicle) {
      this.vehicles.push(vehicle);
    },
    editVehicle(vehicle) {
      //TODO
    }
  },
})