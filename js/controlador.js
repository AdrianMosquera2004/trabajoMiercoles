import {llenarTienda} from './tiendallenado.js'
import {ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio
let producto={}

//llamando a tienda llenado
llenarTienda()

//rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){ 
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

//rurina para añadir un producto al carrito de compras 
let carrito=[]
let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

     carrito.push(producto)
     console.log(carrito)
})
