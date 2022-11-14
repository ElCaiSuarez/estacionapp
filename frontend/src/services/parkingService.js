import apiService from './apiService'

export default {
    async getParkingsEmail(email) {
        try {
            console.log(email);
            const res = await apiService.apiClient.get('/parkings', { params: { email: email } });
            console.log(res.data);
            return res.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async getParkings(locationId) {
        try {
            console.log(locationId);
            const res = await apiService.apiClient.get('/parkings/location', { params: { locationId: locationId } });
            console.log(res.data);
            return res.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async postParking(parking) {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            const res = await apiService.apiClient.post('/parkings', parking);
            console.log("El backend devolvio el siguiente mensaje: " + res.data);
            return res.data

        } catch (e) {
            throw "Error de conexion"
        }
    },
    async deleteParking(parking) {//CON AUTENTICATION
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            let saved = await apiService.apiClient.delete('/parkings', { params: { id: parking.id } });
            console.log("El backend devolvio el siguiente mensaje: " + saved.data);
            return saved.data;

        } catch (e) {
            throw "Error de conexion"
        }
    },
    async updateParking(parking) {//CON AUTENTICATION
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            let saved = await apiService.apiClient.patch('/parkings', parking);
            console.log("El backend devolvio el siguiente mensaje: " + saved.data);
            return saved.data;

        } catch (e) {
            throw "Error de conexion"
        }
    }

}