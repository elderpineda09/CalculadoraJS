let resultado = document.getElementById("resultado");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let reset = document.getElementById("reset");
let suma =document.getElementById("suma");
let resta =document.getElementById("resta");
let multiplicar =document.getElementById("multiplicar");
let dividir =document.getElementById("dividir");
let porcentaje = document.getElementById("porcentaje");
let masmenos = document.getElementById("masmenos");



/**/ 
let operacion = 0; 
let bandera = true;
let bandera2 = false;
let total = 0;
let total2 = 0;
let operador;

uno.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="1";
            }else{
                resultado.textContent=resultado.textContent+"1";
            }
          }
        
    }else{

        resultado.textContent="1";
        bandera=true;

    }

}

dos.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="2";
            }else{
                resultado.textContent=resultado.textContent+"2";
            }
          }
        
    }else{

        resultado.textContent="2";
        bandera=true;

    }

}

tres.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="3";
            }else{
                resultado.textContent=resultado.textContent+"3";
            }
          }
        
    }else{

        resultado.textContent="3";
        bandera=true;

    }

}

cuatro.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="4";
            }else{
                resultado.textContent=resultado.textContent+"4";
            }
          }
        
    }else{

        resultado.textContent="4";
        bandera=true;

    }

}

cinco.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="5";
            }else{
                resultado.textContent=resultado.textContent+"5";
            }
          }
        
    }else{

        resultado.textContent="5";
        bandera=true;

    }

}

seis.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="6";
            }else{
                resultado.textContent=resultado.textContent+"6";
            }
          }
        
    }else{

        resultado.textContent="6";
        bandera=true;

    }

}

siete.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="7";
            }else{
                resultado.textContent=resultado.textContent+"7";
            }
          }
        
    }else{

        resultado.textContent="7";
        bandera=true;

    }

}

ocho.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="8";
            }else{
                resultado.textContent=resultado.textContent+"8";
            }
          }
        
    }else{

        resultado.textContent="8";
        bandera=true;

    }

}

nueve.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent=="0") {
                resultado.textContent="9";
            }else{
                resultado.textContent=resultado.textContent+"9";
            }
          }
        
    }else{

        resultado.textContent="9";
        bandera=true;

    }

}

punto.onclick = function (e) {
    if (resultado.textContent.indexOf(".")<1) {

        if (bandera) {

            if(resultado.textContent.length<8){
                if (resultado.textContent=="0") {
                    resultado.textContent="0.";
                }else{
                    resultado.textContent=resultado.textContent+".";
                }
              }
        }else{
    
            resultado.textContent=".";
            bandera=true;
    
        }
        
    }


}





cero.onclick = function (e) {
    if (bandera) {

        if(resultado.textContent.length<8){
            if (resultado.textContent!="0") {
                resultado.textContent=resultado.textContent+"0";
            }
        }
        
    }else{

        resultado.textContent="0";

    }

}

suma.onclick = function (e) {

        if (bandera2) {

            total2 = parseFloat(operacion) + parseFloat(resultado.textContent);
            resultado.textContent=total2;
            
        }
    operacion = parseFloat(resultado.textContent);
    operador = "+";
    bandera = false;    
    bandera2=true;
}

resta.onclick = function (e) {

    if (bandera2) {

        total2 = parseFloat(operacion) - parseFloat(resultado.textContent);
        resultado.textContent=total2;
        
    }
operacion = parseFloat(resultado.textContent);
operador = "-";
bandera = false;    
bandera2=true;
}

multiplicar.onclick = function (e) {

    if (bandera2) {

        total2 = parseFloat(operacion) * parseFloat(resultado.textContent);
        resultado.textContent=total2;
        
    }
operacion = parseFloat(resultado.textContent);
operador = "*";
bandera = false;    
bandera2=true;
}

dividir.onclick = function (e) {

    if (bandera2) {

        total2 = parseFloat(operacion) / parseFloat(resultado.textContent);
        resultado.textContent=total2;
        
    }
operacion = parseFloat(resultado.textContent);
operador = "/";
bandera = false;    
bandera2=true;
}

porcentaje.onclick = function (e) {
    resultado.textContent = parseFloat(resultado.textContent) / 100;

    bandera = true;
    bandera2 = false;
}

masmenos.onclick = function (e) {
    resultado.textContent = parseFloat(resultado.textContent) * -1;

    bandera = true;
    bandera2 = false;
}


igual.onclick=function (e) {
    switch (operador) {
        case "+":
            total = parseFloat(operacion) + parseFloat(resultado.textContent);
            break;
        
        case "-":
            total = parseFloat(operacion) - parseFloat(resultado.textContent);
            break;

        case "*":
            total = parseFloat(operacion) * parseFloat(resultado.textContent);
            break

        case "/":
            total = parseFloat(operacion) / parseFloat(resultado.textContent);
            break
    
        default:
            break;
    }
    resultado.textContent=total;
    bandera2=false;
    bandera=true;
}

reset.addEventListener('click',limpiar);
function limpiar() {
    resultado.textContent="0";
    operacion = 0; 
    bandera = true;
    bandera2 = false;
    total = 0;


}



