<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <table class="table">
          <thead>
            <tr>
              <th 
                v-for="(tit, index) in titulos"
                :key="index"
                class="bg-warning "
              >
                {{ tit }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in propUsuarios" :key="index" >
              <th class="fw-normal">{{ user.nombre }}</th>
              <th class="fw-normal">{{ user.email }}</th>
              <th class="fw-normal">{{ user.pass }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaUsuarios",
  data() {
    return {
      titulos: ["Nombre", "Email", "Contraseña"],
    };
  },
  props: {
    propUsuarios: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped>
</style>