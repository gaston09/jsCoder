
//         //*     SET      */
// localStorage.setItem('edad',30);
// localStorage.setItem('nombre','Pepe');
// localStorage.setItem('productos', ['Proteina Ena', 'Proteina Universal', 'Gainer Ena','Animal Pak'])

//         //*     GET      */

// let personaje ={
//     nombre: localStorage.getItem('nombre'),
//     edad: localStorage.getItem('edad')
// }
// let personaje2 ={
//     nombre: localStorage.getItem('nombre'),
//     edad: localStorage.getItem('edad')
// }

// let productos= localStorage.getItem('productos')
// console.log(personaje);
// console.log('Desde el session storage' , personaje2);

// //*devuelvo los protucos en forma de cadena de texto y elimino las "," paraque retorne array */
// console.log('Devuelve cadena de String' , productos);
// console.log(productos.split(","))


// console.log(localStorage.length);
// localStorage.removeItem('nombre')/*borra item "nombre" */
// // localStorage.clear()  /*boRra TODO" */


// for (let i = 0; i < localStorage.length; i++){
//     const clave = localStorage.key(i) /*armo variable y llamo a key que sirve como array[0] para buscar una posicion */
//     console.log(clave) /*Traigo TODOS los elementos del localStorage */
//     console.log(localStorage.getItem(clave));
// }

const items =[
{
    id:1,
    name:"arroz",
    precio: 105,
    stock: 15
},
{
    id:2,
    name:"Leche",
    precio: 100,
    stock: 10
}
];

for (item of items){
    localStorage.setItem(item.id, JSON.stringify(item));
}

let newItems = [];
for (let i =1; i <= localStorage.length; i++){
    newItems.push(JSON.parse(localStorage.getItem(i)))
}
console.log(newItems)