// console.log(document)

// const title = document.getElementById("title")/**Devuelve un solo elementos, no debemos repetir ID */

// console.log(title); /**trae la etiqueta */
// console.log(title.innerText);/**trae solo el texto */

// title.innerText = "otro titleeeee";
// console.log(title.innerText);
// title.innerHTML= "<span>Hola</span> soy otro title con html full"
// const items = document.getElementsByClassName("item")/**Devuelve un array de items, todos los qe tienen ese classname */
// console.log(items)
// for (item of items){
//     console.log(item)
// }
// title.className =("ClaseDesdeJS")
// // title.remove(title); /**elimina lo que declaremos */

// const newNode = document.createElement('section');
// newNode.innerHTML = "<div><p>Agregando div-p desde JS</p></div>";
// document.body.append(newNode);

// const input =document.getElementById('text');
// console.log(input.value)

//*? ----------Array de personas pasado a html--------*/
const productos = ["Proteina ENA","Proteina Syntha-6","Creatina Universal","Gainer ENA","Animal Pak"]

const lista = document.createElement('ul');
for (producto of productos){
    const item = document.createElement('li');
    item.className = 'productoStyle'
    // item.innerText = producto;
    item.innerText = `producto: ${producto}
    stock: 10`
    lista.append(item)
}
document.body.append(lista)