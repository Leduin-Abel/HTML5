//NO FUNCIONA EN LOCAL
//Para que funcione en local se deben modificar los permisos de chrome, funciona de una si se ejecuta en un servidor remoto

function comenzar(){
    
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click", leer_archivo, false);

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);

}

function acceso(){

    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores);
}

function crearsis(sistema){

    espacio=sistema.root;

}

function leer_archivo(){
    var nombre=document.getElementById("archivo_origen").value;

    espacio.getFile(nombre,{create:true, exclusive:false}, function(entrada){

        //file sirve para leer los archivos, el nombre y su info
        //recibe dos parametros, que hacer si tiene exito y si falla
        //genera un objeto File
        entrada.file(leer_contenido, errores);
    }, errores);
}

function leer_contenido(archivo){
    zonadatos.innerHTML="Nombre: "+ archivo.name +"<br>";

    zonadatos.innerHTML+="Tamaño: "+ archivo.size + "bytes <br>";

    var lector=new FileReader();

    lector.onload=exito;

    lector.readAsText(archivo);

}

function exito(e){

    var resultado=e.target.result;

    document.getElementById("archivo_origen").value="";

    zonadatos.innerHTML+="Contenido: " + resultado;
}

function errores(e){

    alert("Error: " + e.code);
}







window.addEventListener("load",comenzar,false);