import apiService from './apiService'

export default {
    //DEBERIA TRAER SOLO EL USUARIO LOGEADO, Y LUEGO CON PUT MODIFICAR PASSWORD x ej
    async getUsers() {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            const datos = await apiService.apiClient.get('/users');
            return datos.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    //DEBERIA USARSE PARA LA REGISTRACION
    async postUser(user) {
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            await apiService.apiClient.post('/users', user);

        } catch (e) {
            throw "Error de conexion"
        }
    },
    async registerUser(user) {
        try {
            await apiService.apiClient.post('/users', user);

        } catch (e) {
            throw "Error de conexion"
        }
    }

}