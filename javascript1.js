//para que no se ejecute antes que todo debe estar dentro de una función que responda ante un evento (Acción del usuario)
// function #function_name (#parameters) {#action}
function ejecuta(){

    // document.querySelector(".parrafo2").onclick=saludo;//selecciona el primer elemento que tenga el atributo

    //document.querySelector("#principal p:last-child").onclick=saludo; //con esta nomenclatura aplica a los que son hijos o descienden de principal
    
    for(var i=0;i<3;i++){
   
        //var elementos=document.querySelectorAll("#principal p")[0].onclick=saludo; //devuelve todos los elementos que tengan el atributo en array 
   
        var elementos=document.querySelectorAll("#principal p");
    
        elementos[i].onclick=saludo;
    }//el array para recorrer todos los elementos
    //si saco el elementos del for y hago i<elementos, llega hasta todos los elementos sin importar cuantos haya


    //si le aplico span a una palabra  y luego incluyo al atributo me permite aplicarle la funcion a una sola palabra

    //var z=document.getElementsByClassName("parrafo2")[0].onclick=saludo;

    // for(var i=0;i<3;i++){
    // document.getElementsByTagName("p")[i].onclick=saludo
    // } //ciclo for para recorrer todas las etiquetas p
    
    //document.getElementById("importante").onclick=saludo;

} //document es un objeto que hace referencia al documento html
//getElementsByTagName("tag")[posición] obtiene un elemento por su etiqueta, y devuelve un array con todas las etiquetas
//getElementbyID solo obtengo un unico elemento
//getElementbyClassName también devuelve array pero debe almacenarse en una variable también puedo hacer un for para recorrer todas las etiquetas

function saludo(){
    alert("Qué mas pues?")
}

//window.onload=saludo; //se ejecuta en cuanto cargue la ventana
window.onload=ejecuta //me permite llamar ejecuta