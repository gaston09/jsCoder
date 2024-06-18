// function asignaOperacion(op){
//     if (op == "sumar"){
//         return(a,b) => a + b
//     }else if (op == "restar"){
//         return(a,b) => a - b
//     }
// }

// let suma = asignaOperacion("sumar")
// let resta = asignaOperacion("restar")

// console.log(suma(4,6));
// console.log(resta(10,3));

// let frutas = ["tomate", "frutilla", "limon", "ananá", "melon", "kiwi", "naranja"]

// function porCadaUno(arr, fn){
// //     for (let i = 0; i < arr.length; i++) {
// //         fn(arr[i])}
// // }   se puede trabajar con el for of que es mas simple de aplicar

//     for (const i of arr){
//         fn(i)}
// }

// function porCadaUnoNuevoArray(arr, fn){
//     let nuevoArray=[]
//     for (const i of arr){
//         nuevoArray.push(fn(i))
//     }
//     return nuevoArray;
// }

// porCadaUno(frutas, console.log);

// let precios = [109, 24, 665, 1020, 4354, 79]
// function adicionarIVA(valor) {
//     console.log(valor + (valor* 0.21));
// }
// porCadaUno(precios, adicionarIVA);

// let resultado = porCadaUnoNuevoArray(precios , adicionarIVA)
// console.log(resultado)

//-----------METODOS DE BUSQUEDA--------//
/* forEach*/
let frutas = ["tomate", "frutilla", "limon", "ananá", "melon", "kiwi", "naranja"]
frutas.forEach ((value) => console.log(value))
let precios = [109, 24, 665, 1020, 4354, 79]
precios.forEach ((value) => console.log(value + (value*0.21)))

/**find
 * busca  elementos de un array y lo devuelve (solo el primero en casi de coincidir)
 */
const resultado = frutas.find((fruta) => fruta == "tomate")
console.log(resultado)
/**filter- devuelve todos los elementos que coincidan con la busqueda
 */

/**SOME se fija si alguno cumple con la condicion indicada
 * const = tenemosPelado = empleado.some((empleado) => empleado.bald === true);
 * console.log(tenemosPelado);
*/

/*MAP devuelve un array de los datos modificados que despues puedo utilizarlo*/
let precioConIva = precios.map((precio) => precio*1.21). filter((precio)=> precio > 500)
console.log(precioConIva)

/*REDUCE - devuelve un unico valor de todo el array que se reduce*/
let ventas = [100, 200, 400 ,1975, 5434];
let total = ventas.reduce((valorAnterior, valorActual)=> valorAnterior+valorActual)
console.log("hoy ganamos: $" + total + " y cerramos caja positiva")

/**SORT 
 * ordena de mayor a menor o por alfabeto
*/
let ordenado = frutas.sort()
console.log(ordenado)


