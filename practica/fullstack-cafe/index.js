/*  FUNCION IVA     */

// function precio(x){
//     introducirValor = prompt("de que valor desea calcular el iva?: ")
//     preciototal = introducirValor * 1.21
//     console.log(preciototal)
// }
// precio ()
// precio ()
// precio ()

/*  FUNCION PROMEDIOS    */
// function calculaPromedios(){
//     let valor1 = parseFloat(prompt ("ingrese 1er valor: "));
//     let valor2 = parseFloat(prompt ("ingrese 2do valor: "));
//     let valor3 = parseFloat(prompt ("ingrese 3er valor: "));
//     let promedio = (valor1 + valor2 + valor3)/3;
//     console.log (promedio);
// }
// calculaPromedios();

/*  CALCULAR AUTONOMIA  */
// function calculaAutonomia() {
//     let kms = parseFloat(prompt("cuantos km hiciste este viaje?: "));
//     let litros = parseFloat(prompt("cuantos litros consumio el auto?: "));
//     let autonomia = (kms / litros);
//     console.log( "tu automovil hizo " +autonomia+ " kilómetros/litro");
// }
// calculaAutonomia()

/*  RECETA TORTILLA  */
// let papas =1
// let cebollas = 0.300
// let huevos = 5

// let personas = prompt("cuantas personas vienen a comer? ")
//     if (personas <=5){
//         let papa = papas
//         let cebolla = cebollas
//         let huevo = huevos
//         console.log ("Para "+personas+ " personas, se necesitan " + papa + " kg de papa, "+cebolla+ " kg de cebolla y"+huevo+" huevos" )
//     }else if(personas >5 && personas <=10){
//         let papa = papas *2
//         let cebolla = cebollas *2
//         let huevo = huevos *2
//         console.log ("Para "+personas+ " personas, se necesitan " + papa + " kg de papa, "+cebolla+ " kg de cebolla y "+huevo+" huevos" )
//     }else {
//         console.log("no entramos tantas personas en casa")
//     }

/*  LISTA FOR    */
// let numero = Number(prompt("ingrese un numero: "))

// for (i = 0; i <= numero; i++){
//     console.log (i)
// }

function agregaStock(){
    let agregar = Number(prompt("cuantos productos ingresaron?: "))
    return agregar
}

function venderItem (){
    let vender = Number(prompt("cuantos productos se vendieron?: "))
    return vender
}

class Productos{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = Number(stock)
    }
    reponer() {
        this.stock = this.stock + agregaStock();
    }
    vendido(){
        this.stock = this.stock - venderItem();
    }
}

const producto1 = new Productos ("Proteina ENA",9000,0);
const producto2 = new Productos ("Proteina Star N",16000,0);
const producto3 = new Productos ("Gainer ENA",12000,0);
const producto4 = new Productos ("Animal Pak",24000,0);




producto1.reponer();
producto1.vendido();
console.log("hay: " + producto1.stock +" "+producto1.nombre+ " en el inventario");
producto2.reponer();
console.log(producto2);
console.log(producto3);

console.log(producto4);

