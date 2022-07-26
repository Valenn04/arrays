const productos = [{
        nombre: 'Buzo oversized gris',
        precio: 11000
    },
    {
        nombre: 'Buzo oversized negro',
        precio: 11000
    },
    {
        nombre: 'Saco de paño',
        precio: 35000
    },
    {
        nombre: 'Trench Euro',
        precio: 32000
    },
];

let carrito = []

let seleccion = prompt('Desea comprar algun producto si o no')

while (seleccion != 'si' && seleccion != 'no') {
    alert('Por favor ingresa si o no')
    seleccion = prompt('Desea comprar algun producto si o no')
}

if (seleccion == 'si') {
    alert('a continuacion nuestra lista de productos')
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + ' ' + producto.precio + '$');
    alert(todosLosProductos.join(' - '));
} else if (seleccion == 'no') {
    alert('Gracias por venir, hasta pronto!')
}

while (seleccion != 'no') {
    let producto = prompt('Agrega un producto a tu carrito');
    let precio = 0;

    if (producto == 'Buzo oversized gris' || producto == 'Buzo oversized negro' || producto == 'Saco de paño' || producto == 'Trench Euro') {
        switch (producto) {
            case 'Buzo oversized gris':
                precio = 11000
                break;
            case 'Buzo oversized negro':
                precio = 11000
                break;
            case 'Saco de paño':
                precio = 35000
                break;
            case 'Trench Euro':
                precio = 32000
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt('Cuantas unidades quiere llevar'))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert('No tenemos ese producto')
    }
    seleccion = prompt('Desea seguir comprando?')
    while (seleccion === 'no') {
        alert('Gracias por la compra!')
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
