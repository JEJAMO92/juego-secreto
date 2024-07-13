let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' } `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

// funcion de limpiar:
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles'); // CONDICION DE SALIDA.
    
    }else{
        // si el numero generado esta en la lista hacemos una operacion, sino hacemos otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }   
 
} 

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja:
    limpiarCaja();
    // indicar mensaje de intervalo de numeros:
    // Generar el numero aleatório:
    // Inicializar el numero de intentos:
    condicionesIniciales();
        
    // Deshabilitar el boton de Nuevo Juego:
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

//https://app.aluracursos.com/course/logica-programacion-explorar-funciones-listas/task/86103¨