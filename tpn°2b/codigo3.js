var antiguedad=parseInt(prompt("Ingrese sus años de antiguedad en la empresa."));
var sueldo=parseInt(prompt("Ingrese su sueldo en pesos."));


if (antiguedad>sueldo){
    if(antiguedad>=2 && antiguedad<5){
    let cuentabono=sueldo*1.20;
    document.write("Por su antiguedad recibirá un bono del 20%. <br> Su bono será de ", cuentabono);
}else if(antiguedad>=5){
    cuentabono=sueldo*1.30;
    document.write("Por su antigudad recibirá un bono del 30%. <br> Su bono será de ", cuentabono);
} 
}


if (sueldo>antiguedad){
    if(sueldo<1000){
        let cuentabono2=sueldo*1.25;
        document.write("Por su sueldo recibirá un bono del 25%. <br> Su bono será de ",cuentabono2);
    }
    else if(sueldo>=1000 && sueldo<=3500){
        cuentabono2=sueldo*1.15;
        document.write("Por su sueldo se le otorgará un bono de 15%. <br> Su bono será de ", cuentabono2);
    }
    else if(sueldo>3500){
        cuentabono2=sueldo*1.10;
        document.write("Por su sueldo se le otorgará un bono de 10%. <br> El bono es de ",cuentabono2);
    }
}