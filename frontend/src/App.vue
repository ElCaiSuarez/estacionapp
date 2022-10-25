<script>
import { RouterLink, RouterView } from 'vue-router'
import { useLoginStore } from '../src/stores/LoginStore.js'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    const { estaLogeado } = storeToRefs(store);
    return { store, estaLogeado, logout }
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
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">EstacionApp</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" v-if="estaLogeado" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {{store.usuarioStore.email}}
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item"><RouterLink class="dropdown-item" v-if="estaLogeado" to="/search"> Buscar estacionamiento </RouterLink></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li class="nav-item"><RouterLink class="dropdown-item" v-if="estaLogeado" to="/users"> CRUD-Users </RouterLink></li>
                  <li class="nav-item"><RouterLink class="dropdown-item" v-if="estaLogeado" to="/vehicles"> CRUD-Vehicles </RouterLink></li>
                  <li class="nav-item"><RouterLink class="dropdown-item" v-if="estaLogeado" to="/parkings"> CRUD-Parkings </RouterLink></li>
                </ul>
              </li>
              <li class="nav-item"><RouterLink class="nav-link" v-if="!estaLogeado" to="/about">About</RouterLink></li>
              <li class="nav-item"><RouterLink class="nav-link" v-if="!estaLogeado" to="/register">Register</RouterLink></li>
              <li class="nav-item"><RouterLink class="nav-link" v-if="!estaLogeado" to="/login">Login</RouterLink></li>
              <li class="nav-item"><button class="btn nav-link" @click="logoutForm()" v-if="estaLogeado">Logout</button></li>
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
