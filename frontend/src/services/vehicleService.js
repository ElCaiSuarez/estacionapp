import apiService from './apiService'

export default {
    /* async getVehicles() {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            const datos = await apiService.apiClient.get('/vehicles');
            return datos.data
        } catch (e) {
            throw "Error de conexion"
        }
    }, */
    async getVehicles(email) {
        try {
            //console.log(email);
            const res = await apiService.apiClient.get('/vehicles', { params: { email: email } });
            //console.log(res.data);
            return res.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async postVehicle(vehicle) {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
                const res = await apiService.apiClient.post('/vehicles', vehicle);
                console.log("El backend devolvio el siguiente mensaje: " + res.data);
                return res.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async deleteVehicle(vehicle) {//CON AUTENTICATION
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            let saved = await apiService.apiClient.delete('/vehicles', { params: { patent: vehicle.patent } });
            console.log("El backend devolvio el siguiente mensaje: " + saved.data);
            return saved.data;

        } catch (e) {
            throw "Error de conexion"
        }
    }
}