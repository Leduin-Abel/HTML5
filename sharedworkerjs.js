function comenzar(){

   
    var boton=document.getElementById("boton");

    boton.addEventListener("click", enviar, false);

    //le entra la ruta del trabjador
    trabajador=new SharedWorker("trabajadorShared.js");

    //como es un trabajador compartido, por lo tanto, es intervenido por varias paginas, se pone a la escucha un puerto
    trabajador.port.addEventListener("message", recibido, false);

    //comienza la transmision de info a través de el puerto del archivo web correspondiente
    trabajador.port.start();
}

function enviar(){
    
    var nombre=document.getElementById("nombre").value;

    trabajador.port.postMessage(nombre);
}

function recibido(e){
    alert(e.data);
}


window.addEventListener("load",comenzar,false);