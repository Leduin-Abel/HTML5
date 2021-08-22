function comenzar(){
    zonadatos=document.getElementById("zonadatos");

    var archivos=document.getElementById("archivos");

    archivos.addEventListener("change",procesar,false);
}

//e es el objeto que desencadena el evento en el momento del evento
function procesar(e){
    //la propiedad files es un array que contiene los elementos seleccionado por el boton
    var archivos=e.target.files;

    //vaciando zonadatos
    zonadatos.innerHTML="";
    
    //un archivo seleccionado
    var mi_archivo=archivos[0];

    //comparando el tipo de archivo
    //la propiedad type me da el tipo de archivo que seleccione
    //type.match(/image/) chequea si el elemento es una imagen
   //exclamación es una negacion
    if(!mi_archivo.type.match(/image/)){

        alert("Selecciona una imagen");

    }else{

        //<br> es salto de linea en HTML

        // la propiedad name me da el nombre del archivo
        zonadatos.innerHTML+="Nombre del archivo: " + mi_archivo.name + "<br>";

        //La propiedad size me da el tamaño en bytes
        zonadatos.innerHTML+="Tamaño del archivo: " + Math.round(mi_archivo.size/1024) + " kb <br>";

        //creando lector de archivos
        var lector= new FileReader();

        //lee la informacion del archivo como una URL
        lector.readAsDataURL(mi_archivo);

        lector.addEventListener("load",mostrar_en_web,false);




    }



    //lee el contenido del archivo como cadena de texto, por default la almacena en UTF-8
    //el segundo parametro es la codificacion    
    //lector.readAsText(mi_archivo,"iso-8859-1");

    //cuando el lector cargue
    //lector.addEventListener("load",mostrar_en_web,false);
}

function mostrar_en_web(e){
    //el resultado del lector
    var resultado=e.target.result;

    //para textos
    //zonadatos.innerHTML=resultado;

    //para imagenes
    zonadatos.innerHTML+="<img src='" + resultado + "' width='85%' >";

    
}




window.addEventListener("load",comenzar,false);