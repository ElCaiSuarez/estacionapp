<template>
    <div>
        <h1>This is a user page</h1><br />
        <div>
            <button @click="getUsers()" class="btn btn-primary mb-3">Traer usuarios del
                backend</button><br />
            <select class="form-select" size="3" v-model="selected">
                <option v-for="user in users" :key="user.id">{{ user.name }}</option>
            </select><br />
            {{ mensajeErrorGet }}
            id <input type="number" v-model="userForm.id" />
            Nombre <input v-model="userForm.name" /><br /><br />
            Email <input type="email" v-model="userForm.email" />
            Password <input type="password" v-model="userForm.password" /><br /><br />
            <button @click="postUser()" class="btn btn-primary mb-3">Agregar usuario</button><br />
            {{ mensajeErrorPost }}
        </div>
    </div>
</template>

<script>
import userService from '../services/userService';


export default {
    
    data() {
        return {
            users: [],
            userForm: {
                id: 0,
                name: "",
                email: "",
                password: ""
            },
            mensajeErrorGet: "",
            mensajeErrorPost: ""
        }
    },
    methods: {
        async getUsers() {
            try {
                this.users = await userService.getUsers()
            } catch (e) {
                this.mensajeErrorGet = e;
            }

        },
        async postUser() {
            try {
                this.mensajeErrorPost = await userService.postUser({ ...this.userForm })
                this.users = await userService.getUsers()
            } catch (e) {
                this.mensajeErrorPost = e;
            }
        }
    }
}
</script>