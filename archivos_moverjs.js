//NO FUNCIONA EN LOCAL
//Para que funcione en local se deben modificar los permisos de chrome, funciona de una si se ejecuta en un servidor remoto

//el archivo a mover dentro de un directorio diferente a la raiz es "directorio/elemento", si estuviera en la raiz solo seria "elemento"
//la direccion de la raiz es dejar en blanco, el programa lo entiende como la raiz





function comenzar(){
    
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click",modificar,false);

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);

}

function acceso(){

    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores);
}

function crearsis(sistema){

    espacio=sistema.root;

    ruta="";

    mostrar();
}

function modificar(){
    var origen=document.getElementById("archivo_origen").value;

    var destino=document.getElementById("directorio_destino").value;

    espacio.getFile(origen,null,function(archivo){

        espacio.getDirectory(destino,null,function(directorio){

            //moveTo es como cortar
            //le entran cuatro parametros primero el directorio destino, nuevo nombre si al archivo se le modifica el nombre(opcional)
            //que hacer si tiene exito y que hacer si falla(opcionales)
            archivo.moveTo(directorio, null, exito, errores);
            //copyTo sería como copiar y tiene los mismos parametros que moveTo
        }, errores);
    }, errores);

}

function exito(){
    
    document.getElementById("archivo_origen").value="";
    document.getElementById("directorio_destino").value="";

    mostrar();


}

function mostrar(){
    document.getElementById("archivo:origen").value="";

    zonadatos.innerHTML="";


    espacio.getDirectory(ruta,null,leerdir,errores);


}

function leerdir(dir){


    lector=dir.createReader();

    leer();
}

function leer(){


    lector.readEntries(function(archivos){


        if(archivos.length){

            listar(archivos);
        }
    }, errores);
}

function listar(archivos){
    for (var i=0; i<archivos.length; i++){


        if(archivos[i].isFile){

            zonadatos.innerHTML+=archivos[i].name +"<br>"

        }

        else if(archivos[i].isDirectory){
            

            zonadatos.innerHTML += "<span onclick='cambiardir(\"" + archivos[i].name + "\")' class='directorio'>" + archivos[i].name + "</span><br>";
               
            
        }
    }
}

function cambiardir(nuevaruta){

    ruta = ruta + nuevaruta +"/";
    mostrar();
    
   
}



function errores(e){

    alert("Error: " + e.code);
}







window.addEventListener("load",comenzar,false);