
//Declaración de variables
let limiteNumeroSecreto= parseInt(prompt("Ingrese el límite del juego"));
let numeroSecreto = Math.floor(Math.random()*limiteNumeroSecreto)+1 ;
let numeroUsuario = 0;
let intentos = 1 ; 
let maximosIntentos=5;

//Procedimiento
while (numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${limiteNumeroSecreto} por favor`));
  
    if (numeroUsuario == numeroSecreto){
        alert(`Muy bien, el número es: ${numeroSecreto}, acertaste al intento ${intentos}`)

    }else{
        if (numeroSecreto > numeroUsuario){
            alert(`El número secreto es mayor, intento: ${intentos}`)
        }else{
            alert(`El número secreto es menor, intento: ${intentos}`)
        }
    }
    intentos++;
    if (intentos > maximosIntentos){
        alert(`Llegaste al número máximo de ${maximosIntentos} intentos, el número correcto es ${numeroSecreto}`)
        break;
    }
    
}