//Saludo
let nombreIngresado = prompt("Ingrese su nombre ");
alert("Bienvenid@ " + nombreIngresado);

//Variables y constantes
const codigo1 = 24500;
const codigo2 = 18000;
const codigo3 = 37100;
const codigo4 = 19800;
const codigo5 = 16400;
const codigo6 = 8600;
const coin = "ARS";

//Ciclo con condicional
for (let i = 1; i <= 7; i++) {
    let consultarProducto = prompt("Desea conocer el precio de uno de nuestros productos?");
    if (consultarProducto == "si"){
        let productoConsultado = prompt("Cual es el código del producto del que desea conocer el precio?");
        if (productoConsultado == 1) {
            alert("El costo del producto sin IVA sería: " + codigo1 + " " + coin);
        } else if (productoConsultado == 2) {
            alert("El costo del producto sin IVA sería: " + codigo2 + " " + coin);
        } else if (productoConsultado == 3) {
            alert("El costo del producto sin IVA sería: " + codigo3 + " " + coin);
        } else if (productoConsultado == 4) {
            alert("El costo del producto sin IVA sería: " + codigo4 + " " + coin);
        } else if (productoConsultado == 5) {
            alert("El costo del producto sin IVA sería: " + codigo5 + " " + coin);
        } else if (productoConsultado == 6) {
            alert("El costo del producto sin IVA sería: " + codigo6 + " " + coin);
        } else {
            alert("El código ingresado no corresponde con un producto en stock...");
        }
    } else if (consultarProducto == "no"){
        alert("Puede continuar para conocer el costo total a abonar...");
    }
    if (consultarProducto == "no") break;
}



//Funciones
let producto = prompt("Ingrese el código del producto del que desea conocer el precio con IVA");
function calculoIva(producto) {
    const iva = 1.21;
    switch (producto) {
        case "1":
            return codigo1 * iva;
            break;
        case "2":
            return codigo2 * iva;
            break;
        case "3":
            return codigo3 * iva;
            break;
        case "4":
            return codigo4 * iva;
            break;
        case "5":
            return codigo5 * iva;
            break;
        case "6":
            return codigo6 * iva;
            break;
        default:
        return 0;
        break;
    }
}


alert("Para conocer el valor del producto con IVA, acceda a la consola web. Muchas gracias.")
//Llamando el resultado por la consola
console.log("El precio con IVA del producto seleccionado es: " + calculoIva(producto));



alert("Por problemas de logística, podemos realizar envíos de máximo 5 artículos. Disculpe las molestias, aún estamos aprendiendo.");
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







const objetoNuevo = {nombre: "botella", valor: 200}

productos.push (objetoNuevo)

console.log(productos)