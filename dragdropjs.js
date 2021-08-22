
var elem_origen;

var elem_destino;

function comenzar(){
    elem_origen=document.getElementById("imagen");

    //evento dragstart es inicio de arrastrar el elemento
    //elem_origen.addEventListener("dragstart", function() {alert("Comenzó el evento");},false);

    //dragend es el final del arrastrado
    //elem_origen.addEventListener("dragend", function() {alert("Terminó el evento");},false);

    //drag es durante el arrastrado
    //elem_origen.addEventListener("drag", function() {alert("Está pasando el evento");},false);

    elem_origen.addEventListener("dragstart",comenzamos_arrastrar,false);

    elem_destino=document.getElementById("zonadestino")

    //evento dragenter es cuando el raton entre en una zona de destino valida
   /* elem_destino.addEventListener("dragenter",function(e){
       //cancela eventos;previene que la accion por defecto se ejecute
        e.preventDefault();
    }, false);*/

    //dragover, cuando pase el elemento arrastrado por una zona de destino valida
    elem_destino.addEventListener("dragover",function(e){

        e.preventDefault();
    },false);

    //cuando un elemento es soltado en una zona de soltado valida
    elem_destino.addEventListener("drop",soltado,false);

    elem_origen.addEventListener("dragend",terminado,false);

    elem_destino.addEventListener("dragenter",entrando,false);

    //El evento dragleave es cuando el raton abandona la zona de destino valida
    elem_destino.addEventListener("dragleave",saliendo,false);
}

function comenzamos_arrastrar(e){
    //getAtribute me regresa un atributo
    var codigo="<img src='"+ elem_origen.getAttribute("src")+"'>";
    //var codigo = "<img src='" + elem_origen.getAttribute("src") + "'>";
    //setData determina el tipo de datos y el dato a transferir
    e.dataTransfer.setData("Text",codigo);
}

function soltado(e){
    e.preventDefault();

    //getData establece el tipo de datos
    elem_destino.innerHTML=e.dataTransfer.getData("Text");
}
function terminado(e){
    var elemento=e.target;

    //haciendo la imagen invisible
    elemento.style.visibility="hidden";
}

function entrando(e){
    e.preventDefault();

    elem_destino.style.background="rgba(8,252,25,0.8)";
}

function saliendo(e){
    e.preventDefault();
    //elem_destino.style.background="#FFFFFF";
    elem_destino.style.visibility="hidden";

}
window.addEventListener("load",comenzar,false);
