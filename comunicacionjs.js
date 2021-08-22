//SE DEBE EJECUTAR EN UN SERVIDOR REMOTO
//los archivos tambien deben estar en el servidor(html,javascript,css y todo lo demas que requiera)

function comenzar(){
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click",leer,false);
}

function leer(){

    //direccion del archivo a leer
    //este archivo no existe, solo es para seguir el flujo de programacion
    var url="texto.txt"

    //construciion del objeto utilizado para las solicitudes
    var solicitud= new XMLHttpRequest();

    solicitud.addEventListener("load",mostrar,false);

    //con get utilizo la barra para la solicitud
    //url es la direccion del archivo
    //me pide si es sincrono o asincrono
    solicitud.open("GET",url,true);

    //la info a enviar
    solicitud.send(null);
}


function mostrar(e){

    //responseText me da la respuesta en texto 
    //en este caso sería lo leido 
    zonadatos.innerHTML=e.target.responseText;

}



window.addEventListener("load",comenzar,false);