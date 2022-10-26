<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div>
        <h1>This is a home page</h1><br />
        <div class="card">
            <div class="card-header">
                Busca estacionamientos
            </div>
            <div class="card-body">
                <h5 class="card-title">Busca estacionamientos por barrio</h5>
                <p class="card-text">para conocer los estacionamientos que tener cerca</p>
                <a href="/register" class="btn btn-secondary">Registrese</a>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Administra tus estacionamientos
            </div>
            <div class="card-body">
                <h5 class="card-title">Registra tus estacionamientos</h5>
                <p class="card-text">para empezar a ofrecer los lugares disponibles</p>
                <a href="/login" class="btn btn-primary">Login</a>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                Administra tus vehiculos
            </div>
            <div class="card-body">
                <h5 class="card-title">Registra tus vehiculos</h5>
                <p class="card-text">para encontrar donde poder estacionarlos</p>
                <a href="/login" class="btn btn-primary">Login</a>
            </div>
        </div>
    </div>
</template>