<script>
import userService from '../services/userService';

export default {
    data() {
        return {
            userForm: {
                id: 0,
                name: "",
                email: "",
                password: ""
            },
            mensajeError: ""
        }
    },
    methods: {
        async registerUser() {
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
        <h1>This is a register page</h1>
        <form class="row-auto">
            <div class="col-auto">
                <label for="inputUserId" class="form-label">Id</label>
                <input type="number" class="form-control" v-model="userForm.id">
            </div>
            <div class="col-auto">
                <label for="inputUserName" class="form-label">User Name</label>
                <input type="text" class="form-control" v-model="userForm.name">
            </div>
            <div class="col-auto">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="userForm.email" required>
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="userForm.password"><br />
            </div>
            <div class="col-auto">
                <button @click="registerUser()" class="btn btn-secondary">Registrarse</button>
                {{ mensajeError }}
            </div>
        </form>
    </div>
</template>