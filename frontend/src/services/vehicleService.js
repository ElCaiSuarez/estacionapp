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
            console.log(email);
            const res = await apiService.apiClient.get('/vehicles', { params: { email: email } });
            console.log(res.data);
            return res.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async postVehicle(vehicle) {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            await apiService.apiClient.post('/vehicles', vehicle);

        } catch (e) {
            throw "Error de conexion"
        }
    }
}