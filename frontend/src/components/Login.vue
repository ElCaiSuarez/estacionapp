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
            mensajeError: ""
        }
    },
    methods: {
        async login() {
            await this.login(this.usuarioForm);
            if (this.estaLogeado) {
                console.log('Logeado ' + this.usuarioStore.email);
                this.$router.push('/search')
            } else {
                console.log('No esta logeado');
                this.mensajeError = "Error en las credenciales"
            }
        }
    }
}
</script>


<template>
    <div>
        <h1>This is a login page</h1>
        <form @submit.prevent="login" class="row-auto">
            <div class="col-auto">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="usuarioForm.email" required/>
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="usuarioForm.password" required/><br/>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Login</button>
                {{mensajeError}}
            </div>
        </form>
        <button class="btn btn-secondary" type="submit">Registrarse</button>
    </div>
</template>
