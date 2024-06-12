//  ARRAYS
/* pueden ser multidato: numero, letras, float, boool, funciones */
let simpsons = [`homero`, `bart`,`lisa`, `marge`, `maggie`, `Abraham`, `Selma`,`Patty`];

// let empleado_1= {
//     id : 798732,
//     nombre : "Homero J.",
//     apellido: "Simpson",
//     edad: 40,
//     sector: 7,
//     seccion: "G",
// }

console.log(simpsons[3])
// console.log(empleado_1)
// console.log(empleado_1[name])
for (let i=0; i<5;i++){
    console.log((i+1) +". " + simpsons[i]);
}

for (let i=0; i< simpsons.length; i++)
    console.log((i+1) +". " + simpsons[i]);

/*Agrego elemento */
simpsons.push (`Hugo`)
console.log(simpsons)
/**shift  = agrega al principi0
 * unshift = elimina el primero
 * pop = elimina el ultomo
 * splice = elimina elementos entre los margenes que queremos(2,3) desde donde arranco, cuantos borra. console.log(simpsons.splice(2,3) me devuelve los elementos borrados)
 * join = unis los items en una cadena de texto ( - ), hay que GUARDARLO EN UNA VARIABLE
 * concat = une 2 arrays  (let stock = frutas.concat(verduras); console.log para imprimir
 * slice = copia una parte del array original (let verduras = verduras.slice(0,2)
 * indexOf = nos dice el numero del indice de un elemento
 * includes = nos dice si el elemento ingresado existe o no
 * reverse = da vuelta el array 
 *  */