function comenzar(){

    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click", enviar, false);

    //creacion de objeto tipo worker que es el que lleva la informacion entre procesos paralels
    //le entra el codigo js del worker
    trabajador=new Worker("trabajador.js");

    trabajador.addEventListener("message", recibido, false);
}

function enviar(){
    var nombre=document.getElementById("nombre").value;

    trabajador.postMessage(nombre);

}

function recibido(e){
    zonadatos.innerHTML=e.data
}

window.addEventListener("load",comenzar,false);