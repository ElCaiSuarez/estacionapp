<script>
import { storeToRefs } from 'pinia';
import { useUsersStore } from '../stores/UserStore.js'
export default {
  setup() {
    const store = useUsersStore();
    const { users } = storeToRefs(store);
    const { addUser } = store;
    const { removeUser } = store;
    const { editUser } = store;
    return { store, users, addUser, removeUser, editUser }
  },
  data() {
    return {
      /* users: [
        { id: 1, name: 'Usuario 1' },
        { id: 2, name: 'Usuario 2' },
        { id: 3, name: 'Usuario 3' },
        { id: 4, name: 'Usuario 4' },], */
      user: {},
      inputUser: { id: 0, name: "N/A" }
    }
  },
  methods: {
    addUser(user) {
      this.addUser(user);
    },
    removeUser(id) {
      this.removeUser(id);
    },
    editUser(user) {
      this.editUser(user);
    }
  }
}
</script>

<template>
  <main>
    <h1>Usuario CRUD</h1>
    <!-- {{ users }} -->
    <div>
      <h2>Alta</h2>
      <div>
        Id: <input type="text" v-model="inputUser.id" /><br/>
        Nombre: <input type="text" v-model="inputUser.name" /><br/>
      </div>
      <div>
        <button v-on:click="addUser(inputUser)">Agregar Usuario</button>
      </div>
    </div>
    <div>
      <h2>Baja o Modificacion</h2>
      <div>
        <li v-for="user in users">
          {{ user.id }} | {{ user.name }}
          <button v-on:click="editUser(user)">Editar Usuario</button>
          <button v-on:click="removeUser(user.id)">Borrar Usuario</button>
        </li>
      </div>
    </div>
  </main>
</template>

<style>

</style>