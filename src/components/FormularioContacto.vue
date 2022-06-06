<template>
  <div class="container mt-4"> 
      
    <div class="row">
      <div class="col-5">
        <form @submit.prevent="validar" >
          <div class="mb-3">
            <label for="nombre" class="form-label d-block" >Nombre</label>
            <input
              type="text"
              placeholder="Nombre...."
              v-model="$store.state.formulario.nombre"
              class="form-control w-75 d-inline "             
              id="nombre"
              aria-describedby="emailHelp"
              autocomplete="off"                 
            />                
            <p class=" text-danger " v-if="enviado && !$v.formulario.nombre.required ">{{campoVacio}}</p>
            <p class=" text-danger" v-if="enviado && !$v.formulario.nombre.minLength ">Ingrese un nombre de al menos 3 caracteres</p>
            <p class=" text-success d-inline" v-if="$v.formulario.nombre.minLength && $v.formulario.nombre.required "><i class="bi bi-check-circle-fill fs-4 ms-2"></i></p>          
          </div>

          <div class="mb-3">
            <label for="email" class="form-label d-block" >Email</label>
            <input
              type="text"
              placeholder="Email...."
              v-model="$store.state.formulario.email"
              class="form-control w-75 d-inline"             
              id="email"
              aria-describedby="emailHelp"
              autocomplete="off"              
            />
            <p class=" text-danger" v-if="enviado && !$v.formulario.email.required ">{{campoVacio}}</p>
            <p class=" text-danger" v-if="enviado && !$v.formulario.email.email ">Ingrese un email valido</p>
            <p class=" text-success d-inline" v-if="$v.formulario.email.required && $v.formulario.email.email "><i class="bi bi-check-circle-fill fs-4 ms-2"></i></p>                
          </div>

           <div class="mb-3">
            <label for="pass" class="form-label d-block" >Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña....."
              v-model="$store.state.formulario.pass"
              class="form-control w-75 d-inline"             
              id="pass"
              aria-describedby="emailHelp"
              autocomplete="off"              
            />
            <p class=" text-danger" v-if="enviado && !$v.formulario.pass.required ">{{campoVacio}}</p>
            <p class=" text-danger" v-if="enviado && !$v.formulario.pass.minLength ">Contraseña inválida - Debe tener al menos 8 caracteres</p>
            <p class=" text-success d-inline" v-if="$v.formulario.pass.required && $v.formulario.pass.minLength "><i class="bi bi-check-circle-fill fs-4 ms-2"></i></p>                
          </div>

          <div class="mb-3">
            <label for="confirmPass" class="form-label d-block" >Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="Confirmar Contraseña....."
              v-model="$store.state.formulario.confirmarPass"
              class="form-control w-75 d-inline"             
              id="confirmPass"
              aria-describedby="emailHelp"
              autocomplete="off"              
            />
           
            <p class=" text-danger" v-if="enviado && !$v.formulario.confirmarPass.pass ">Las contraseñas deben ser iguales</p>
            <p class=" text-success d-inline" v-if="$v.formulario.confirmarPass.required && $v.formulario.confirmarPass.pass "><i class="bi bi-check-circle-fill fs-4 ms-2"></i></p>                
          </div>
          
          <button type="submit" class="btn btn-primary mt-3">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "FormularioContacto",
  data() {
    return {    
      enviado:false,
      campoVacio: '',
      formulario: this.$store.state.formulario
    };
  },
  methods: {
    validar(){
      this.enviado=true;       
      if(this.$v.$invalid){
        this.campoVacio='Este Campo esta vacío'
        return false;
      }      
      this.$store.dispatch('formulario')    
      this.$store.dispatch('resetearFormulario')
    }
  },
  validations: {
    formulario: {
      nombre:{
        required,
        minLength: minLength(3),
      },
      email :{
        required,
        email,
      },
      pass:{
        required,
        minLength: minLength(8),
      },
      confirmarPass:{
        required,
        pass: sameAs("pass")
      }
     
    },    
  },
};
</script>


