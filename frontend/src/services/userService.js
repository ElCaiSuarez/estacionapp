import apiService from './apiService'

export default {
    //DEBERIA TRAER SOLO EL USUARIO LOGEADO, Y LUEGO CON PUT MODIFICAR PASSWORD x ej
    /*async getUsers() {//CON AUTENTICATION
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            const datos = await apiService.apiClient.get('/users');
            return datos.data
        } catch (e) {
            throw "Error de conexion"
        }
    },*/
    async getUsers(email) {
        try {
            //console.log(email);
            const res = await apiService.apiClient.get('/users', { params: { email: email } });
            //console.log(res.data);
            return res.data
        } catch (e) {
            throw "Error de conexion"
        }
    },
    async postUser(user) {//CON AUTENTICATION
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            let saved = await apiService.apiClient.post('/users', user);
            console.log("El backend devolvio el siguiente mensaje: " + saved.data);
            return saved.data;

        } catch (e) {
            throw "Error de conexion"
        }
    },
    async updateUser(user) {//CON AUTENTICATION
        try {
            apiService.apiClient.defaults.headers['authorization'] =
                JSON.parse(localStorage.getItem('usuario')).token
            let saved = await apiService.apiClient.post('/users/update', user);
            console.log("El backend devolvio el siguiente mensaje: " + saved.data);
            return saved.data;

        } catch (e) {
            throw "Error de conexion"
        }
    },
    async registerUser(user) {//SIN AUTENTICATION
        try {
            let saved = await apiService.apiClient.post('/users', user);
            console.log("El backend devolvio el siguiente mensaje: " + saved.data);
            return saved.data;
        } catch (e) {
            throw "Error de conexion"
        }
    }

}