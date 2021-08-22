//NO FUNCIONA EN LOCAL
//Para que funcione en local se deben modificar los permisos de chrome, funciona de una si se ejecuta en un servidor remorto
//se debe tener un directorio para poder almacenar y leer archivos

//con este codigo solo observa la raiz y no veo los demas directorios


function comenzar(){
    
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click",crear,false);

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);

}

function acceso(){

    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores);
}

function crearsis(sistema){

    espacio=sistema.root;
    
    //ruta del directorio
    ruta="";

    mostrar();
}

function crear(){
    var  nombre_archivo=document.getElementById("entrada").value;

    if(nombre_archivo!=""){
        nombre_archivo=ruta+nombre_archivo;

        espacio.getFile(nombre_archivo,{create:true, exclusive:false},mostrar,errores);

    }

}

function mostrar(){
    document.getElementById("entrada").value="";

    zonadatos.innerHTML="";

    //primer parametro ruta, segundo parametro opciones(configuracion), tercer prametro funcion si todo bien y cuarto parametro funcion si algo sale mal
    // opciones en null es que voy a acceder a algo ya creado
    //devuelve un objeto que contiene el directorio donde nos encontramos
    espacio.getDirectory(ruta,null,leerdir,errores);


}

function leerdir(dir){

    //creac un objeto DirectoryReader
    lector=dir.createReader();

    leer();
}

function leer(){

    //lee las entradas
    //tiene dos parametros, que hacer si todo sale bien, que hacer si algo sale mal
    lector.readEntries(function(archivos){

        //de esta manera pregunto si hay por lo menos un elemento en el array
        if(archivos.length){

            //los archivos se guardan en el disco duro en forma de array
            listar(archivos);
        }
    }, errores);
}

function listar(archivos){
    for (var i=0; i<archivos.length; i++){

        //pregunta si es un archivo
        if(archivos[i].isFile){

            zonadatos.innerHTML+=archivos[i].name +"<br>"

        }
        //pregunta si es un directorio
        else if(archivos[i].isDirectory){
            
            //span es una etiqueta html que no le da formato
            zonadatos.innerHTML+="<span class='directorio'>" +archivos[i].name + "</span><br>";

        }
    }
}

function errores(e){

    alert("Error: " + e.code);
}







window.addEventListener("load",comenzar,false);