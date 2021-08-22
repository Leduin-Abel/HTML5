function iniciar(){
    var boton=document.getElementById("boton");

    boton.addEventListener("click",enviar,false);

    window.addEventListener("message",recibir,false);

    recepcion=document.getElementById("zonarecepcion");
}

function enviar(){

    var mensaje=document.getElementById("mensaje").value;

    var iframe=document.getElementById("iframe");

    //el que envia el mensaje, le entra el mensaje a transmitir y el destino(dominio donde será transmitido)
    //con asterisco en el destino da igual en donde se encuentre
    iframe.contentWindow.postMessage(mensaje, "*")
   
    //asumiendo que tengo dominio(mejora la seguridad)
    // solo acepta mensajes que vengan desde ese servidor
   // iframe.contentWindow.postMessage(mensaje, "nombre_dominio")

}

function recibir(e){

    recepcion.innerHTML+=e.data;
}



window.addEventListener("load",iniciar,false);