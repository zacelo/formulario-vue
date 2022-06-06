import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        formulario: {
            nombre: "",
            email: '',
            pass: '',
            confirmarPass: ''
        },
        titulos: ["Nombre", "Email", "Contraseña"],
        usuarios: []
    },

    getters: {
        saludo(state) {
            return state.mensaje
        },
        usuariosRegistrados(state) {
            return state.usuarios
        },
        titulosTabla(state){
            return state.titulos
        }
    },

    mutations: {
        form: (state) => {          
            let user = {...state.formulario}
            state.usuarios.push(user)                        
        },
        resetearFormulario:(state)=>{
             state.formulario.nombre=''
             state.formulario.email=''
             state.formulario.pass=''
             state.formulario.confirmarPass=''
        }
    },

    actions: {
        formulario: (context) => {
            context.commit('form')
        },
        resetearFormulario: (context) => {
            context.commit('resetearFormulario')
        },
    },

    modules: {
        
    }

})