<template>
  <ul>
      <li class="dropdown">
        <a class="color-black" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">{{this.info.length}}</a>
        <div class="dropdown-menu " data-popper-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px,42px,0px);">
            <!-- <a class="dropdown-item" href="#">Prueba</a> -->
            <a v-for="(item,index) in this.info" :key='index' class="dropdown-item" href="#">{{item}}</a>
            <!-- <a class="dropdown-item" href="#">Prueba</a> -->
        </div>
      </li>
  </ul>
</template>

<script>
export default {
    name: 'dropdown-component',
    props: {
      nombre:String,
      info: Array
    }
}
</script>

<style scoped>
  ul{
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li{
    background: rgb(255, 255, 255);
    display: inline;
    padding: 0;
    border-radius: 10px;
  }

  .color-black{
    color: rgb(139, 139, 139);
    padding: .5rem 1rem .5rem 1rem;
  }

  .color-black:hover{
    color: white;
  }

  li:hover{
    background: rgb(243, 154, 150);
  }

  a{
    text-decoration: none;
  }

  @media (max-width: 768px) {
    div{
      position: absolute;
    }
  }

</style>