//NO FUNCIONA EN LOCAL
//Para que funcione en local se deben modificar los permisos de chrome, funciona de una si se ejecuta en un servidor remorto

function comenzar(){
    
    zonadatos=document.getElementById("zonadatos");

    var boton=document.getElementById("boton");

    boton.addEventListener("click",crear,false);

    //webkit para que funcione en crome
    //requestQuota solicitando espacion en el disco duro, se le debe ingresar la cantidad en bytes
    //el segundo parametro es una funcion a llamar en caso de que se tenga exito
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);

}

function acceso(){

    //crea el sistema de archivos
    //se le debe indicar el tipo de almacenamiento, la cantidad del espacio, la funcion a llamar si se crea con exito y la funcion a llamar si hay un fallo
    //crea el objeto FileSystem cuando se crea el sistema de archivos
    window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores);
}

function crearsis(sistema){
    
    // espacio es la raiz del sistema de archivos
    //la raiz es modificable para agregar archivos
    espacio=sistema.root;
}

function crear(){

    //almacena lo escrito en la entrada
    var nombre_archivo=document.getElementById("entrada").value;

    if(nombre_archivo!=""){
        


        //devuelve un objeto  contenido dentro del directorio en el cual es llamado
        //primer parametro nombre del archivo, segundo parametro opciones(configuracion), tercer prametro funcion si todo bien y cuarto parametro funcion si algo sale mal
        //con create en true, solo la primera vez que se ejecuta crea el archivo
        //exclusive devuelve un error si el archivo ya está creado , como está en false no lo devolverá
        espacio.getFile(nombre_archivo, {create:true, exclusive:false},mostrar,errores);

        //crea un directorio
        //se debe tener un directorio para poder almacenar y leer archivos
        //espacio.getDirectory(nombre_archivo, {create:true, exclusive:false},mostrar,errores);

    }
}


function mostrar(entrada){
    
    document.getElementById("entrada").value="";

    zonadatos.innerHTML="Todo bien"

    zonadatos.innerHTML+="Nombre: " + entrada.name +"<br>";

    //fullPath devuelve la ruta
    zonadatos.innerHTML+="Ruta: " + entrada.fullPath +"<br>";

}

function errores(e){
    //e.code da el codigo del error
    alert("WARNING! SOMETHING HAS GONE WRONG. ERROR CODE: " + e.code);
}







window.addEventListener("load",comenzar,false);