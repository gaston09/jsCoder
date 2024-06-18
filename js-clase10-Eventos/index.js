// //*?-------DECLARO ARRAYS-------/

// let frutas = [`kiwi`, `banana`,`pera`,`melon`,`sandia`];
// let verduras = [`papa`, `zanahoria`, `acelga`, `zapallo`, `cebolla`]

// //*?-------FUNCION DE ORDEN SUP-------/
// function porCadaUno (arr, fn){
// //     for (let i =0; i < arr.length ; i++)
// //         fn(arr[i])
// // }

// //*?-------LO MISMO PERO CON FOR OF-------/
//     for ( const item of arr){ //item, pepe, el-->da igual el nombre
// fn(item)}
// }

// // porCadaUno(frutas, console.log);
// // porCadaUno(verduras, alert);
// //*?----USO "porCadaUno EN OTRA FUNCION-------/

// let precios = [100,200,20,56,35,800];

// // function adicionarIva(value){
// //     console.log(value * 1.21);
// // }

// // porCadaUno(precios, adicionarIva);

// //*?-------FOR EACH-------/

// // frutas.forEach((item) => console.log (item)); /*item = cualquier nombre */
// //*ejemplo de descuento por pagar en efetivo */
// /*el forEach del array recibe una funcion*/
// precios.forEach((precio,index) => console.log (index+ ": " +precio * 0.21));

// /*la funcion esta creada y la paso como parámetro*/
// let fn = (precio) => console.log (precio - (precio*0.10));
// precios.forEach(fn)
const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');
const title = document.getElementById('title');
const input1= document.getElementById('cambio');
const input2 = document.getElementById('input');
const submit = document.getElementById('form');

function Hola(){
    console.log("como va? todo bien??")
}
function Chau(){
    console.log("me canse. me voy")
}

// button.onclick = () => Hola()        2 FORMA DE INTERACTUAR
button.addEventListener('click', () => Hola()) /**o solo Hola */
button.addEventListener('click', () => { 
    Hola();
    Chau();
}) 

button2.addEventListener('mousedown', () => console.log("comezaste a apretar el elemento"))
button2.addEventListener('mouseup', () =>console.log ("dejaste de apretar el elemento"))
button2.addEventListener('click', ()=>{
    title.innerText = " Me dieron click,"
})

input1.addEventListener('change', ()=> console.log("algo esta cambiando"));
input2.addEventListener('input', ()=> console.log("el valor actual es: " + input2.value));

form.addEventListener ('submit', (e)=>{/** e es de evento, se puede llamar pepe si queremos */
    e.preventDefault();
    console.log("hice console log sin que submit refresque la pagina")
})
    