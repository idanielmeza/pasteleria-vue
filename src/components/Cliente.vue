<template>
  <ul>
      <li class="dropdown">
        <a class="color-black" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">{{info.nombre}}</a>
        <div class="dropdown-menu " data-popper-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px,42px,0px);">
            <a class="dropdown-item" href="tel:{{info.numero}}">
                Telefono : {{info.numero}}
            </a>
            <a class="dropdown-item" href="mailto:{{info.correo}}">
                Email : {{info.correo}}
            </a>
        </div>
      </li>
  </ul>
</template>

<script>
export default {
    name: 'cliente-component',
    props: {
      info: Object
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


</style>