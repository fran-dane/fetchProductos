function obtenerProductos () {
    const productosLibros = 'productos.json';
    fetch(productosLibros)
    .then( resultado =>  resultado.json())
    .then(datos => {
        //  console.log(datos.libros)
         const { libros } = datos;
         libros.forEach( libro => {
             document.write(`<b>${libro.id}</b> `)
             document.write(`${libro.nombre} PRECIO:`)
             document.write(`<b> $ ${libro.precio}</b> <br>`)
         })

    })
}

obtenerProductos()