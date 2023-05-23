//Saludo
const saludo = "Bienvenido a Keyworld\nDonde podrá encontrar su teclado ideal";
alert(saludo);

let nombreIngresado = prompt("Ingrese su nombre ");
alert("Bienvenid@ " + nombreIngresado + "\nA continuación podrá ver una pequeña lista de nuestros productos\nAdemás de conocer sus precios.");


//Arrays y objetos
const coin = "ARS";

productosTeclados = [
    producto1 = {
        id: 1,
        categoria: "Teclado mecánico",
        nombre: "Teclado Logitech G513 Carbon",
        valor: 24500,
        stock: 6
    },
    producto2 = {
        id: 2,
        categoria: "Teclado mecánico",
        nombre: "Teclado HyperX Alloy Origins",
        valor: 18000,
        stock: 0
    },
    producto3 = {
        id: 3,
        categoria: "Teclado mecánico",
        nombre: "Teclado ROG Claymore II",
        valor: 37100,
        stock: 7
    },
    producto4 = {
        id: 4,
        categoria: "Teclado de membrana",
        nombre: "Teclado Corsair K55 RGB",
        valor: 19800,
        stock: 3
    },
    producto5 = {
        id: 5,
        categoria: "Teclado de membrana",
        nombre: "Teclado Redragon Shiva K512",
        valor: 16400,
        stock: 0
    },
    producto6 = {
        id: 6,
        categoria: "Teclado de membrana",
        nombre: "Teclado Sentey Acrylix RGB",
        valor: 8600,
        stock: 4
    },
]


//Ciclo con condicional
for (let i = 1; i <= 7; i++) {
    let consultarProducto = prompt("Desea conocer el precio de nuestros productos?");
    if (consultarProducto == "si"){
        let productoConsultado = prompt("Cual es el código del producto del que desea conocer el precio?\n\nCódigo: 1 - Teclado Logitech G513 Carbon\nCódigo: 2 - Teclado HyperX Alloy Origins\nCódigo: 3 - Teclado ROG Claymore II\nCódigo: 4 - Teclado Corsair K55 RGB\nCódigo: 5 - Teclado Redragon Shiva K512\nCódigo: 6 - Teclado Sentey Acrylix RGB");
        if (productoConsultado == 1) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto1.valor + "\n" + producto1.nombre + " " + coin);
        } else if (productoConsultado == 2) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto2.valor + "\n" + producto2.nombre + " " + coin);
        } else if (productoConsultado == 3) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto3.valor + "\n" + producto3.nombre + " " + coin);
        } else if (productoConsultado == 4) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto4.valor + "\n" + producto4.nombre + " " + coin);
        } else if (productoConsultado == 5) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto5.valor + "\n" + producto5.nombre + " " + coin);
        } else if (productoConsultado == 6) {
            alert("El costo del producto sin IVA sería:\n\nPrecio: " + producto6.valor + "\n" + producto6.nombre + " " + coin);
        } else {
            alert("El código ingresado no corresponde con un producto en stock...");
        }
    } else if (consultarProducto == "no"){
        alert(nombreIngresado + ", continúe para conocer nuestras siguientes opciones.");
    }
    if (consultarProducto == "no") break;
}


//Funciones
let producto = prompt("Para conocer el precio de uno de nuestros productos con IVA, ingrese el código a continuación:\n\nCódigo: 1 - Teclado Logitech G513 Carbon\nCódigo: 2 - Teclado HyperX Alloy Origins\nCódigo: 3 - Teclado ROG Claymore II\nCódigo: 4 - Teclado Corsair K55 RGB\nCódigo: 5 - Teclado Redragon Shiva K512\nCódigo: 6 - Teclado Sentey Acrylix RGB");
function calculoIva(producto) {
    const iva = 1.21;
    switch (producto) {
        case "1":
            return (producto1.valor) * iva;
            break;
        case "2":
            return (producto2.valor) * iva;
            break;
        case "3":
            return (producto3.valor) * iva;
            break;
        case "4":
            return (producto4.valor) * iva;
            break;
        case "5":
            return (producto5.valor) * iva;
            break;
        case "6":
            return (producto6.valor) * iva;
            break;
        default:
        return 0;
        break;
    }
}
alert("Para conocer el valor del producto con IVA, acceda a la consola web.");


//Llamando el resultado por la consola
console.log("El precio con IVA del producto seleccionado es: " + calculoIva(producto));

alert("Por problemas de logística, podemos realizar envíos de máximo 5 artículos. Disculpe las molestias, aún estamos aprendiendo.");
alert("Recuerde fijarse en la consola web para conocer los productos que tenemos en stock actualmente.");

console.log("Productos actualmente en stock:");
const productosStock = productosTeclados.filter((teclado) => teclado.stock > 0);
console.log(productosStock[0].id + " - " + productosStock[0].nombre + "\n" + productosStock[1].id + " - " + productosStock[1].nombre + "\n" + productosStock[2].id + " - " + productosStock[2].nombre + "\n" + productosStock[3].id + " - " + productosStock[3].nombre);



//Condicionales
let cantidadProductos = prompt("Cuantos productos contendrá su orden?")
if (cantidadProductos == 1) {
    let productoUno = prompt("Ingrese el código del producto a adquirir:");
} else if (cantidadProductos == 2) {
    let productoUno = prompt("Ingrese el código del primer producto:");
    let productoDos = prompt("Ingrese el código del segundo producto:");
} else if (cantidadProductos == 3) {
    let productoUno = prompt("Ingrese el código del primer producto:");
    let productoDos = prompt("Ingrese el código del segundo producto:");
    let productoTres = prompt("Ingrese el código del tercer producto:");
} else if (cantidadProductos == 4) {
    let productoUno = prompt("Ingrese el código del primer producto:");
    let productoDos = prompt("Ingrese el código del segundo producto:");
    let productoTres = prompt("Ingrese el código del tercer producto:");
    let productoCuatro = prompt("Ingrese el código del cuarto producto:");
} else if (cantidadProductos == 5) {
    let productoUno = prompt("Ingrese el código del primer producto:");
    let productoDos = prompt("Ingrese el código del segundo producto:");
    let productoTres = prompt("Ingrese el código del tercer producto:");
    let productoCuatro = prompt("Ingrese el código del cuarto producto:");
    let productoCinco = prompt("Ingrese el código del quinto producto:");
} else {
    alert("Lamentablemente el número ingresado no corresponde con un envío factible por nuestro servicio de logística.")
}


alert("Gracias por realizar su pedido " + nombreIngresado + ", a la brevedad nos comunicaremos con usted para coordinar la entrega.\nSeguiremos mejorando nuestro servicio para próximas entregas.")


alert("Antes de que se retire, queremos comentarle que debido al aumento por inflación, hemos tenido que ajustar nuestros precios en un 10%.\nLe invitamos a revisar nuestra lista de productos nuevamente desde la consola web.")


console.log("Estos son los códigos de producto con sus respectivos nombres y nuevos precios:");
const productosNuevoPrecio = productosTeclados.map((teclado) => {
    return {
        id: teclado.id,
        nombre: teclado.nombre,
        valor: teclado.valor * 1.10
    }
});
console.log(productosNuevoPrecio);
alert("Pero no se preocupe...\nSu pedido mantendrá los precios anteriores al ajuste.")
