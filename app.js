// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [ ];
const lista = document.getElementById("listaAmigos"); 
const amigoElegido = document.getElementById("resultado");

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

function sortearAmigo() {
    if(amigos.length > 0){
        lista.innerHTML = '';
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        let amigoFinal = amigos[amigoSorteado];
        console.log(amigoFinal);
        amigoElegido.innerHTML = `${amigoFinal} es tu amigo secreteo`;        
    } else {
        alert('No se sorteo ningun amigo');
    }
return;
}

function limpiarCaja() {
    let valorImput = document.querySelector('#amigo');
    valorImput.value = '';
}
