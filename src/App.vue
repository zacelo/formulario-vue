<template>
  <div id="app">
     
     <div class="container mt-4">
       
      <div class="row">
        <h2>Formulario de registro con Vuex</h2>
       <FormularioContacto/>        
      </div>
    </div>   
    
    <div class="container mt-5">
      <div class="row">
        <h2>Tabla de Usuarios</h2>
        <TablaUsuarios/>
      </div>
    </div>

  </div>
</template>

<script>
import FormularioContacto from './components/FormularioContacto.vue'
import TablaUsuarios from './components/TablaUsuarios.vue'

export default {
  name: 'App',  
  components: {
    FormularioContacto,
    TablaUsuarios
  }, 
}
</script>


