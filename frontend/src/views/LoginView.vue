<template>
    <main>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div>
                Email: <input type="email" v-model="usuarioForm.email" required/><br/>
                Password: <input type="password" v-model="usuarioForm.password" required/><br/>
            </div>
            <div>
                <!-- <button v-on:click="login()">Login</button> -->
                <button type="submit">Login</button><br/>
                {{mensajeError}}
            </div>
        </form>
    </main>
</template>

<script>
import {useLoginStore} from '../stores/LoginStore.js'
import {storeToRefs} from 'pinia'
export default {
    setup(){
        const store = useLoginStore();
        const {login} = store;
        const {usuarioStore, estaLogeado} = storeToRefs(store);
        return {store, login, usuarioStore, estaLogeado}
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
            if(this.estaLogeado){
                console.log('Logeado ' + this.usuarioStore.email);
                this.$router.push('/')
            }else{
                console.log('No esta logeado');
                this.mensajeError = "Error en las credenciales"
            }
        }
    }
}
</script>