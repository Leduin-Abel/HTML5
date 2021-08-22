//NO FUNCIONA EN LOCAL
//Para que funcione en local se deben modificar los permisos de chrome, funciona de una si se ejecuta en un servidor remoto

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

    origen=ruta+origen;

    //para eliminar archivos
   /* espacio.getFile(origen,null,function(archivo){

        //remove se encarga de borrar archivos , le entran dos parametros, que hacer si tiene exito y que hacer si falla
        archivo.remove(exito,errores);
    }, errores);*/

    //para eliminar directorios
    espacio.getDirectory(origen,null,function(archivo){

        //removeRecursively se encarga de borrar directorios , le entran dos parametros, que hacer si tiene exito y que hacer si falla
        archivo.removeRecursively(exito,errores);
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