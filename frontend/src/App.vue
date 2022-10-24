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

<!-- APP.VUE VIEJO CON BACKEND -->
<!-- <template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink v-if="!estaLogeado" to="/user"> CRUD-Users </RouterLink> |
        <RouterLink v-if="estaLogeado" to="/vehicle"> CRUD-Vehicles </RouterLink> |
        <RouterLink v-if="estaLogeado" to="/parking"> CRUD-Parkings </RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink v-if="!estaLogeado" to="/login">Login</RouterLink> |
        <button @click="logoutForm()" v-if="estaLogeado">Logout</button>
      </nav>
    </div>
  </header>
  <RouterView />
</template> -->

<!-- APP.VUE NUEVO CON BOOSTRAP -->
<template> 
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">EstacionApp</a>
          <!-- <RouterLink to="/">Home</RouterLink> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
                <!-- <RouterLink to="/about">About</RouterLink> -->
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Mi Cuenta
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/search">Buscar Estacionamiento</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" v-if="estaLogeado" href="/vehicles">Mis Vehiculos</a></li>
                  <!-- <RouterLink v-if="estaLogeado" to="/vehicle"> CRUD-Vehicles </RouterLink> -->
                  <li><a class="dropdown-item" v-if="estaLogeado" href="/parkings">Mis Estacionamientos</a></li>
                  <!-- <RouterLink v-if="estaLogeado" to="/parking"> CRUD-Parkings </RouterLink> -->
                  <li><a class="dropdown-item" v-if="estaLogeado" href="/users">Mi Usuario</a></li>
                  <!-- <RouterLink v-if="estaLogeado" to="/user"> CRUD-Users </RouterLink> -->
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-if="!estaLogeado" href="/register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-if="!estaLogeado" href="/login">Login</a>
                <button class="btn btn-secondary" @click="logoutForm()" v-if="estaLogeado">Logout</button>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>


<style>

</style>
