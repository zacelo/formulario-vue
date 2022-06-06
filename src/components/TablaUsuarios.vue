<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <table class="table">
          <thead>
            <tr>
              <th 
                v-for="(tit, index) in $store.getters.titulosTabla"
                :key="index"
                class="bg-warning "
              >
                {{ tit }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in $store.getters.usuariosRegistrados" :key="index" >
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



