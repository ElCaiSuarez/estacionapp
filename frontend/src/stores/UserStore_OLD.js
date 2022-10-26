import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      usersStore: {}, //BACKEND
      users: [//LOCAL FRONTEND
        { id: 1, name: 'Usuario 1' },
        { id: 2, name: 'Usuario 2' },
        { id: 3, name: 'Usuario 3' },
        { id: 4, name: 'Usuario 4' }],
    }
  },
  actions: {
    async getUsers() {
      const users = await axios.get('http://localhost:3001/api/users');
      this.usersStore = users.data;
      console.log("UsersStore.js " + this.usersStore);
    },
    removeUser(id) {
      //TODO PUT
    },
    addUser(user) {
      //TODO POST
      this.users.push(user);
    },
    editUser(user) {
      //TODO PUT
    }
  },
})