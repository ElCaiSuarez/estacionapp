import { defineStore } from 'pinia'
//import axios from 'axios'

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      users: [
        { id: 1, name: 'Usuario 1' },
        { id: 2, name: 'Usuario 2' },
        { id: 3, name: 'Usuario 3' },
        { id: 4, name: 'Usuario 4' },]
    }
  },
  actions: {
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