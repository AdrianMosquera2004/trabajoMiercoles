import {llenarTienda} from './tiendallenado.js'
import {ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio
let producto={}

//llamando a tienda llenado
llenarTienda()

let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))


//rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){ 
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

//rurina para añadir un producto al carrito de compras 
let carrito=[]
let botonAgregarCarrito=document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agregar el producto
    let cantidad=document.getElementById("CantidadProducto").value
    producto.cantidad=cantidad

    //Agrego el producto ap carro
    carrito.push(producto)

    modalinfo.show()

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    
    console.log(carrito)
})
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(limpiar){

    carrito=[]

    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})

//rutina para ver el carrito
let botonVercarrito=document.getElementById("vercarrito")
botonVercarrito.addEventListener("click",function(){

    //recorrer el carrito y pinatr los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        //Padre e hijos
       columna1.appendChild(foto)
       fila.appendChild(columna1)
       fila.appendChild(columna2)
       base.appendChild(fila)
    })



    modalcompra.show()
})