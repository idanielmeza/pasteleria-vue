<template>
    <Total/>
    <div class="row container mx-auto">
        <legend>Toppings</legend>
        <Card v-for="(toping,index) in $store.getters.getTopings" :key="index" :price="toping.preco" :title="toping.nombre" :src="toping.src" type='topings'/>
        <div class="row mx-auto my-2">
            <router-link to="/" class="btn btn-secondary col-4 mx-auto">Volver</router-link>
            <router-link to="/resumen" class="btn btn-primary col-4 mx-auto">Siguiente</router-link>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Total from '@/components/total.vue';

export default {
    name: 'TopingsView',
    components: {
        Card: Card,
        Total
    }
}

</script>
