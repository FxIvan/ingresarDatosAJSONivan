let fs = require('fs')
let listaDeProductos = fs.readFileSync('./valores.json', 'utf-8')
let productos = JSON.parse(listaDeProductos)
let process = require('process')
console.log(listaDeProductos)
let comando = process.argv[2]

switch (comando) {
    // PRODUCTO LO QUE HACE ES DECIRME QUE PRODUCTOS HAY EN LA LISTA
    case 'producto':
        for (let i = 0; i < productos.length; i++) {
            console.log("Titulo: " + productos[i].Producto)
        }
        break
    case "agregar":
        let nuevoTitulo = process.argv[3]
        let nuevoPrecio = process.argv[4]
        let nuevoProducto = {
            Producto: nuevoTitulo,
            Precio: nuevoPrecio
        }
        productos.push(nuevoProducto)
        let nuevaListaProductos = JSON.stringify(productos)
        fs.writeFileSync('./valores.json', nuevaListaProductos, 'utf-8')
        console.log(nuevaListaProductos)
        break



}