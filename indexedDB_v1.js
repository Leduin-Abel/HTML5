// JavaScript Document
var bd;
function iniciar(){
	
	zonadatos=document.getElementById("zonadatos");
    
    //sin var es una variable que se puede utilizar fuera de las llaves
	boton=document.getElementById("grabar");
	
	boton.addEventListener("click",agregarobjeto, false);
    
    //con var la variable solo funciona dentro de las llaves
    //con esto abro la base de datos
	var solicitud=indexedDB.open("mibase");
    
    //se ejecuta la funcion si la base se crea con exito, gracias al onsuccess
	solicitud.onsuccess=function(e){
        
        //con esto almaceno la base de datos
		bd=e.target.result;
		
				
	}
    
    //creando el almacen de objetos(lo que serían las tablas de datos)
    //onupgradeneeded=si se necesitan actualizaciones
	solicitud.onupgradeneeded=function(e){
		
                bd=e.target.result;
        
        //crea el almacen de datos, los parametros son("nombre de almacen", campoclave)
		bd.createObjectStore("gente", {keyPath: "clave"});
		
	}	
	
}

function agregarobjeto(){


	//Rescatando la info de los recuadros
	var clave=document.getElementById("clave").value;
	var titulo=document.getElementById("texto").value;
	var Fecha=document.getElementById("fecha").value;
	
	//debo crear una transaccion para poder acceder al almacén
	//puedo realizar tres acciones, lectura(readonly) y lectoescritura(readwrite)
	//.transaction me pide el nombre del almacen de datos y la accion a realizar
	var transaccion=bd.transaction(["gente"], "readwrite");
	
	//aquí se almacena la transacción
	var almacen=transaccion.objectStore("gente");
	
	//.add me permite agregar info al almacen
	//me pide la información que deseo agregar ({nombre campo: informacion a agregar)
	var agregar=almacen.add({clave: clave, titulo: titulo, Fecha: Fecha});
	
	agregar.addEventListener("success", mostrar, false);
	
	//reseteando campos de ingreso
	document.getElementById("clave").value=""
	document.getElementById("texto").value=""
	document.getElementById("fecha").value=""
}

function mostrar(){
	
	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["gente"],"readonly");
	
	var almacen=transaccion.objectStore("gente");
	
	//Creacion cursor
	//indica en que registro nos encontramos del almacén
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatos, false);	
	
}

function mostrarDatos(e){
	
	var cursor=e.target.result;
	
	//si el cursor está abierto
	if(cursor){
		
		zonadatos.innerHTML+="<div>" + cursor.value.clave + " - " + cursor.value.titulo + " - " + cursor.value.Fecha + "</div>";
		
		//avanza el cursor a la siguiente posición en la dirección
		cursor.continue();
		
		
	}
	
	
	
}





window.addEventListener("load", iniciar, false);


