//SE DEBE EJECUTAR EN UN SERVIDOR REMOTO
//los archivos tambien deben estar en el servidor(html,javascript,css y todo lo demas que requiera)

function comenzar(){
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click",enviar_datos,false);
}

function enviar_datos(){

    el_nombre=document.getElementById("elnombre").value;

    el_apellido=document.getElementById("elapellido").value;

    //constructor del objeto FormData
    var datos = new FormData();

    //me permite agregar la info a enviar
    //le entran dos parametros, clave y valor
    datos.append("nombre", el_nombre);

    datos.append("apellido", el_apellido);

    //ruta al archivo php
    //los .php NO se pueden ejecutar en local SIEMPRE se ejecutan en servidores
    //el php se encarga de procesar lo que está dentro de las claves
    var url="procesar_comunicacion.php";

    var solicitud=new XMLHttpRequest();

    solicitud.addEventListener("load",mostrar,false);

    //post pasa la info sin usar la url
    solicitud.open("POST",url,true);

    //enviando info al servidor
    //se procesa a través del php
    solicitud.send(datos);
}




function mostrar(e){


    zonadatos.innerHTML=e.target.responseText;

}



window.addEventListener("load",comenzar,false);