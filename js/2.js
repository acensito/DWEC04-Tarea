/* 
 * 2017 Felipe Rodríguez Gutiérrez
 *
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 *
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 *
 * No se permite un uso comercial de la obra original ni de las posibles obras 
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/* 
 * Módulo: Desarrollo Web Entorno Cliente
 * Tema 04: Gestion de eventos y formularios en JavaScript
 * Tarea 4: Merca Mona
 * Alumno: Felipe Rodríguez Gutiérrez
 */

//***************
//Inicializadores
//***************

//Cargamos los eventos
window.onload = inicio;
//Inicializamos la variable del contador de envios que se encuentra almacenada
//por localStorage
var almacenado = "";

//*******
//Eventos
//*******

/*
 * Eventos que deben iniciarse al cargarse la página
 */
function inicio(){
    //Recuperamos el valor de la variable almacenado del localStorage
    almacenado = localStorage.almacenado;
    //Si no se encuentra definida, la inicializamos a 0
    if (isNaN(almacenado) || almacenado === "undefined"){
        almacenado = 0;
    }
    
    //Evento para que lance la validación de los campos al enviar el formulario
    document.getElementById("enviar").addEventListener('click', validar);
    
    //Evento para limpiar el campo resultado si reseteamos todos los campos
    document.getElementById("reset").addEventListener('click', resetear);
}

//**********************************
//Funciones auxiliares a los eventos
//**********************************

/*
 * Funcion resetear. Resetea los valores, ya sean de los mensajes de validacion,
 * del contador de envios (lo pone completamente a 0)
 */
function resetear(){
    //Eliminamos el elemento almacenado del localStorage
    localStorage.removeItem("almacenado");
    //Eliminamos el coloreado que pueda existir en el mensaje de validacion
    document.getElementById("resultado").removeAttribute("class");
    //Eliminamos cualquier mensaje de validacion que pudiera existir
    document.getElementById("resultado").innerHTML = "";
    
    //Recorremos todos los elementos input text y le quitamos el coloreado
    var elementos = document.getElementsByTagName('input');
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type === "text") {
            elementos[i].removeAttribute("class");
        }
    }
    //Se recarga la página para eliminar los valores de localStorage bien.
    location.reload(true);
}

//************
//VALIDACIONES
//************

/*
 * Funcion valida. En este caso, sólo tenemos que validar dos campos de texto ya
 * que los demás campos solo poseen valores binarios y un campo posee valores
 * predefinidos (campo select). Válido para cualquier campo de texto ya que se
 * le pasa el elemento y el mensaje a mostrar por el sistema. Se devuelve true 
 * o false para su uso como flag de control posteriormente.
 * 
 * En los campos se han usado patrones de expresiones regulares, que permitiran
 * que se valide o no el campo.
 * 
 * Patron Producto: ^[a-zA-Z0-9áéíóóñÁÉÍÓÚÑ\s\.,;:]+$
 * 
 * ^ Desde el principio del texto
 * [a-zA-Z0-9áéíóóñÁÉÍÓÚÑ Dentro del rango de minusculas, mayusculas, números, acentuadas y Ñ
 * \s Espacios permitidos
 * \.,;:] Signos de puntuacion permitidos.
 * + Al menos una dentro de rango
 * $ Final del texto
 * 
 * 
 * Patrón peso: ^[0-9]+([\.,][0-9]{1,})?$
 * 
 * ^Desde el principio del texto
 * [0-9] al menos un numero
 * ([\.,][0-9]{1,}) Se permite un . y varios decimales sin limite, minimo un decimal
 * $ Final del texto
 */
function valida(elementoID, mensaje){
    //Vaciamos cualquier mensaje previo que pudiera existir
    document.getElementById(elementoID).setCustomValidity("");
    //Si es un campo válido, coloreamos el campo
    if (document.getElementById(elementoID).validity.valid) {
        //Se colorea el campo con colores validados
        document.getElementById(elementoID).setAttribute("class", "correcto");
        return true;
    } else {
        //Se muestra mensaje de error de validación
        document.getElementById(elementoID).setCustomValidity(mensaje);
        //Se colorea el campo con colores invalidados
        document.getElementById(elementoID).setAttribute("class", "incorrecto");
        return false;
    }
}

/*
 * Función validar. Validaremos los dos campos y si los flags de control estan
 * los dos true, lanzará mensaje feedback.
 */
function validar(){
   //Validamos el campo producto
   var flag1 = valida("producto", "El campo producto no puede estar vacio. Sólo se permite letras, números, espacio y los signos \".,;\"");
   //Validadmos el campo peso
   var flag2 = valida("peso", "El campo peso no puede estar vacío. Sólo se permiten números decimales con el uso de punto o la coma.");
   
   //Si estan true los dos, que quiere decir que esta todo validado
   if ((flag1 && flag2) === true ){
       //Se colorea el campo de resultado con colores validados
       document.getElementById("resultado").className = "perfecto";
       //Subimos uno el contador
       almacenado++;
       //Mostramos el mensaje de resultado validado
       document.getElementById("resultado").innerHTML = "Número de elementos almacenados: " + almacenado;
       //Almacenamos el contador en la memoria local
       localStorage.almacenado = almacenado;
   }
}