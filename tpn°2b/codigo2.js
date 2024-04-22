var edad = parseInt(prompt("Ingrese la edad del alumno en años."));
var promedio = parseInt(prompt("Ingrese el prmedio del estudiante."));

if (edad>18 & promedio>=9) {
    document.write("Gracias a su alto prmedio se le dará uina beca de 2000.00 pesos.")
}
else if (edad > 18 & promedio >= 7.5 & promedio < 9) {
    document.write("Por su promedio se le dará 1000.00 pesos.");
}
else if (edad > 18 & promedio >= 6 & promedio < 7.5) {
    document.write("Por su bajo promedio solo se le dará 500.00 pesos.");
}
else if(edad>18 & promedio<6){
    document.write("No as alcanzado el minimo para la beca. <br> Sigue estudiando que en el sigiente siclo lo conseguirás.")
}


if (edad<=18 & promedio>=9) {
    document.write("Por tu edad y tu promedio se te dará una beca de 3000.00 pesos.");
}
else if (edad <= 18 && promedio >= 8 & promedio <9){
document.write("Por su edad y su promedio recibirá una beca de 2000.00 pesos");
}
else if(edad<=18 && promedio>=6 & promedio<8){
    document.write("Por su edad y su priomedio se le dará una beca de 100.00 pesos");
}
else if(edad<18 & promedio<6){
    document.write("Al no llegar al minimo de promedio para acceder a los beneficios de la beca. <br> Le incitamos que estudie más para poder recibir 3000 o 2000 o 100 pesos.")
}


