import { defineStore } from 'pinia'
//import axios from 'axios'

export const useParkingsStore = defineStore('locationsStore', {
  state: () => {
    return {
      locations: [
        { id: 1, name: 'Barrio 1' },
        { id: 2, name: 'Barrio 2' },
        { id: 3, name: 'Barrio 3' },
        { id: 4, name: 'Barrio 4' }],
      locationsStore: {},
    }

  },
  actions: {
    async getLocations() {
      const locations = await axios.get('http://localhost:3001/api/locations');
      this.locationsStore = locations;
    }
  },
})

