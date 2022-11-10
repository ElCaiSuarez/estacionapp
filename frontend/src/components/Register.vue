<script>
import userService from '../services/userService';

export default {
    data() {
        return {
            userForm: {
                name: "",
                email: "",
                password: ""
            },
            mensajeError: "",
            mostrar: false
        }
    },
    methods: {
        async registerUser() {
            this.mostrar = true;
            try {
                this.mensajeError = await userService.registerUser({ ...this.userForm })
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Registrate</h1>
        <form class="row-auto">
            <!-- <div class="col-auto">
                <label for="inputUserId" class="form-label">Id</label>
                <input type="number" class="form-control" v-model="userForm.id">
            </div> -->
            <div class="col-auto">
                <label for="inputUserName" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" v-model="userForm.name" required>
            </div>
            <div class="col-auto">
                <label for="inputEmail" class="form-label">Correo</label>
                <input type="email" class="form-control" v-model="userForm.email" required>
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="form-label">Contraseña</label>
                <input type="password" class="form-control" v-model="userForm.password" required><br />
            </div>
            <div class="col-auto">
                <button @click="registerUser()" class="btn btn-secondary">Registrar</button>
            </div>
            <div class="alert alert-danger" v-show="mostrar">
                {{ mensajeError }}
            </div>
        </form>
    </div>
</template>