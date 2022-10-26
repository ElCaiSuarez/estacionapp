import apiService from './apiService'

export default {
    async getParkings() {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            const datos = await apiService.apiClient.get('/parkings');
            return datos.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async postParking(parking) {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            await apiService.apiClient.post('/parkings', parking);

        } catch (e) {
            throw "Error de conexion"
        }
    }
}