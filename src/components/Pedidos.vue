<template>
    <table class="table table-hover container mx-auto my-2">
    <thead>
        <tr>
            <td scope="col">Tamaño</td>
            <td scope="col">Sabores</td>
            <td scope="col">Toppings</td>
            <td scope="col">Fecha</td>
            <td scope="col">Hora</td>
            <td scope="col">Precio</td>
            <td scope="col">Cliente</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(pedido,index) in $store.getters.getPedidos" :key="index">
            <th scope="row">{{pedido.tamano}}</th>
            <th>
                <DropDown nombre='Sabores' :info="pedido.sabores"/>
            </th>
            <th>
                <DropDown nombre='Toppings' :info="pedido.topping"/>
            </th>
            <th>
                {{pedido.fecha}}
            </th>
            <th>
                {{pedido.hora}}
            </th>
            <th>
                ${{pedido.precio}}
            </th>
            <th>
                <Cliente :info="pedido.cliente"/>
            </th>
        </tr>
    </tbody>
</table>

    
</template>

<script>
import DropDown from '@/components/DropDown.vue';
import Cliente from '@/components/Cliente.vue';
export default {
    name: 'Pedidos-component',
    components: {
        DropDown,
        Cliente
    }
}
</script>

<style>
    @media (max-width: 960px) {
        table{
            display: block;
            width: 100%;
            overflow-x: auto;
        }
    }
</style>