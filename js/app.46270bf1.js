(function(){var e={3339:function(e,t,r){"use strict";var o=r(9242),n=r(3396);const a={class:"navbar navbar-expand-lg navbar-dark bg-secondary"},i={class:""},s=(0,n._)("img",{src:"https://images.vexels.com/media/users/3/230802/isolated/preview/524a119413582b1cc63e6de592c65af8-dibujos-animados-de-pastel-de-terciopelo-rojo.png",alt:"",width:"30",height:"24"},null,-1),c=(0,n.Uk)(" Pasteleria "),u=(0,n.Uk)("Pedidos");function p(e,t,r,o,p,l){const d=(0,n.up)("router-link"),m=(0,n.up)("router-view"),f=(0,n.up)("FooterVue");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",a,[(0,n._)("div",i,[(0,n.Wm)(d,{class:"navbar-brand",to:"/"},{default:(0,n.w5)((()=>[s,c])),_:1}),(0,n.Wm)(d,{class:"navbar-brand",to:"/pedidos"},{default:(0,n.w5)((()=>[u])),_:1})])]),(0,n.Wm)(m),(0,n.Wm)(f)],64)}const l={class:"mt-2 row card-header justify-content-between mx-0"},d=(0,n.uE)('<div class="col-md-4 col-sm-12"><h3>Contactanos</h3><p>Telefono: <a class="text-muted" href="tel:+78212345">78212345</a></p><p>Email: <a class="text-muted" href="mailto:pasteleria@contacto.com">pasteleria@contacto.com</a></p></div><div class="col-md-4 col-sm-12"><h3>Ubicacion</h3><p>Direccion: <span class="text-muted">Av. Juárez #28, Col. Centro, Coatzintla, 93700 Altotonga, Ver.</span></p></div><div class="col-md-4 col-sm-12"><h3>Horario</h3><p>Lunes a Viernes: <span class="text-muted">8:00 a 20:00 hrs</span></p><p>Sabado: <span class="text-muted">8:00 a 14:00 hrs</span></p><p>Domingo: <span class="text-muted">Cerrado</span></p></div>',3),m=[d];function f(e,t,r,o,a,i){return(0,n.wg)(),(0,n.iD)("div",l,m)}var h={name:"info-contacto"},b=r(89);const g=(0,b.Z)(h,[["render",f]]);var v=g,y={name:"app",components:{FooterVue:v}};const w=(0,b.Z)(y,[["render",p]]);var C=w,j=r(678);function S(e,t,r,o,a,i){const s=(0,n.up)("Pasteles");return(0,n.wg)(),(0,n.j4)(s)}const _={class:"row container mx-auto"},x=(0,n._)("legend",null,"Sabores",-1),T=(0,n.Uk)("Siguiente");function k(e,t,r,o,a,i){const s=(0,n.up)("Total"),c=(0,n.up)("Card"),u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n._)("div",_,[x,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.$store.getters.getSabores,((e,t)=>((0,n.wg)(),(0,n.j4)(c,{key:t,price:e.preco,title:e.nombre,src:e.src,type:"sabores"},null,8,["price","title","src"])))),128)),(0,n.Wm)(u,{to:"/toppings",class:"btn btn-primary"},{default:(0,n.w5)((()=>[T])),_:1})])],64)}var O=r(4346),P=r(7431),E={name:"PastelesView",components:{Card:O.Z,Total:P.Z}};const A=(0,b.Z)(E,[["render",k]]);var D=A,M={name:"HomeView",components:{Pasteles:D}};const U=(0,b.Z)(M,[["render",S]]);var N=U;const Z=[{path:"/",name:"home",component:N},{path:"/toppings",name:"topings",component:()=>r.e(232).then(r.bind(r,1232))},{path:"/resumen",name:"resumen",component:()=>r.e(519).then(r.bind(r,2519))},{path:"/pedidos",name:"pedidos",component:()=>r.e(262).then(r.bind(r,1262))}],z=(0,j.p7)({history:(0,j.PO)("/"),routes:Z});var F=z,L=r(65),H=new L.MT({state:{topingsState:[{id:1,nombre:"Chispas de chocolate",preco:75,src:"chispas"},{id:2,nombre:"Ferrero Rocher",preco:100,src:"ferrero"},{id:3,nombre:"M&Ms",preco:125,src:"m&ms"}],sabores:[{id:1,nombre:"Pastel de chocolate",preco:420,src:"chocolate"},{id:2,nombre:"Pastel de Tres Leches",preco:480,src:"vainilla"},{id:3,nombre:"Pastel de Zanahoria",preco:500,src:"zanahoria"}],pedidos:[{id:1,tamano:"Mediano",sabores:["Chocolate","Tres Leches"],topping:["Chispas de chocolate","Ferrecho","M&ms"],precio:720,fecha:"20/03/2022",hora:"10:30",cliente:{nombre:"Daniel",correo:"prueba@prueba.es",numero:7821234558}},{id:2,tamano:"Grande",sabores:["Chocolate"],topping:["Chispas de chocolate","M&ms"],precio:900,fecha:"20/03/2022",hora:"10:30",cliente:{nombre:"Matias",correo:"mati@prueba.es",numero:7821234558}},{id:3,tamano:"Grande",sabores:["Chocolate"],topping:["Chispas de chocolate","M&ms"],precio:900,fecha:"20/03/2022",hora:"10:30",cliente:{nombre:"Oscar",correo:"mati@prueba.es",numero:7821234558}},{id:4,tamano:"Grande",sabores:["Chocolate"],topping:["Chispas de chocolate","M&ms"],precio:900,fecha:"20/03/2022",hora:"10:30",cliente:{nombre:"Eduardo",correo:"mati@prueba.es",numero:7821234558}},{id:5,tamano:"Grande",sabores:["Chocolate"],topping:["Chispas de chocolate","M&ms"],precio:900,fecha:"20/03/2022",hora:"10:30",cliente:{nombre:"Enrique",correo:"mati@prueba.es",numero:7821234558}}],actTop:[],actSabo:[],cliente:{nombre:""},cuenta:[]},mutations:{setToppings(e,t){e.actTop=[t,...e.actTop]},setSabores(e,t){e.actSabo=[t,...e.actSabo]},setCuenta(e,t){e.cuenta=[...e.cuenta,t]},setUsuario(e,{llave:t,valor:r}){e.usuario={...e.usuario,[t]:r}},addPedido(e){const t={id:crypto.randomUUID(),sabores:e.actSabo,topping:e.actTop,tamano:e.usuario.tamano,precio:e.cuenta.reduce(((e,t)=>e+t),0),hora:e.usuario.hora,fecha:e.usuario.fecha,cliente:e.usuario};e.pedidos=[t,...e.pedidos],e.actSabo=[],e.actTop=[],e.cuenta=[],e.usuario={}}},actions:{setActual(e,t){e.commit("setActual",t)},setToppings(e,t){const{price:r,title:o}=t;e.commit("setToppings",o),e.commit("setCuenta",r)},setSabores(e,t){const{price:r,title:o}=t;e.commit("setSabores",o),e.commit("setCuenta",r)},setUsuario(e,t){e.commit("setUsuario",t)},addPedido(e){e.commit("addPedido"),alert("Pedido Realizado Correctamente.")}},getters:{getActual(e){return e.actual},getTopings(e){return e.topingsState},getSabores(e){return e.sabores},getPedidos(e){return e.pedidos},getCuenta(e){return e.cuenta}}});(0,o.ri)(C).use(H).use(F).mount("#app")},4346:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var o=r(3396),n=r(7139);const a={class:"elemento my-2"},i=["src"],s={class:"is-flex mx-2 info"},c={class:"text-primary text-end"};function u(e,t,u,p,l,d){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("img",{src:r(5477)(`./${u.src}.jpg`),alt:"{{title}}"},null,8,i),(0,o._)("div",s,[(0,o._)("h3",null,(0,n.zw)(u.title),1),(0,o._)("p",c,"$"+(0,n.zw)(u.price),1),(0,o._)("button",{onClick:t[0]||(t[0]=t=>e.$store.dispatch(""+("sabores"==u.type?"setSabores":"setToppings"),{title:u.title,price:u.price}))},"Agregar al carrito")])])}var p={name:"card-component",props:{src:String,title:String,price:Number,id:Number,type:String}},l=r(89);const d=(0,l.Z)(p,[["render",u],["__scopeId","data-v-6d9e4660"]]);var m=d},7431:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var o=r(3396),n=r(7139);function a(e,t,r,a,i,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("p",null,"$"+(0,n.zw)(e.$store.state.cuenta.reduce(((e,t)=>e+t),0)),1)])}var i={name:"total-component"},s=r(89);const c=(0,s.Z)(i,[["render",a],["__scopeId","data-v-3baec932"]]);var u=c},5477:function(e,t,r){var o={"./chispas.jpg":7715,"./chocolate.jpg":3341,"./ferrero.jpg":6165,"./m&ms.jpg":8889,"./vainilla.jpg":81,"./zanahoria.jpg":45};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=5477},7715:function(e,t,r){"use strict";e.exports=r.p+"img/chispas.b42c23b0.jpg"},3341:function(e,t,r){"use strict";e.exports=r.p+"img/chocolate.894e78a0.jpg"},6165:function(e,t,r){"use strict";e.exports=r.p+"img/ferrero.b81a2abe.jpg"},8889:function(e,t,r){"use strict";e.exports=r.p+"img/m&ms.e47e38bc.jpg"},81:function(e,t,r){"use strict";e.exports=r.p+"img/vainilla.26b7e7de.jpg"},45:function(e,t,r){"use strict";e.exports=r.p+"img/zanahoria.4c43cbc6.jpg"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var i=1/0;for(p=0;p<e.length;p++){o=e[p][0],n=e[p][1],a=e[p][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(p--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{232:"b8b84436",262:"fde87c49",519:"e0ca8962"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".16d43dd6.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pasteleria:";r.l=function(o,n,a,i){if(e[o])e[o].push(n);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var l=u[p];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var d=function(t,r){s.onerror=s.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=function(o){return new Promise((function(n,a){var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,n,a)}))},n={143:0};r.f.miniCss=function(e,t){var r={262:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,c=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var p=c(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},o=self["webpackChunkpasteleria"]=self["webpackChunkpasteleria"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(3339)}));o=r.O(o)})();
//# sourceMappingURL=app.46270bf1.js.map