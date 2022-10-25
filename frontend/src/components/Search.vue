<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div>
        <h1>This is a search page</h1><br />
        <!-- <h4>Busque un estacionamiento:</h4> -->
        <!-- <select class="form-select" aria-label="Default select example">
            <option selected>Seleccione un Barrio</option>
            <option value="1">Villa Devoto</option>
            <option value="2">Villa del Parque</option>
            <option value="3">Montecastro</option>
        </select> -->
        <div class="form-floating">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Seleccione un Barrio</option>
                <option value="1">Villa Devoto</option>
                <option value="2">Villa del Parque</option>
                <option value="3">Montecastro</option>
            </select>
            <label for="floatingSelect">Buscar un Estacionamiento</label><br/>
            <button type="submit" class="btn btn-primary mb-3">Buscar</button>
        </div>
    </div>
</template>