<script>
import { RouterLink, RouterView } from 'vue-router'
import { useLoginStore } from '../src/stores/LoginStore.js'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    const { usuario, estaLogeado } = storeToRefs(store);
    return { store, usuario, estaLogeado, logout }
  },
  data() {
    return {

    }
  },
  methods: {
    logoutForm() {
      this.logout();
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink v-if="!estaLogeado" to="/user"> CRUD-Users </RouterLink> |
        <RouterLink v-if="estaLogeado" to="/vehicle"> CRUD-Vehicles </RouterLink> |
        <RouterLink v-if="estaLogeado" to="/parking"> CRUD-Parkings </RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <!-- <RouterLink v-if="estaLogeado" to="/sistema">Sistema</RouterLink> | -->
        <RouterLink v-if="!estaLogeado" to="/login">Login</RouterLink> |
        <button @click="logoutForm()" v-if="estaLogeado">Logout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
