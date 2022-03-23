//creando un arreglo de objetos

let productosBD=[


    {foto:'img/tienda1.jpg',nombre:"Camiseta",precio:50000,descripcion:"Camiseta SL 2.0"},
    {foto:'img/tienda2.jpg',nombre:"Pantalon",precio:145000,descripcion:"Pantalon White essentialst"},
    {foto:'img/tienda3.jpg',nombre:"Buzo",precio:100000,descripcion:"Buzo 2pac Edition Special"},
    {foto:'img/tienda4.jpg',nombre:"Pantaloneta",precio:50000,descripcion:"Pantaloneta Essentialst"},
    {foto:'img/tienda5.jpg',nombre:"Gorra",precio:50000,descripcion:"Gorra Black essentialst"},
    {foto:'img/tienda6.jpg',nombre:"Bolso",precio:80000,descripcion:"Bolso Black essentialst"},
    {foto:'img/tienda7.jpg',nombre:"Figura 2pac",precio:500000,descripcion:"Figura_2pac  Hail Mary"},
    {foto:'img/tienda8.jpg',nombre:"Cadena",precio:1000000,descripcion:"Cadena Hit Em Up"},
    {foto:'img/tienda 9.jpg',nombre:"Zapato",precio:750000,descripcion:"Zapato HU NMD"},
    {foto:'img/tienda 10.jpg',nombre:"Cuadro",precio:600000,descripcion:"Cuadro Edition Special"}

]

//Necesito recorrer un arrego en JS

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
productosBD.forEach(function(producto){
/*    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)
*/
    //2.Pintando etiquetas

    //div con la clase col
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("car-img-top")
    foto.src=producto.foto

    //h4 con la clase text-center
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent=producto.precio
    

    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    let botonProductos=document.createElement("button")
    botonProductos.classList.add("m-2")
    botonProductos.classList.add("btn")
    botonProductos.classList.add("btn-outline-success")
    botonProductos.textContent = "Productos"
    botonProductos.setAttribute("type" , "button")

    //3. Padres E Hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(botonProductos)
    

})

//Rutina para apliar informacon del producto
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){

        console.log(evento.target.parentElement.querySelector("h4").textContent)
        console.log(evento.target.parentElement.querySelector("img").src)

        let fotoinfo=document.getElementById("fotoInfo")
        fotoinfo

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
        modalinfo.show()
    }
})
