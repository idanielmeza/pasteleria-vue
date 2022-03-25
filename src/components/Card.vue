<template>
    <div class="elemento my-2">
      <img :src="require(`@/assets/${src}.jpg`)" alt="{{title}}">
      <div class="is-flex mx-2 info">
        <h3>{{title}}</h3>
        <p class="text-primary text-end">${{price}}</p>
        <button @click="$store.dispatch(`${type == 'sabores' ? 'setSabores' : 'setToppings'}`, {title,price})">Agregar al carrito</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'card-component',
    props:{
        src: String,
        title: String,
        price: Number,
        id: Number,
        type: String
    }
}
</script>

<style scoped>
  .elemento{
    display: flex;
    margin: 1rem auto 1rem auto;
    background-color: rgba(209, 209, 209, 0.096);
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    padding: 1rem;
    height: 10rem;
  }

  .elemento img{
    max-width: 15rem;
    max-height: 10rem;
    border-radius: 5px;
  }

  .elemento button{
    background-color: #ffc107;
    border-radius: 0.5rem;
    border: none;
    color: white;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    width: 10rem;
    transition: color .15s ease-in-out,box-shadow .15s ease-in-out,border-color .15s ease-in-out,border-color .15s ease-in-out;
  }

  .elemento button:hover{
    background-color: #ffd700;
  }

  .elemento button:active{
    border-color: #ffd700;
    /* border: 3px solid; */
    box-shadow: 0px 0px 8px #ebc659;  
      
  }

   .is-flex{
    display: flex;
    flex-direction: column;
    align-items: end;
  }


  @media (max-width: 768px) {
    .elemento img{
      max-width: 8rem;
    }

    .elemento button{
      font-size: 0.8rem;
      display: block;
      margin-left: auto;
    }

    .elemento h3{
      text-align: right;
    }
  }
    
 
</style>
