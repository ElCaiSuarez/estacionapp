<script>
import { useLoginStore } from '../stores/LoginStore.js'
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const store = useLoginStore();
        const { login } = store;
        const { usuarioStore, estaLogeado } = storeToRefs(store);
        return { store, login, usuarioStore, estaLogeado }
    },
    data() {
        return {
            usuarioForm: { email: "", password: "" },
            mensajeError: "",
            mostrar: false
        }
    },
    methods: {
        async login() {
            await this.login(this.usuarioForm);
            if (this.estaLogeado) {
                console.log('Logeado ' + this.usuarioStore.email);
                this.$router.push('/search')
            } else {
                this.mostrar = true;
                console.log('No esta logeado');
                this.mensajeError = "Error en las credenciales"
            }
        }
    }
}
</script>


<template>
    <div>
        <h1>Ingresa</h1>
        <form @submit.prevent="login" class="row-auto">
            <div class="col-auto">
                <label for="inputEmail" class="form-label">Correo</label>
                <input type="email" class="form-control" v-model="usuarioForm.email" required/>
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="form-label">Contraseña</label>
                <input type="password" class="form-control" v-model="usuarioForm.password" required/><br/>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Ingresar</button>
            </div>
            <div class="alert alert-danger" v-show="mostrar">
                {{ mensajeError }}
            </div>
        </form>
        <a href="/register" class="btn btn-secondary">Registrate</a>
    </div>
</template>
