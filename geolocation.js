function comenzar(){

    var miboton=document.getElementById("dame_ubicacion")
    miboton.addEventListener("click",obtener,false);
}

function obtener(){

    //obtener la geolocalización
    //navigator es el navegador

    //geolocation.getCurrentPosition(Llamada_exitosa,error_en_llamada,configuración) solo la primera funcion es obligatoria
    //devuelve un objeto que tiene nuestra posicion(objeto position)

    //la configuración tiene tres propiedades enableHighAccuracy(booleano), permite alta exactitud(por defecto es false)
    //Timeout tiempo en milisegundos para obtener la localización, si falla se obtiene TIMEOUT
    //maximumAge determina si obtiene la localizacion del caché(la ubicacion debió haber sido obtenida en menos tiempo que el especificado)

    var parametros={enableHighAccuracy:true, timeout:10000, maximumAge:60000};
    //navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores, parametros);

    //utilizando WatchPosition
    //con watchPosition el maximumAge es cada cuanto se actualiza la posición del usuario
    navigator.geolocation.watchPosition(mostrar_posicion, gestion_errores, parametros);

}

function mostrar_posicion(posicion){

    var ubicacion=document.getElementById("ubicacion");

    //sin utilizar la api de google MAps
    //position.coords.latitude devolvera la latitud
   // var latitud="Latitud: " + posicion.coords.latitude;
     
   /* var miubicacion="";

    //+= es incremento y concatenacion
    miubicacion+="Latitud: " + posicion.coords.latitude + "<br>";

    //longitude es longitud
    miubicacion+="Longitud: " + posicion.coords.longitude + "<br>";

    //accuracy es la exactidud(margen de error en metros de longitud y latitud)
    miubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>";

    ubicacion.innerHTML=miubicacion;
    */

    //con la api de google maps

    var mimapa="http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&marker=" + posicion.coords.latitude + "," + posicion.coords.longitude; 
    

    ubicacion.innerHTML="<img src='" + mimapa + "'>";

}

function gestion_errores(error){
    //error.code me da el codigo del error
    //error.message me da el mensaje del error
    //alert("Ha habido un error " + " " + error.code + " " + error.message);

    //utilizando propiedad message
   /* if(error.message=="User denied Geolocation"){
        alert("Cra dejeme ver donde esta :'v")
    }*/

    //Utilizando propiedad code
    if(error.code=="1"){
        alert("Cra dejeme ver donde esta :'v")
    }
}


window.addEventListener("load",comenzar,false);