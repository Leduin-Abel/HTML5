
function comenzar(){

    var boton=document.getElementById("grabar");

    boton.addEventListener("click",itemNuevo,false);


}

function itemNuevo(){

    var clave=document.getElementById("clave").value;

    var valor=document.getElementById("valor").value;

    //sessionStorage es un objeto que guarda la info de sesion, es decir mientras la pestaña este abierta

    //setItem guarda la información, guarda la clave y el valor del item
    //sessionStorage.setItem(clave,valor);

    //localStorage sirve para que se almacene la info de forma indefinida(limite de 5MB)
    localStorage.setItem(clave,valor);

    //otra sintaxis
    //sessionStorage[clave]=valor;

    //le paso el parametro de la clave
    leer_mostrar(clave);

    //reseteo la clave y el valor
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";


}

function leer_mostrar(clave){

    var zonadatos=document.getElementById("zonadatos");

    zonadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar todo</button></div>';
    //obtiene la informacion guardada
   // var elvalor=sessionStorage.getItem(clave);

   //otra sintaxis
    //var elvalor=sessionStorage[clave];

    //para ver todos los datos, sin estas instrucciones solo muestra el ultimo dato
    //zonadatos.innerHTML="";

    for(i=0;i<localStorage.length;i++){
        //el metodo key accede a las diferentes posiciones del objeto
        var clave=localStorage.key(i);

        var elvalor=localStorage.getItem(clave);

        zonadatos.innerHTML+='<div>Clave: '+ clave + '--' + 'Valor: ' + elvalor +  '<br><button onclick="eliminarItem(\''+ clave + '\')">Eliminar</button></div>';

    }

    //Solo con esta instruccion  y sin el bucle for , me muestra solo el ultimo valor almacenado
    //zonadatos.innerHTML="<div>Clave: " + clave + "--" + "Valor: " + elvalor +  "</div>";

}

function eliminarTodo(){

    //Sale un cuadro confrimando
    if(confirm("Seguro?")==true){
        
        //borra toda la info guardada
        localStorage.clear();

        leer_mostrar();


    }

}

function eliminarItem(clave){

    //Así es lo mismo que ==true
    if(confirm("Seguro?")){

        //borra el item
        localStorage.removeItem(clave);
        
        leer_mostrar();
    }
}



window.addEventListener("load",comenzar,false);