<template>
    <div>
        <div>
            <h1>Seleccione un Barrio</h1><br />
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="location in locations" :key="location.id" v-on:click="getPakgings(location.id)">
                            <th scope="row">{{location.id}}</th>
                            <td>{{location.name}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <h2>Estacionamientos:</h2><br />
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Barrio</th>
                            <th scope="col">Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="parking in parkings" :key="parking.id">
                            <th scope="row">{{parking.id}}</th>
                            <td>{{parking.name}}</td>
                            <td>{{parking.locationId}}</td>
                            <td>{{parking.userId}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="alert alert-danger" v-show="mostrar">
                {{ mensajeError }}
            </div>
        </div>
    </div>
</template>

<script>
import locationService from '../services/locationService';
import parkingService from '../services/parkingService';

export default {
    data() {
        return {
            locations: [],
            parkings: [],
            locationId: 1,
            mensajeError: "",
            mostrar: false
        }
    },
    mounted:function(){
        console.log("Busqueda por Barrio");
        locationService.getLocations().then(res => {
            this.locations = res
            console.log(this.locations);
        });
    },
    methods: {
        async getPakgings(locationId) {
            try {
                console.log("Estacionamientos del Barrio: " + locationId);
                this.parkings = await parkingService.getParkings(locationId)
                console.log(this.parkings);
            } catch (e) {
                this.mensajeError = e;
            }

        }
    }
}
</script>