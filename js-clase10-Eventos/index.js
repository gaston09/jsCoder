//*?-------DECLARO ARRAYS-------/

let frutas = [`kiwi`, `banana`,`pera`,`melon`,`sandia`];
let verduras = [`papa`, `zanahoria`, `acelga`, `zapallo`, `cebolla`]

//*?-------FUNCION DE ORDEN SUP-------/
function porCadaUno (arr, fn){
//     for (let i =0; i < arr.length ; i++)
//         fn(arr[i])
// }

//*?-------LO MISMO PERO CON FOR OF-------/
    for ( const item of arr){ //item, pepe, el-->da igual el nombre
fn(item)}
}

// porCadaUno(frutas, console.log);
// porCadaUno(verduras, alert);
//*?----USO "porCadaUno EN OTRA FUNCION-------/

let precios = [100,200,20,56,35,800];

// function adicionarIva(value){
//     console.log(value * 1.21);
// }

// porCadaUno(precios, adicionarIva);

//*?-------FOR EACH-------/

// frutas.forEach((item) => console.log (item)); /*item = cualquier nombre */
//*ejemplo de descuento por pagar en efetivo */
/*el forEach del array recibe una funcion*/
precios.forEach((precio,index) => console.log (index+ ": " +precio * 0.21));

/*la funcion esta creada y la paso como parámetro*/
let fn = (precio) => console.log (precio - (precio*0.10));
precios.forEach(fn)
