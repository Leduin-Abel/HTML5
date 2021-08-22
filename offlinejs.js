function comezar(){

    //objeto de cache de aplicacion
    var cache=window.applicationCache;

    //evento error se dispara cuando se produzca un error en la descarga
    cache.addEventListener("error",errores, false);
}

function errores(){
    alert("no se puede mi fai");
    
}

window.addEventListener("load", comenzar, false);