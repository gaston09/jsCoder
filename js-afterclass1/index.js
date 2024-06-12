//     CAJERO AUTOMÁTICO     //

/**
 * VER SALDO
 * INGRESAR DINERO
 * RETRO PARCIAL
 * RETIRO TOTAL
 * SALIR
 */

let saldo = 0;

let option;

while (option !=0) {
    option = prompt(`
    Elija una de las siguientes opciones: 
        1. Ver saldo 
        2. Ingresar dinero 
        3. Retirar dinero 
        4. Retirar todo el dinero 
        0. Salir
    `) //comilla invertida (alt gr + tecla de "}" ) escritura multilinea
    ;

    switch (option) {
        case "1":
            alert("su saldo es: " +saldo);
            break;
        case "2":
            const moneyIn = Number(prompt("¿Cuánto dinero deseas ingresar?"));
            saldo = saldo + moneyIn;
            alert ('Has ingresado $' +moneyIn + ', tu nuevo saldo es: $' +saldo +'.');
            break;
        case "3":
            const moneyOutPartial = Number(prompt("¿Cuánto dinero deseas extraer?"));
            saldo = saldo - moneyOutPartial;
            alert ('Has retirado $' +moneyOutPartial + ', tu nuevo saldo es: $' +saldo +'.');
            break;
        case "4":
            saldoNuevo = saldo - saldo
            alert ("Has retirado todo tu dinero ($"+saldo+"). tu cuenta queda en: $" +saldoNuevo )
            break;
        case "0":
            alert ("Gracias, vuelvas prontos");
            break;
        default:
            alert('ingrese una opción válida');
            break;
        }

    }