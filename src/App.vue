<template>
  <div id="app">

     <div class="container mt-4">
      <div class="row">
        <h2>Formulario de registro</h2>
       <FormularioContacto 
          @datosUsuario="agregarUsuario"
          />        
      </div>
    </div>   
    
    <div class="container mt-5">
      <div class="row">
        <h2>Tabla de Usuarios</h2>

        <TablaUsuarios
        :propUsuarios="usuarios"
        />
      </div>
    </div>


  
   


  </div>
</template>

<script>
import FormularioContacto from './components/FormularioContacto.vue'
import TablaUsuarios from './components/TablaUsuarios.vue'
export default {
  name: 'App',
  data(){
    return{
         usuarios:[]
    }
  },
  components: {
    FormularioContacto,
    TablaUsuarios
  },
  methods: {
    agregarUsuario(item){
      let usuario = {...item}
      this.usuarios.push(usuario)    
    }
  }
}
</script>

<style>

</style>
