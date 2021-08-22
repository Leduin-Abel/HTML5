function comenzar(){

    trabajador=new SharedWorker("trabajadorShared.js");

    trabajador.port.addEventListener("message",recibido,false);

    trabajador.port.start();
}

function recibido(e){
    zonadatos=document.getElementById("zonadatos");

    zonadatos.innerHYML=e.data;
}

window.addEventListener("load",comenzar,false);