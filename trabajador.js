//este el segundo proceso que trabajará a la par que el principal

addEventListener("message",mensaje_recibido,false);

function mensaje_recibido(e){

    var respuesta="EL TEXTO escrito en el recuadro es: " + e.data;

    postMessage(respuesta);
}
