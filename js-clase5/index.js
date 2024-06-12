// let idProducto= "001123"
// let nombreProducto= "Arroz"
// let precio= 120 

// let idProducto2= "001124"
// let nombreProducto2= "Leche"
// let precio2= 200

//Objetos
/**
 * @param {string} id
 * @param {string}nombre
 * @param {number}precio 
 */

let producto1 = {
    id: '001123',
    nombre:"Arroz",
    precio: 120 
}
producto1.pepe = "Soy Pepe"
console.log(producto1)

let producto2 = {
    id: '001124',
    nombre:"Leche",
    precio: 200 
}
console.log(producto2)

console.log(producto1.precio)

// Objetos constructores
function producto(id,nombre, precio){
    this.id=id
    this.nombre=nombre
    this.precio=precio
}

const producto3 = new producto ("ABC432", "vino", 500)
console.log(producto3);