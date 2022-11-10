<script>
import userService from '../services/userService';

export default {
    data() {
        return {
            user: {},
            mensajeError: "",
            mostrar: false,
            emailAux: ""
        }
    },
    mounted: function () {
        let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
        userService.getUsers(usuarioAux.email).then(res => {
            if(!res){
                this.$router.push('/')
            }
            this.user = res;
            this.emailAux = res.email;
        });
    },
    methods: {
        async updateUser(user) {
            this.mostrar = true;
            try {
                let userNuevo = {
                    emailAnterior: this.emailAux,
                    name: user.name,
                    email: user.email,
                    password: user.password
                }
                this.mensajeError = await userService.updateUser(userNuevo)
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Actualizar Usuario</h1>
        <form class="row-auto">
            <div class="col-auto">
                <label for="inputUserName" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" v-model="user.name" required>
            </div>
            <div class="col-auto">
                <label for="inputEmail" class="form-label">Correo</label>
                <input type="email" class="form-control" v-model="user.email" required>
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="form-label">Contraseña</label>
                <input type="password" class="form-control" v-model="user.password" required><br />
            </div>
            <div class="col-auto">
                <button @click="updateUser(user)" class="btn btn-primary">Actualizar</button>
            </div>
            <div class="alert alert-danger" v-show="mostrar">
                {{ mensajeError }}
            </div>
        </form>
    </div>
</template>