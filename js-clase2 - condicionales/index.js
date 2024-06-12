//-----------------------------------FOR-------------------------//
// edad = 17  
// if (edad < 18){
//     console.log("Lo senntios, no puedes ingresar! :( ");
//     }else{
//         console.log("pudiste ingresar! bienvenido")
//     }

// //iteracion de i de a 2 numeros, comenzando en 1
// for (let i = 1 ; i <= 10 ; i+=2 ){
//     console.log(i);
// }

// //iteración de i, de  1, comenzando en 0
// for (let i = 0 ; i < 10 ; i+=2 ){
//     console.log(i);
// }

// //iteracion de 100 hasta 30 en descenso
// for (let i = 100; i >= 30; i--){
//     console.log(i);
// }

// //ingrese numero y que se impriman todos los numeros * 10, hasta llegar al ingresado
// const cantidad = prompt("ingrese el número para terminar el bucle")
// for (let i=0; i <= cantidad ; i++){
//     console.log(i * 10);
// }

usuario = prompt ("ingrese su nombre: ")
edad = Number(prompt("ingrese su edad"))

if (edad >= 0 && edad < 18){
    alert("Lo sentimos, " +usuario+ " , eres muy pequeño para ingresar");
}else if (edad >= 18 && edad <= 100){
    alert ("bienvenido, "+usuario)
}else {
    alert("ingrese una edad valida. ")
}
