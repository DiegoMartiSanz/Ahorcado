let guiones;

//evento blur es lo contrario al focus, si se va del input es cuando se genera el evento
palabra.addEventListener("blur", crearGuiones, false);
 
//funcion para cambiar las letras en guiones y ponerlo en la caja de acuertos
function crearGuiones(){
 
  aciertos.value= "-".repeat(palabra.value.length); 
  
  
  guiones=aciertos.value
}

//crea un evento cuando se levanta una tecla en el input de caracteres
caracter.addEventListener("keyup",buscarCaracter,false);

//funcion para buscar el caracter introducido en el input de caracteres
function buscarCaracter(){
 
if (caracter.value == "") {//si es null no hace nada
    return
}
;
var carcaterbuscar = caracter.value.toUpperCase();//cambia el caracter a mayusculas
var palabraA = (palabra.value).toUpperCase();//cambia la palabra a mayusculas

var posicion = palabraA.indexOf(carcaterbuscar);//busca el caracter en la palabra
var es_acierto = false;
while (posicion > -1) {//-1 no esta en la palabra se va <-1 esta en la palabra

    guiones = guiones.substring(0, posicion) + carcaterbuscar + guiones.substr(posicion + 1, guiones.length);//cambia el caracter por la posicion que ha dado en indexof y guarda todos los guiones anteriores y posteriores de la palabra
 
    aciertos.value = guiones;//lo pone en el input de acierto
 
    posicion = palabraA.indexOf(carcaterbuscar, posicion + 1);//busca si hay mas en la palabra apartir de la posicion anterior
   
    es_acierto = true;
}
if (!es_acierto) {
   fallos.innerHTML = fallos.innerHTML + carcaterbuscar + ", ";//si no esta el caracter en la palabra lo pone aqui
}
caracter.value = "";//elimina el caracter puesto para que puedas poner otro

}