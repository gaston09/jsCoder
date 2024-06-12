// let idProducto= "001123"
// let nombreProducto= "Arroz"
// let precio= 120 

// let idProducto2= "001124"
// let nombreProducto2= "Leche"
// let precio2= 200

//Objetos
/**
//  * @param {string} id
//  * @param {string}nombre
//  * @param {number}precio 
//  */

// let producto1 = {
//     id: '001123',
//     nombre:"Arroz",
//     precio: 120 
// }
// producto1.pepe = "Soy Pepe"
// producto1.stock = 20
// console.log(producto1)
// /*------CONDICIONALES EN OBJETO-------*/
// const cantidadVentas= prompt("cuantas unidades se vendieron?")
// if (cantidadVentas > 0){
//     producto1.stock -= cantidadVentas;
// }
// console.log(producto1)

// let producto2 = {
//     id: '001124',
//     nombre:"Leche",
//     precio: 200 
// }
// console.log(producto2)

// console.log(producto1.precio)

//                 /*Objetos constructores*/
// function producto(id,nombre, precio){
//     this.id=id
//     this.nombre=nombre
//     this.precio=precio
// }

// const producto3 = new producto ("ABC432", "vino", 500)
// console.log(producto3);


                /*Metodos */
function Hero (name, lastname, alias ){
    this.name = name;
    this.lastname = lastname;
    this.alias = alias;

    this.sayHi = function () {
        console.log("hola, mi nombre es: " + this.name + " " + this.lastname + " pero puedes llamarme " + this.alias + ", porque mi identidad debe ser secreta")
    }
}
const hero_1 = new Hero ("Goku", "Son", "kakarotto" );
const hero_2 = new Hero ("Homero", "Simpson", "Mr Chispa" );
const hero_3 = new Hero ("Bart", "Simpson", "El Barto" );
    
console.log(hero_1.alias);

hero_2.sayHi();
hero_3.sayHi();

for (i in hero_1){
    console.log(hero_1[i])
}