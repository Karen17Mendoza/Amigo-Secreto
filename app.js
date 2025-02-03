// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [ ];
const lista = document.getElementById("listaAmigos"); 


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;;
    return;
}

function agregaUsuarios() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo === '') {
        alert('Por favor, inserte un nombre')
    } else {
        limpiarCaja();
        if(amigos.includes(nombreAmigo)) {
            alert('DUPLICADO: El nombre ya existe!');
        } else {
            amigos.push(nombreAmigo);
            console.log(amigos);
            actualizaListaDeAmigos() 

            
        }
           
    }
return; 
}

function actualizaListaDeAmigos() {
    
    lista.innerHTML = '';
    for(let i=0; i < amigos.length; i++) {
        let crearAmigo = document.createElement('li');
        lista.appendChild(crearAmigo); 
        crearAmigo.innerHTML = `${amigos[i]}`;

    }

return;
}

function limpiarCaja() {
    let valorImput = document.querySelector('#amigo');
    valorImput.value = '';
}