<template>
  <form class="container mt-5">
    
    <legend>Informacion de Contacto</legend>
    <div class="row">

        <div class="col-md-3 col-sm-12 mb-2">
            <input 
            v-model="nombre"
            @input="$store.dispatch('setUsuario', {llave:'nombre',valor: nombre})"
            name="nombre" type="text" class="form-control" placeholder="Nombre">
        </div>
        <div class="col-md-3 col-sm-12 mb-2">
            <input
            v-model="numero"
             @input="$store.dispatch('setUsuario', {llave:'numero',valor: numero})" name="numero" type="number" class="form-control" placeholder="Numero de telefono" >
        </div>
        <div class="col-md-3 col-sm-12 mb-2">
            <input
                v-model="correo"
             @input="$store.dispatch('setUsuario', {llave:'correo', valor: correo})" name="correo" type="email" class="form-control" placeholder="Email" >
        </div>
        <div class="col-md-3 col-sm-12 mb-2">
            <select
                v-model="tamano"
             @change="$store.dispatch('setUsuario', {llave:'tamano', valor: tamano})" class="form-control">
                <option selected disabled>Tamaño del pastel</option>
                <option value="Chicho">Chicho</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
            </select>
        </div>

        <legend>Fecha y Hora</legend>
        <div class="col-md-6 col-sm-12 mb-2">
            <input
            v-model="fecha"
             @change="$store.dispatch('setUsuario', {llave:'fecha', valor: fecha})" 
            type="date" class="form-control" >
        </div>
        <div class="col-md-6 col-sm-12 mb-2">
            <input 
            v-model="hora"
             @change="$store.dispatch('setUsuario', {llave:'hora', valor: hora})" 
            type="time" class="form-control">
        </div>


    </div>
    <div class="row mt-2">
        <legend>Resumen del pedido</legend>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Sabores: <span class="text-muted">{{$store.state.actSabo.join()}}</span></li>
            <li class="list-group-item">Adornos: <span class="text-muted">{{$store.state.actTop.join()}}</span></li>
            
            <li class="list-group-item">Total:  <span class="text-primary">${{$store.state.cuenta.reduce((a,b) => a+b , 0)}}</span></li>
        </ul>
    </div>
    
  </form>
    <div class="row mx-auto my-2">
            <router-link to="/toppings" class="btn btn-secondary col-4 mx-auto">Volver</router-link>
            <router-link to="/" @click="$store.dispatch('addPedido')" class="btn btn-primary col-4 mx-auto">Finalizar</router-link>
        </div>
</template>

<script>


export default {
    name: 'FormContacto',
}
</script>
