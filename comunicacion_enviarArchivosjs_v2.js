//SE DEBE EJECUTAR EN UN SERVIDOR REMOTO
//los archivos tambien deben estar en el servidor(html,javascript,css y todo lo demas que requiera)

function comenzar(){
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("archivos");

    //change se dispara cuando se cambia la info del boton
    boton.addEventListener("change", subir_archivos,false);
}

function subir_archivos(e){
    
    //los archivos se almacenan en un array
    var archivos=e.target.files;

    var archivo=archivos[0];

    var url="procesar_comunicacion.php";

    var solicitud = new XMLHttpRequest();

    //la subida del archivo
    var subida=solicitud.upload;

    subida.addEventListener("loadstart",comienza_barra,false);

    subida.addEventListener("progress", estado_barra ,false);

    subida.addEventListener("load",mostrar,false);

    solicitud.open("POST", url, true);

    var datos=new FormData();

    datos.append("archivo", archivo);

    solicitud.send(datos);

}

function comienza_barra(){

    zonadatos.innerHTML="<progress value='0' max='100'></progress>";

}

function estado_barra(e){

    var porcentaje=parseInt(e.loaded/e.total*100);

    var barraprogreso=zonadatos.querySelector("progress");

    barraprogreso.value=porcentaje;

    zonaprogreso.innerHTML=porcentaje+"%";

}


function mostrar(e){

    zonadatos.innerHTML="Terminado";


}



  



window.addEventListener("load",comenzar,false);