//este el segundo proceso que trabajará a la par que el principal

puertos=new Array();

//connect  se dispara cuando un documento web haga conexion con este documento
//crea un array(ports) de una unica posición que almacena el puerto de conexion 
addEventListener("connect", conectar, false);

function conectar(e){

    //push permite agregar info nueva en un array 
    puertos.push(e.ports[0]);

    e.ports[0].onmessage=enviar;
}


function enviar(e){

    for(f=0;f<puertos.length;f++){

        puertos[f].postMessage("EEEEEEEE: "+ e.data);
        
    }
}



