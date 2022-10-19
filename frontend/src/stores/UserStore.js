import { defineStore } from 'pinia'

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
      //TODO
    },
    addUser(user) {
      this.users.push(user);
    },
    editUser(user) {
      //TODO
    }
  },
})