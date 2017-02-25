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

//Llamamos a los eventos de inicio de la página
window.onload = inicio;
//Inicializamos la variable que indicará el input elegido a limpiar
var elegido = "";

//*******
//Eventos
//*******

/*
 * Eventos que deben iniciarse al cargarse la página
 */
function inicio(){
    //Evento al pulsar el boton de limpiar campo
    document.getElementById("limpiar").addEventListener('click',limpiar);
    
    //Obtenemos todos los elementos de tipo input del formulario
    var elementos = document.getElementsByTagName('input');
      
    //Recorremos todos los elementos input para añadirle un evento click para 
    //que devuelva a una variable el elemento seleccionado a eliminar. Sólo se
    //recorrerán los elementos de tipo texto y de tipo password.
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type === "text" || elementos[i].type === "password") {
            elementos[i].addEventListener("click", activo);
        }
    }
    //Evento para que lance la validación de los campos al hacer click en enviar
    document.getElementById("enviar").addEventListener('click', validar);
    
    //Evento para limpiar todos los campos si hacemos click en resetear
    document.getElementById("reset").addEventListener('click', resetear);
    
    //Evento para añadir/quitar el punto al obtener o perder el foco el campo nombre
    document.getElementById("nombre").addEventListener('focus', punto);
    document.getElementById("nombre").addEventListener('blur', punto);
    
    //Evento que cuenta los carácteres introducidos y cuando supere o queden menos de lo establecido
    //se cambiará el texto a rojo
    document.getElementById("apellido1").addEventListener('keypress', cuentaCaracteres);
    
    //Evento para la primera letra como mayúscula al perder el foco
    document.getElementById("apellido2").addEventListener('blur', capital);
}

//**********************************
//Funciones auxiliares a los eventos
//**********************************

/**
 * Funcion activo, que hará almacenar el ultimo input que ha recibido foco
 */
function activo(){
    elegido = document.activeElement.id;
}
        
/**
 * Función limpiar que se encargará de limpiar el valor del campo elegido
 */
function limpiar(){
    if (elegido !== "") {
        //Limpiamos el campo asignandole el valor vacio
        document.getElementById(elegido).value = "";
        //Le devolvemos el foco a dicho campo, asi parecerá que no se ha perdido
        //en ningun momento
        document.getElementById(elegido).focus();
    }
}

/**
 * Funcion resetear que al limpiar el formulario, limpia el cuadro de resultados
 */
function resetear(){
    //Quitamos los atibutos que le dan color al mensaje de resultado por si 
    //existiera uno previo
    document.getElementById("resultado").removeAttribute("class");
    //Vaciamos el contenido del texto del mensaje de resultado por si existiera 
    //uno previo
    document.getElementById("resultado").innerHTML = "";
    
    //Quitamos los atributos que le dan color a los campos de resultado por si
    //estuvieran coloreados previamente
    var elementos = document.getElementsByTagName('input');
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type === "text" || elementos[i].type === "password") {
            elementos[i].removeAttribute("class");
        }
    }
}

/*
 * Función punto. Añade un punto al salir del campo. Al entrar en este, si existiera
 * uno previo lo retiraría para poder continuar escribiendo.
 * 
 */
function punto(){
    //Obtenemos el valor del campo
    var texto = document.getElementById("nombre").value;
    //Si existe texto en el campo, se actua solamente.
    if (texto !== ""){
        //Comprobamos si existe un punto al final. Si es asi, se elimina.
        if (texto.charAt(texto.length-1) === ".") {
            document.getElementById("nombre").value = texto.slice(0,-1);
        //En caso contrario, al no existir, lo añadimos.
        } else {
            document.getElementById("nombre").value = texto + ".";
        }
    }
}

/*
 * Función cuentacaracteres. Cuenta el número de caracteres mientras se esta
 * introduciendo caracteres en el campo
 */
function cuentaCaracteres(){
    //Obtenemos el número de caracteres existentes
    var longitud = document.getElementById("apellido1").value.length;
    //Si está fuera del rango determinado
    if (longitud < 1 || longitud > 59 ){
        //Coloreamos de rojo el texto
        document.getElementById("apellido1").className = "txtRojo";
    } else {
        //Coloreamos en negro el texto
        document.getElementById("apellido1").className = "txtNormal";
    }
}

/*
 * Función capital. Pone la primera letra de una frase introducida en un campo
 * en mayuscula si esta se encontrara en minuscula.
 */
function capital(){
    if (document.getElementById("apellido2").value !== null) {
        //Primero ponemos la cadena en minúsculas
        var texto = (document.getElementById("apellido2").value).toLowerCase();
        //Ponemos la primera letra en mayúsculas y el resto se mantiene igual
        texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        //Establecemos el nuevo valor
        document.getElementById("apellido2").value = texto; 
    }
}

//***********************
//FUNCIONES DE VALIDACION
//***********************

/*
 * Función validalongitud. Valida la longitud del campo que se le pase por su ID
 * Evita campos vacios. En el caso de validar, devuelve true o false como flag de
 * control y a su vez, dependiendo del caso de su validación, colorea el campo.
 * 
 */
function validaLongitud(elementoID){
    //En el caso de que el campo no se encuentre vacío
    if (document.getElementById(elementoID).value.length !== 0) {
        //Coloreamos el campo con la clase correcto
        document.getElementById(elementoID).setAttribute("class", "correcto");
        return true;
    } else {
        //Coloreamos el campo con la clase incorrecto
        document.getElementById(elementoID).setAttribute("class", "incorrecto");
        return false;
    }
}

/**
 * Funcion validanombre. Valida el nombre de un campo con un patrón dado. En el
 * caso de validar devuelve true o false como flag de control y dependiendo del
 * resultado de la validación, colorea el campo.
 * 
 * Patron: /^((?!\d).)+$/ Cualquier caracter que no sea un digito.
 * 
 * ^ Desde el principio del texto
 * ((?!\d) Que no sea un dígito
 * .) cualquier caracter
 * +$ al menos un caracter, hasta final del texto.
 * 
 */
function validaNombre(){
    //Obtenemos el elemento
    var texto = document.getElementById("nombre").value;
    //Pasamos el patrón de la expresión regular
    var patron = /^((?!\d).)+$/;
    //Si coincide con el patrón
    if (texto.match(patron)){
        //Coloreamos el campo con la clase correcto 
        document.getElementById("nombre").setAttribute("class", "correcto");
        return true;
    } else {
        //Coloreamos el campo con la clase incorrecto
        document.getElementById("nombre").setAttribute("class", "incorrecto");
        return false;
    }
}

/*
 * Funcion validaapellido1. Valida el nombre de un campo con un patrón dado. En el
 * caso de validar devuelve true o false como flag de control y dependiendo del
 * resultado de la validación, colorea el campo.
 * 
 * Patrón: /^([a-záéíóúñA-ZÁÉÍÓÚÑ\s]{1,59})$/
 * 
 * ^ Desde el principio del texto
 * ([a-záéíóúñA-ZÁÉÍÓÚÑ Cualquier letra mayuscula, minuscula y las acentuadas.
 * \s] El espacio]
 * {1,59}) Entre 2 y 60 caracteres como tamaño minimo/maximo respectivamente
 * 
 */
function validaApellido1(){
    //Obtenemos el elemento
    var texto = document.getElementById("apellido1").value;
    //Pasamos el patrón de la expresión regular
    var patron = /^([a-záéíóúñA-ZÁÉÍÓÚÑ\s]{1,59})$/;
    //Si coincide con el patrón
    if (texto.match(patron)){
        //Coloreamos el campo con la clase correcto
        document.getElementById("apellido1").setAttribute("class", "correcto");
        return true;
    } else {
        //Coloreamos el campo con la clase incorrecto
        document.getElementById("apellido1").setAttribute("class", "incorrecto");
        return false;
    }
}

/*
 * Funcion validaapellido2. Valida el nombre de un campo con un patrón dado. En el
 * caso de validar devuelve true o false como flag de control y dependiendo del
 * resultado de la validación, colorea el campo.
 * 
 * Patrón: /^([a-záéíóúñA-ZÁÉÍÓÚÑ\s])*$/
 * 
 * ^ Desde el principio del texto
 * ([a-záéíóúñA-ZÁÉÍÓÚÑ Cualquier letra mayuscula, minuscula y las acentuadas.
 * \s]) El espacio
 * * 0 o mas veces
 */
function validaApellido2(){
    //Obtenemos el elemento
    var texto = document.getElementById("apellido2").value;
    //Pasamos el patrón de la expresión regular
    var patron = /^([a-záéíóúñA-ZÁÉÍÓÚÑ\s])*$/;
     //Si coincide con el patrón
    if (texto.match(patron)){
        //Coloreamos el campo con la clase correcto
        document.getElementById("apellido2").setAttribute("class", "correcto");
        return true;
    } else {
        //Coloreamos el campo con la clase incorrecto
        document.getElementById("apellido2").setAttribute("class", "incorrecto");
        return false;
    }
}

/*
 * Funcion validapassword. Valida la clave de un campo con un patrón dado. En el
 * caso de validar devuelve true o false como flag de control y dependiendo del
 * resultado de la validación, colorea el campo.
 * 
 * Patrón: /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[áéíóúÁÉIÓÚ])(?=.*\d){3}(?=.*[\$€\*])[a-zA-ZáéíóúÁÉÍÓÚñÑ\$€\*\d]{7,15}(\D$)/
 * 
 * ^ Desde el principio del texto
 * (?=.*[a-zñ]) Que aparezca al menos una letra minuscula (ñ incluida)
 * (?=.*[A-ZÑ]) Que aparezca al menos una letra mayuscula (Ñ incluida)
 * (?=.*[áéíóúÁÉIÓÚ]) Que aparezca al menos una letra acentuada (mayuscula o minuscula)
 * (?=.*\d){3} Que aparezcan al menos 3 digitos
 * (?=.*[\$€\*]) Que aparezca el simbolo del dolar, del euro o el arterisco
 * [a-zA-ZáéíóúÁÉÍÓÚñÑ\$€\*\d] Los unicos caracteres permitidos son los alfabeticos, acentuados, digitos, simbolo del dolar, euro y arterisco
 * {7,15} entre 8 y 16 caracteres
 * (\D$) No puede ser un digito el ultimo caracter
 * 
 */
function validaPassword(){
    //Obtenemos el elemento
    var texto = document.getElementById("password").value;
    //Pasamos el patrón de la expresión regular
    var patron = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[áéíóúÁÉIÓÚ])(?=.*\d){3}(?=.*[\$€\*])[a-zA-ZáéíóúÁÉÍÓÚñÑ\$€\*\d]{7,15}(\D$)/;
    if (texto.match(patron)){
        //Coloreamos el campo con la clase correcto
        document.getElementById("password").setAttribute("class", "correcto");
        return true;
    } else {
        //Coloreamos el campo con la clase incorrecto
        document.getElementById("password").setAttribute("class", "incorrecto");
        return false;
    }
}

/*
 * Funcion validar. Reune el resto de funciones de validación. Mediante el uso de
 * los flags de control lanza mensajes de error o lanza un mensaje de exito.
 */
function validar(){
    //Limpiamos rastros de validaciones previas
    //Limpiamos mensaje de validacion
    var validacion = "";
    //Limpiamos texto de resultado de validacion
    document.getElementById("resultado").innerHTML = "";
    //Limpiamos coloreado del resultado de validación
    document.getElementById("resultado").removeAttribute("class");
   
    //Comenzamos la validación, llamamos a las diferentes funciones y dependiendo 
    //del resultado, dejamos el campo vacio o le añadimos el fallo cometido.
    validacion += validaLongitud("nombre") ? "" : "El campo nombre no puede quedar vacío<br>";
    validacion += validaLongitud("apellido1") ? "" : "El campo primer apellido no puede quedar vacío<br>";
    validacion += validaNombre() ? "" : "El campo nombre no reune los requisitos<br>" ;
    validacion += validaApellido1() ? "" : "El primer apellido no reune los requisitos<br>";
    validacion += validaApellido2() ? "" : "El segundo apellido no reune los requisitos<br>";
    validacion += validaPassword() ? "" : "El password no reune los requisitos<br>";
    
    //En el caso de existir errores, dado que el mensaje no esta vacio
    if (validacion !== "") {
        //Establecemos el coloreado de error
        document.getElementById("resultado").className = "error";
        //Mostramos el mensaje generado
        document.getElementById("resultado").innerHTML = validacion;
    } else {
        //En el caso de no existir errores dado que el mensaje esta vacío
        //Establecemos el coloreado porque todo esta perfecto
        document.getElementById("resultado").className = "perfecto";
        //Vaciamos el campo por precaución
        document.getElementById("resultado").innerHTML = "";
        //Mostramos mensaje con los datos de los campos ya validados
        document.getElementById("resultado").innerHTML += "Los datos introducidos son correctos. Su usuario es el siguiente: <br>"
            + "<strong>Nombre:</strong> " + document.getElementById("nombre").value + "<br>"
            + "<strong>Primer apellido:</strong> " + document.getElementById("apellido1").value + "<br>";
            //En el caso del segundo apellido, dado que es opcional, lo mostramos
            //si este se encuentra relleno
            if (document.getElementById("apellido2").value !== "") {
                document.getElementById("resultado").innerHTML += "<strong>Segundo apellido:</strong> " + document.getElementById("apellido2").value + "<br>";
            } 
            document.getElementById("resultado").innerHTML += "<strong>Password: </strong>" + document.getElementById("password").value + "<br>";
    }
}


