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
            await apiService.apiClient.post('/parkings', parking);

        } catch (e) {
            throw "Error de conexion"
        }
    },

}