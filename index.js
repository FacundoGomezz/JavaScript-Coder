
let opcion = parseInt(prompt("Bienvenido al sistema, ¿Que quiere hacer?: \n 1-Registro \n 2-Suma \n 3-Resta \n 4-Multiplicación \n 5-Salir"));

while(opcion !== 5){
    switch(opcion){
        case 1:        
            Registro()
            break;
        case 2:
            Suma()
            break;
        case 3:
            Resta()
            break;
        case 4:
            Multiplicación()
            break;
        default:
            alert("Acción Desconocida")
            break;
    }

    opcion = parseInt(prompt("Elija una opción: \n 1-Registro \n 2-Suma \n 3-Resta \n 4-Multiplicación \n 5-Salir"));

}

alert("Asistencia Terminada, click en ACEPTAR para cerrar")

function Registro(){

    let nombreIngresado = prompt ("ingresa un nombre de usuario válido");
    alert ("Se regristró correctamente como " + nombreIngresado)
}

function Suma(){ 
    const numero1 = parseInt(prompt("Ingrese un numero"));
    const numero2 = parseInt(prompt("Ingrese otro numero"));
    const resultado = numero1 + numero2
    alert(numero1 + " + " + numero2 + " = " + resultado)
}

function Resta(){
    const numero1 = parseInt(prompt("Ingrese un numero"));
    const numero2 = parseInt(prompt("Ingrese otro numero"));
    const resultado = numero1 - numero2
    alert(numero1 + " - " + numero2 + " = " + resultado)
}

function Multiplicación(){
    const numero1 = parseInt(prompt("Ingrese un numero"));
    const numero2 = parseInt(prompt("Ingrese otro numero"));
    const resultado = numero1 * numero2
    alert(numero1 + " * " + numero2 + " = " + resultado)
}

