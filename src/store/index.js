import { createStore } from 'vuex'

export default new createStore({
  state:{
    topingsState: [
      {
          id: 1,
          nombre: 'Chispas de chocolate',
          preco: 75,
          src: 'chispas'
      },
      {
          id: 2,
          nombre: 'Ferrero Rocher',
          preco: 100,
          src: 'ferrero'
      },
      {
          id: 3,
          nombre: 'M&Ms',
          preco: 125,
          src: 'm&ms'
      }
    ],
    sabores: [
      {
        id: 1,
        nombre: 'Pastel de chocolate',
        preco: 420,
        src: 'chocolate'
      },
      {
        id: 2,
        nombre: 'Pastel de Tres Leches',
        preco: 480,
        src: 'vainilla'
      },
      
      {
        id: 3,
        nombre: 'Pastel de Zanahoria',
        preco: 500,
        src: 'zanahoria'
      }
    ],
    pedidos:[
      {
        id: 1,
        tamano: 'Mediano',
        sabores: ['Chocolate','Tres Leches'],
        topping: ['Chispas de chocolate','Ferrecho','M&ms'],
        precio: 720,
        fecha: '20/03/2022',
        hora: '10:30',
        cliente:{
          nombre: 'Daniel',
          correo: 'prueba@prueba.es',
          numero: 7821234558
        }
      },
      {
        id: 2,
        tamano: 'Grande',
        sabores: ['Chocolate'],
        topping: ['Chispas de chocolate','M&ms'],
        precio: 900,
        fecha: '20/03/2022',
        hora: '10:30',
        cliente:{
          nombre: 'Matias',
          correo: 'mati@prueba.es',
          numero: 7821234558
        }
      },
      {
        id: 3,
        tamano: 'Grande',
        sabores: ['Chocolate'],
        topping: ['Chispas de chocolate','M&ms'],
        precio: 900,
        fecha: '20/03/2022',
        hora: '10:30',
        cliente:{
          nombre: 'Oscar',
          correo: 'mati@prueba.es',
          numero: 7821234558
        }
      },
      {
        id: 4,
        tamano: 'Grande',
        sabores: ['Chocolate'],
        topping: ['Chispas de chocolate','M&ms'],
        precio: 900,
        fecha: '20/03/2022',
        hora: '10:30',
        cliente:{
          nombre: 'Eduardo',
          correo: 'mati@prueba.es',
          numero: 7821234558
        }
      },
      {
        id: 5,
        tamano: 'Grande',
        sabores: ['Chocolate'],
        topping: ['Chispas de chocolate','M&ms'],
        precio: 900,
        fecha: '20/03/2022',
        hora: '10:30',
        cliente:{
          nombre: 'Enrique',
          correo: 'mati@prueba.es',
          numero: 7821234558
        }
      }
    ],
    actTop:[],
    actSabo:[],
    cliente:{
      nombre: ''
    },
    cuenta:[]
  },
  mutations:{

    setToppings(state,topping){
      state.actTop = [topping, ...state.actTop];
    },
    setSabores(state,topping){
      state.actSabo = [topping, ...state.actSabo];
    },
    setCuenta(state,price){
      // console.log(price);
      state.cuenta = [...state.cuenta, price];
    },
    setUsuario(state,{llave,valor}){
      state.usuario = {...state.usuario, [llave]: valor}
    },
    addPedido(state){
      const nPedido = {
        id: crypto.randomUUID(),
        sabores: state.actSabo,
        topping: state.actTop,
        tamano: state.usuario.tamano,
        precio: state.cuenta.reduce((a,b) => a+b , 0),
        hora: state.usuario.hora,
        fecha: state.usuario.fecha,
        cliente: state.usuario
      }

      state.pedidos= [nPedido, ...state.pedidos];
      state.actSabo = [];
      state.actTop = [];
      state.cuenta = [];
      state.usuario = {};

    }
  },
  actions:{
    setActual(context,actual){
      context.commit('setActual',actual);
    },
    setToppings(context,info){
      const {price, title} = info;
      context.commit('setToppings', title);
      context.commit('setCuenta', price);
    },
    setSabores(context,info){
      const {price, title} = info;
      context.commit('setSabores', title);
      context.commit('setCuenta', price);
    },
    setUsuario(context,info){
      context.commit('setUsuario',info)
    },


    addPedido(context){
      // console.log(context.state.usuario);
      context.commit('addPedido');
      alert('Pedido Realizado Correctamente.')
    }
  },
  getters:{
    getActual(state){
      return state.actual;
    },
    getTopings(state){
      return state.topingsState;
    },
    getSabores(state){
      return state.sabores;
    },
    getPedidos(state){
      return state.pedidos;
    },
    getCuenta(state){
      return state.cuenta;
    }
  }
})
