// //--------------------------FOR-------------//

// //         for (inicio; final; iteracion)
// for (let i = 0; i< 10 ; i++){
//     console.log(i);
// }

// //          Algoritmo que multiplique por 20 el numero ingresado por el usuario
// const cantidad = prompt("ingrese un nummero: ")
// for (let i = 0; i <= cantidad ; i++){
//     console.log(i*20)
// }

// //          Turnero personalizado que de x cantidad de turnos

// for (let i = 1; i <= 7; i++ ){
//     let nombre = prompt("ingrese su nombre: ")
//     if (nombre == ""){
//         console.log("No puedo asignar un turno sin que ingrese su nombre");
//         i -=1;
//         continue;
//     }else if(i > 6){
//         console.log ("Disculpe, "+ nombre +", todos los turnos del dia fueron asignados, muchas gracias")
//     }else{
//         console.log("Hola " + nombre + (", se le ha asigado el nùmero: " + i))
//     }
// }


//--------------------------WHILE--------------------------------//


// let condition = true;

// while (condition) {
//     console.log("la condición es verdadera"); 
//     condition = 10 == 20; // se rompre porque 10 = =20; es falsa
// }


// let option;
// while (option != 0){
//     option = prompt ("ingrese una opción: \n1. Ver saldo \n2. Extraer dinero \n0.Salir");

//     if (option == 1) {
//         alert ("tu saldo es: $7");
//     } else if (option == 2) {
//         alert ("has quedado pobre :( ")
//     } else if (option == 3) {
//         alert ("Gracias, vuelvas prontos")
//     } else{
//         alert ("el valor ingresado no corresponde a una opcion válida")
//     }

// }

//--------------------------DO WHILE--------------------------------//
// ejecuta siempre la condicion y despues la valida

//--------------------------SWITCH--------------------------------//
//Es un condicional como el IF

//detector de fauna
// let option2;

// while (option2 != 0){
//     let animal = prompt ("escriba el animal del que desea reconocer su sonido o esriba salir para finalizar ");
// // siempre tiene break!
//     switch (animal) {
//         case 'perro':
//             console.log("el perro hace 'guau guau");
//             break;
//         case 'gato':
//             console.log("el perro hace 'miau miau");
//             break;
//         case 'caballo':
//             console.log("el perro hace 'ñiiiiii prrrfffff");
//             break;
//         case 'salir':
//             console.log("gracias, espero que te hayas divertido");
//             option2 = 0;
//             break;
//         default:
//             console.log("no conozco ese animal");
//         break;
//     }
// }

//   ACTIVIDAD DE CLASES

