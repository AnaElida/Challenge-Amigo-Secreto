// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
let amigoGanador = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//validarcion de entrada
function agregarAmigo(){

    //Capturar valor del campo entrada
    let amigo = document.getElementById("amigo").value;  
    if (amigo == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        lista.push(amigo);
        limpiarCaja();
    }
    document.getElementById('listaAmigos').innerHTML = lista.join("<br>");
    //mostrarLista();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
function mostrarLista(){
    let lista2 = document.getElementById('listaAmigos');
    lista2.innerHTML = "";
    for (let i=0; i < lista.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = lista[i];
        lista2.appendChild(elemento);
    }
}

function sortearAmigo(){

    let resultado = document.getElementById('resultado');
    //validacion de que la lista de amigos tenga amigos
    if (lista.length == 0){
        alert("La lista  de amigos se encuentra vacia, Ingresa los nombres para hacer el sorteo!")
    }else{
        amigoGanador = Math.floor(Math.random()*(lista.length));
        resultado.innerHTML = `El amigo secreto es: ${lista[amigoGanador]}`;
    }

}