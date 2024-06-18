                //!-------   DATE   ---------*/

console.log(Math.PI)
console.log(Math.E)

//? -- MAX -- MIN */
console.log(Math.max(10,20,30,1,45,62,11));

let ventas = [10,20,30,1,45,62,11]
console.log(Math.min(...ventas)) /**"..." para eliminar array */

//? CEIL -- FLOOR -- ROUND */
let value= 248.6
console.log(Math.ceil(value)); /**REDONDEA PARA ARRIBA */
console.log(Math.floor(value));/**REDONDEA PARA ABAJO */
console.log(Math.round(value));/**REDONDEA AL MAS CERCA */

//?  -- SQRT --  */
let number = 125;

console.log(Math.round(Math.sqrt(number))); /**primero aplica la raiz y despues redondea */

//?  -- RANDOM --  */
console.log(Math.random()); /**aleatorio */
console.log(Math.random()*100); /**aleatorio hasta 100 */
console.log(Math.round(Math.random()*100)); /**aleatorio hasta 100, SIN DECIMAL */

console.log(value.toFixed(2)) /**ES EXTERNO A MATH- SELECCIONAS CUANTOS DECIMALES MUESTRA */

                //!-------   DATE   ---------*/

const nuevafecha = new Date;
console.log(nuevafecha);

const hoy = new Date();
console.log(hoy.getDay() +` - `+ hoy.getMonth());