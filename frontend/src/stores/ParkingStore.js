import { defineStore } from 'pinia'

export const useParkingsStore = defineStore('parkingsStore', {
  state: () => {
    return {
      parkings: [
        { id: 1, name: 'Estacionamiento 1' },
        { id: 2, name: 'Estacionamiento 2' },
        { id: 3, name: 'Estacionamiento 3' },
        { id: 4, name: 'Estacionamiento 4' },]
    }
  },
  actions: {
    removeParking(id) {
      //TODO
    },
    addParking(parking) {
      this.parkings.push(parking);
    },
    editParking(parking) {
      //TODO
    }
  },
})

