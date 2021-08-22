function comenzar(){
    zonadatos=document.getElementById("zonadatos");

    url=document.getElementById("url");

    url.addEventListener("click",cambiaurl,false);

    //evento popstate se dispara cuando hay el usuario cambia de una pagina a otra
    window.addEventListener("popstate",nuevaurl,false);

    //permite modificar entradas en el historial, sigue la misma sintaxis que pushState
    window.history.replaceState(1,null);

}

function cambiaurl(){

    zonadatos.innerHTML="Estas en la página 2";

   /* //anexa un registro en el hsitorial del navegador
    //le entran 3 parametros, el estado, el titulo de la pagina y la url de la pagina
    //como el ejemplo es tan sencillo no es necesario los primeros dos
    window.history.pushState(null,null,"pagina2.html");*/


    mostrar(2);

    window.history.pushState(2,null,"pagina2.html");
}

function nuevaurl(e){

    mostrar(e.state);
}

function mostrar(actual){

    zonadatos.innerHTML="Estás en la pagina: " + actual;
}


window.addEventListener("load",comenzar,false);