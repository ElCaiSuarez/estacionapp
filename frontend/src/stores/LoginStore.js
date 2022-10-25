//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        return {
            //usuarioStore: {},
            estaLogeado: false
        }
    },
    actions: {
        async login(usuario) {
            try {
                //HAGO UN POST AL BACKEND
                const data = await axios.post('http://localhost:3001/api/login', usuario);
                //this.usuarioStore.email = usuario.email;
                this.estaLogeado = true;
            } catch (e) {
                console.log(e);
                this.estaLogeado = false;
            }
        
    },
        logout() {
            this.estaLogeado = false
        }
    }

})