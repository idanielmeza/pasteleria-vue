<template>
  <div>
      <p>${{$store.state.cuenta.reduce((a,b) => a+b , 0)}}</p>
  </div>
  

</template>

<script>
export default {
    name: 'total-component'
}
</script>

<style scoped>
    div{
        display: flex;
        justify-content: end;
    }
    p{
        width: 5rem;
        height: auto;
        display: inline;
        color: #fff;
        background-color: rgb(53, 185, 48);
        position: absolute;
        border-radius: 5px;
        justify-content: end;
        align-items: end;
        text-align: center;
        margin: 10px;
    }

</style>