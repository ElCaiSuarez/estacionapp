<template>
    <div>
        <div>
            <h2>Mis Estacionamientos</h2><br />
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
            <!-- <button @click="getParkings()" class="btn btn-primary mb-3">Traer estacionamientos del
                backend</button><br />
            <select class="form-select" size="3" v-model="selected">
                <option v-for="parking in parkings" :key="parking.id">{{ parking.name }}</option>
            </select><br />
            {{ mensajeError }}
            id <input type="number" v-model="parkingForm.id"/>
            Nombre <input v-model="parkingForm.name" /><br/><br/>
            <button @click="postParking()" class="btn btn-primary mb-3">Agregar estacionamiento</button><br />
            {{ mensajeError }} -->
        </div>
    </div>
</template>

<script>
import parkingService from '../services/parkingService';

export default {
    data() {
        return {
            parkings: [],
            parkingForm: { id:0, name: "" },
            parking: {},
            mensajeError: "",
            mostrar: false
        }
    },
    mounted:function(){
        console.log("Busqueda por Usuario");
        let usuarioAux = JSON.parse(localStorage.getItem('usuario'));
        console.log(usuarioAux.email);
        parkingService.getParkingsEmail(usuarioAux.email).then(res => {
            this.parkings = res
            console.log(this.parkings);
        });
    },
    methods: {
        /* async updatePakgings(parking) {
            try {
                console.log("Actualizado: " + parking);
                this.parking = await parkingService.updateParkings(parking)
            } catch (e) {
                this.mensajeError = e;
            }
        }, */
        async postParking() {
            try {
                await parkingService.postParking({ ...this.parkingForm })
                this.parkings.push({ ...this.parkingForm })
            } catch (e) {
                this.mensajeError = e;
            }
        }
    }
}
</script>