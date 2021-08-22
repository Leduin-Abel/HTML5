var mivideo,reproducir, barra, progreso;
maximo=600;

function comenzar(){
    mivideo=document.getElementById("mivideo")
    reproducir=document.getElementById("reproducir")
    barra=document.getElementById("barra")
    progreso=document.getElementById("progreso")

    reproducir.addEventListener("click",clicando, false);

    barra.addEventListener("click",adelantando,false);


}


function clicando(){
    /*.paused me dice si el video está pausado, .ended me dice si el video ya termino */
    /*&& es and en javascript */
    if(mivideo.paused==false && mivideo.ended==false){

        mivideo.pause()/*pausa el video */
        reproducir.innerHTML="play";
    }
    else{
        mivideo.play() /*reproduce el video*/
        reproducir.innerHTML="pause"; /*innerHTML modifica el contenido HTML, cambia el texto */
        bucle=setInterval(estado,10);/*me permite llamar cada cierto tiempo una función automticamente*/
        /*Le entran dos parametros la funcion a llamar y la frecuencia de llamado en milisegundos */
    }
}

function estado(){
    if (mivideo.ended==false){
        /* currentTime da el segundo en el que esta el video*/
        /*duration devuelve la duracion del video*/
        var total=parseInt((mivideo.currentTime*maximo)/mivideo.duration);
        progreso.style.width=total+"px";/*Modifica el estilo de la barra de progreso, en particular el ancho */
        /* + en javascript une un valor numerico con un stringk */
        


    }
}

function adelantando(posicion){
    if(mivideo.paused==false && mivideo.ended==false){

        var ratonx=posicion.pageX-barra.offsetLeft; /*pagex me devuelve la posicion en el eje ex del mouse */
        /*offsetLeft me dice cual es la distancia del borde izquierdo de la pagina hasta la barra */
        var nuevotiempo=(ratonx*mivideo.duration)/maximo;

        mivideo.currentTime=nuevotiempo;

        progreso.style.width=ratonx+"px";

    }



}


window.addEventListener("load",comenzar, false);