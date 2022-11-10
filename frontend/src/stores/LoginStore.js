import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        return {
            usuarioStore: {},
            estaLogeado: false
        }
    },
    actions: {
        async login(usuarioInput) {
            try {
                //HAGO UN POST AL BACKEND VALIDANDO LAS CREDENCIALES
                const datos = await axios.post('http://localhost:3001/api/login', usuarioInput);
                this.usuarioStore.email = usuarioInput.email;
                this.estaLogeado = true;
                //GUARDO EL TOKEN EN LA LOCALSTORAGE DEL NAVEGADOR PARA FUTUROS USOS
                localStorage.setItem('usuario',
                    JSON.stringify({ email: usuarioInput.email, token: datos.data }))
            } catch (e) {
                console.log(e);
                this.usuarioStore = {};
                this.estaLogeado = false;
            }
        }
    }

})