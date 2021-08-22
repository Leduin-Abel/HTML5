function iniciar(){

    //message se dispara cuando recibe un mensaje
    window.addEventListener("message", receptor,false);


}

function receptor(e){

    
    var zonamensajes=document.getElementById("zonamensajes");

    //si tuviera dominio debería hacer la comprobacion del dominio así:
    
   /* if(e.origin=="nombre_dominio"){
     //origin me da el origen del mensaje
    zonamensajes.innerHTML+="Mensaje desde: " + e.origin + "<br>";

    //data da el mensaje
    zonamensajes.innerHTML+="Mensaje: " + e.data +"<br>";

    //source identifica de donde proviene el mensaje
    e.source.PostMessage("Mensaje recibido" + "<br>", e.origin)

    } else{
    e.source.PostMessage("¿Quien eres?" + "<br>", e.origin)
                    
    }*/

    //como no tengo dominio quedan así

    //origin me da el origen del mensaje
    zonamensajes.innerHTML+="Mensaje desde: " + e.origin + "<br>";

    //data da el mensaje
    zonamensajes.innerHTML+="Mensaje: " + e.data +"<br>";

    //source identifica de donde proviene el mensaje
    e.source.PostMessage("Mensaje recibido" + "<br>", e.origin)

}



window.addEventListener("load",iniciar,false);