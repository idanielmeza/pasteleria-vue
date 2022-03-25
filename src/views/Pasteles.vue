<template>
    <Total/>
    <div class="row container mx-auto">
        <legend>Sabores</legend>
        <Card v-for="(toping,index) in $store.getters.getSabores" :key="index" :price="toping.preco" :title="toping.nombre" :src="toping.src" type='sabores'/>
        <router-link to="/toppings" class="btn btn-primary">Siguiente</router-link>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Total from '@/components/total.vue';
export default {
    name: 'PastelesView',
    components: {
        Card: Card,
        Total
    }
}

</script>
