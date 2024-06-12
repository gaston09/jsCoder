                                            //*!-------- PRESENTACION Y MENÚ ---------- */

alert ("bienvenido a SmartMove, espero que tengas una experiencia agradable")

let user = prompt ("Ingrese su nombre: ")    
while (user == ""){
    alert("el nombre del usuario no puede quedar vacío");
    user = prompt ("Ingrese su nombre: ");
}
let edad = Number(prompt("¿Qué edad tienes?"));
if (edad > 18 && edad <100){
    alert ("Bienvenido " + user + ", espero que puedas encontrar lo que buscabas");

    /* Generamos la funcion */
    function encargoProducto(){
        total = valor * cantidad
        return total
    }
    
    let option = Number(prompt(user + `, ¿cómo puedo ayudarte? Elegí el suplemento que estas buscando: 
    1. Proteinas Ena x1kg : $26000-
    2. Creatina Ena x300g: $12000-
    3. Gainer Ena x1kg: $35000
    0. Salir`));
    
    let valor = 0;
    let cantidad = 0

    /**Tengo que usar objetos aca */

    if (option == 1){
        valor = 26000;
        cantidad = Number(prompt("cuantas unidades deseas?"))
        if (cantidad > 0){
        alert ("el total de tu compra es: $" +encargoProducto(valor,cantidad));
        alert("gracias por su compra, en breve preparamos el pedido");
        }else{
            alert("cantidad no vàlida, vuelva a realizar el pedido")
        }
    }else if (option ==2){
        valor = 12000;
        cantidad = Number(prompt("cuantas unidades deseas?"))
        if (cantidad > 0){
        alert ("el total de tu compra es: $" +encargoProducto(valor,cantidad));
        alert("gracias por su compra, en breve preparamos el pedido");
        }else{
            alert("cantidad no vàlida, vuelva a realizar el pedido")
        }
    }else if (option ==3){
        valor = 35000;
        cantidad = Number(prompt("cuantas unidades deseas?"))
        if (cantidad > 0){
        alert ("el total de tu compra es: $" +encargoProducto(valor,cantidad));
        alert("gracias por su compra, en breve preparamos el pedido");
        }else{
            alert("cantidad no vàlida, vuelva a realizar el pedido")
        }
    }
}else{
    alert("Disculpe " + user + ", estos productos no son recomendados para su edadr")
}

                            /*Objetos */

function agregaStock(){
    let agregar = Number(prompt("cuantos productos ingresaron?: "))
    return agregar
}

function venderItem (){
    let vender = Number(prompt("cuantos productos se vendieron?: "))
    return vender
}

class Productos{
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = Number(stock)
    }
    reponer() {
        this.stock = this.stock + agregaStock();
    }
    vendido(){
        this.stock = this.stock - venderItem();
    }
}

const producto1 = new Productos ("Proteina ENA",9000,0);
const producto2 = new Productos ("Proteina Star N",16000,0);
const producto3 = new Productos ("Gainer ENA",12000,0);
const producto4 = new Productos ("Animal Pak",24000,0);




producto1.reponer();
producto1.vendido();
console.log("hay: " + producto1.stock +" "+producto1.nombre+ " en el inventario");
producto2.reponer();
console.log(producto2);
console.log(producto3);

console.log(producto4);


