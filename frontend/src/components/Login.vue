<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div>
        <h1>This is a login page</h1>
        <form class="row-auto">
            <div class="col-auto">
                <label for="inputEmail" class="visually-hidden">Email</label>
                <input type="email" class="form-control" id="inputEmail" value="email@example.com">
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="visually-hidden">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Login</button>
            </div>
        </form>
        <button class="btn btn-secondary" type="submit">Registrarse</button>
    </div>
</template>