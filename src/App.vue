<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="">
      <router-link class="navbar-brand" to="/">
        <img src="https://images.vexels.com/media/users/3/230802/isolated/preview/524a119413582b1cc63e6de592c65af8-dibujos-animados-de-pastel-de-terciopelo-rojo.png" alt="" width="30" height="24">
        Pasteleria
      </router-link>
      <router-link class="navbar-brand" to="/pedidos">Pedidos</router-link>
    </div>
  </nav>
  <router-view/>
  
  <FooterVue/>
</template>

<script>
import FooterVue from '@/components/Footer.vue';

  export default{
    name: 'app',
    components:{
      FooterVue
    }
  }

</script>

<style>

</style>
