
let nota1
let nota2
let nota3

function notaFinal(n1, n3, n3){
    nombre =prompt("ingrese el nombre del alumno");
    n1 = Number(prompt("ingrese la primera nota: "));
    n2 = Number(prompt("ingrese la segunda nota: "));
    n3 = Number(prompt("ingrese la tercera nota: "));
    promedio = (n1 + n2 + n3)/3
    return promedio
};
    if (nota1  <= 0 || nota1  <= 0 || nota3 <= 0 ){
        alert("Disculple, las notas no pueden ser menor a 0")
    }else if (isNaN(nota1)||isNaN(nota2)||isNaN(nota3)){
        alert ("Debe ingresar valores numèricos")
    }else(alert("el promedio de " + nombre + " es: " + notaFinal() + " ya que obtuvo las siguientes calificaciones: "+ nota1 + ", " + nota2 +" y "+ nota3)
    );
