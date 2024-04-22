var tiempo=parseInt(prompt("Ingrese la cantidad de horas de uso del estacionamiento."));

if (tiempo<=2){
    let cuenta=tiempo*5.00
    document.write("El precio a pagar por el uso del estacionamiento es de ",cuenta," pesos.");
}
else if (tiempo<=5 && tiempo>2){
let hora2=2*5
let hora5=(tiempo-2)*4;
let suma= hora2+hora5;
    document.write("El precio a pagar por el uso del estacionamiento es de ",suma," pesos.");
}
else if (tiempo<=10 && tiempo>5){
    hora2=2*5;
    hora5=3*4;
    let hora10=(tiempo-5)*3;
    suma=hora2+hora5+hora10;
    document.write("El precio a pagar por el uso del estacionamiento es de ",suma," pesos.");
}
else if(tiempo>10){
    hora2=2*5;
    hora5=3*4;
    hora10=5*3;
    let despues10=(tiempo-10)*2;
    suma=hora2+hora5+hora10;
    document.write("El precio a pagar por el uso del estacionamiento es de ",suma," pesos.");
}