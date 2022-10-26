import { defineStore } from 'pinia'
import axios from 'axios'

export const useParkingsStore = defineStore('parkingsStore', {
  state: () => {
    return {
      parkingsStore: {}, //BACKEND
      parkings: [//LOCAL FRONTEND
        { id: 1, name: 'Estacionamiento 1' },
        { id: 2, name: 'Estacionamiento 2' },
        { id: 3, name: 'Estacionamiento 3' },
        { id: 4, name: 'Estacionamiento 4' }],
    }
  },
  actions: {
    async getParkings() {
      const parkings = await axios.get('http://localhost:3001/api/parkings');
      this.parkingsStore = parkings.data;
      console.log("ParkingsStore.js " + this.parkingsStore);
    },
    removeParking(id) {
      //TODO PUT
    },
    addParking(parking) {
      //TODO POST
      this.parkings.push(parking);
    },
    editParking(parking) {
      //TODO PUT
    }
  },
})

