import { defineStore } from 'pinia'
import axios from 'axios'

export const useLocationsStore = defineStore('locationsStore', {
  state: () => {
    return {
      locationsStore: {}, //BACKEND
      locations: [//LOCAL FRONTEND, YA NO APLICA
        { id: 1, name: 'Barrio 1' },
        { id: 2, name: 'Barrio 2' },
        { id: 3, name: 'Barrio 3' },
        { id: 4, name: 'Barrio 4' }]
    }
  },
  actions: {
    async getLocations() {
      const locations = await axios.get('http://localhost:3001/api/locations');
      this.locationsStore = locations.data;
      console.log("LocationsStore.js" + locations.data);
    }
  },
})

