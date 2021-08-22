//SE DEBE EJECUTAR EN UN SERVIDOR REMOTO
//los archivos tambien deben estar en el servidor(html,javascript,css y todo lo demas que requiera)

function comenzar(){
    zonadatos=document.getElementById("zonadatos");

    zonaprogreso=document.getElementById("zonaprogreso");


    var boton=document.getElementById("boton");

    boton.addEventListener("click",leer,false);
}

function leer(){

    //este archivo no existe, solo es para seguir el flujo de programacion
    var url="video_prueba.mp4"

    var solicitud= new XMLHttpRequest();

    //loadstart es el inicio de la carga del archivo
    solicitud.addEventListener("loadstart", comienza_barra, false);

    //se dispara periodicamente(approx cada 50ms) cada que el servidor reciba mas data
    solicitud.addEventListener("progress", estado_barra,false);

    solicitud.addEventListener("load",mostrar,false);

    solicitud.open("GET",url,true);


    solicitud.send(null);
}

function comienza_barra(){

    //crea una barra de progreso 
    zonadatos.innerHTML="<progress value='0' max='100'></progress>"

}

function estado_barra(e){
    //parseInt es la parte entera
    //e.loaded hace referencia al tamaño total del archivo
    //e.total hace referencia al total descargado en un momento concreto
    var porcentaje=parseInt(e.loaded/e.total*100);

    var barraprogreso=zonadatos.querySelector("progress");

    barraprogreso.value=porcentaje;

    zonaprogreso.innerHTML=porcentaje+"%";
}


function mostrar(e){


    zonadatos.innerHTML="Archivo leido";

}



window.addEventListener("load",comenzar,false);