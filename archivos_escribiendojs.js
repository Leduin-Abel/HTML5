//NO FUNCIONA EN LOCAL
//Para que funcione en local se deben modificar los permisos de chrome, funciona de una si se ejecuta en un servidor remoto

function comenzar(){
    
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click", escribir_archivo, false);

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);

}

function acceso(){

    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores);
}

function crearsis(sistema){

    espacio=sistema.root;

}

function escribir_archivo(){

    var nombre=document.getElementById("archivo_origen").value;

    espacio.getFile(nombre,{create:true, exclusive:false}, function(entrada){

        //creando un objeto tipo fileWriter, recibe dos parametros, que hacer si tiene exito y que hacer si falla
        entrada.createWriter(escribir_contenido,errores);}, errores);
}


function escribir_contenido(fileWriter){

    var texto=document.getElementById("texto").value;

    //writeend se dispara cuando se termine la escritura
    fileWriter.onwriteend=exito();

    //creando el objeto blob
    //es un constructor, recibe el array donde esta la informacion y el tipo de informacion
    var blob=new Blob([texto], {type: "text/html"});
    
    //se encarga de escribir, el comando write recibe un objeto blob
    fileWriter.write(blob);

}

function exito(){
    document.getElementById("archivo_origen").value="";

    document.getElementById("texto").value="";

    zonadatos.innerHTML="Creado con exito";
}

function errores(e){

    alert("Error: " + e.code);
}







window.addEventListener("load",comenzar,false);