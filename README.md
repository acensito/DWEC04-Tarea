DWEC - Tarea 4

Enunciado:
==========

**Continuamos con Merca Mona. **

![Logotipo de MercaMona](media/706fe71432c71b19668fd89701306251.png)

En la web se van a incluir una serie de formularios que nos van a servir para
realizar el control de productos y usuarios de este supermercado tan querido por
nosotros.

En los formularios se dispondrá de algunos campos obligatorios y otros no
obligatorios. Eso se refiere a campos que el usuario debe rellenar o no para
conseguir que la petición al formulario sea correcta.

Desde un índice van a colgar de la aplicación web va a tener las siguientes
páginas:

1.   Sección de creación de usuario.

2.   Sección de ingreso de dinero.

Cada una de las secciones tendrá una sola página y un archivo JavaScript.  Las
veremos a continuación en detalle

 

**1. Sección de login de usuario**. (5 puntos)

Este ejercicio se va a realizar con la forma anterior a HTML5 de validación de
formularios. Esta sección debe disponer de los siguientes campos:

-   **Nombre**. Debe verificarse que el nombre solo dispone de letras y
    caracteres. Debe añadirse un punto al final del texto de forma automática. Y
    cuando se vaya a escribir en el campo se debe borrar.  Es **obligatorio** y
    no se puede dejar en blanco.

-   **Primer Apellido**: Debe verificarse que el nombre solo dispone de
    caracteres alfabéticos y el espacio. No puede tener más de 60 caractéres y
    no menos de 2. Cuando se superen o queden menos deben cambiarse los colores
    del texto a rojo.  Es obligatorio y no se puede dejar en blanco.

-   **Segundo Apellido:** Debe verificarse que el nombre solo dispone de
    caracteres alfabéticos y el espacio. Cuando se cambie de campo el primer
    carácter debe cambiarse a Mayúsculas y el resto a minúsculas. Es opcional y
    puede dejarse en blanco.

-   **Contraseña**

    -   Al menos 8 caracteres. 16 máximo.

    -   Caracteres **alfabéticos** (al menos uno).

    -   Al menos una mayúscula y una minúscula.

    -   Debe contener un carácter alfabético que sea con acento.

    -   Sólo puede contener 3 dígitos decimales. Ni más ni menos.

    -   No debe terminar en dígito decimal.

    -   Obligatoriamente al menos uno de estos caracteres **\$** (dolar) **€**
        (euro) **\*** (asterisco)

-   Una etiqueta antes de cada campo a rellenar.

-   Botón **Reiniciar**. Borra todos los contenidos.

-   Botón **Limpiar Campo**. Borra el contenido del campo que tenga el foco.

-   Botón **Enviar**. Al pulsar este botón muestra los datos pedidos o lo
    errores cometidos. Los datos se van a mostrar en una capa **div** tal y como
    se explica al final de este apartado (abajo del todo). Si se ha producido un
    envío correcto debemos poner el verde el fondo de todas los campos. 

**2. Sección de creación de productos. (4 puntos)**

Este ejercicio se va a realizar con la forma de validación de formularios HTML5.
Se van a crear un a serie de productos alimenticios a través del formulario.

Además debe aparecer un contador que vaya aumentando cada vez que se introduzca
un alimento de forma satisfactoria. Este contador no ser hará con cookies, sino
que se hará con *localStorage*.

-   Una etiqueta que esté al lado de cada campo a rellenar.

-   El nombre del producto. El nombre del producto. Son caracteres alfabéticos,
    numéricos, espacios y signos de puntuación. Nada más.

-   El **peso** del producto. Debe ser un número con 0 o más decimales. El
    separador de los decimales puede ser un punto o una coma.

-   Si está en un pack con varios o es un producto **individual**. Realizarlo
    con *Input Type Range. *

-   Si es **ecológico** o no con el elemento del formulario más adecuado.

-   Un desplegable que incluya la sección del tipo de alimento. Por ejemplo:
    Ultramarinos, Frescos, Leches, Galletas, ..... Lo que veas necesario, pero
    al menos 6.

-   Botón **Enviar**. Este botón lo que hace es mostrar los números abajo en una
    capa div junto con el contador.

-   Botón **Borrar.** Borra todos los contenidos.

**Observaciones**:

-   Se comentarán las partes de las expresiones regulares utilizadas mediante
    comentarios.

-   Se prohíbe el uso de eventos BOM (tipo onclick). Se utilizarán solo los
    sistemas aprobados por w3c (Modelo de registro avanzado de eventos según
    W3C). O sea, con *AddEventListener*. 

-   Se prohíbe el uso de **jQuery** para la realización de la tarea.

-   Para poder actualizar el contenido de un contenedor o **div** la propiedad
    que tenemos que modificar para ese objeto es “**innerHTML**”.

-   Va a hacerte falta el uso event.preventDefault() para evitar que se envíe la
    página y se pueda utilizar lo siguiente.

| \<div id="resultado\>    Al actualizar este contenido se borrra. \</div\> \<script\> |
|--------------------------------------------------------------------------------------|


>   document.getElementById("resultado").innerHTML="Aquí pones el código que
>   quieres que aparezca en la capa resultado";

\</script\>

Recursos necesarios:
====================

-   Ordenador personal.

-   Editor web para teclear el código de la aplicación.

-   Navegador web para probar el funcionamiento de la aplicación.

Criterios de corrección y puntuación:
=====================================

Los puntos que tiene esta tarea están asignados de la siguiente forma:

-   Apartado12: **(5 puntos en total)**

    -   Nombre y Apellidos:  **1,5 puntos**

    -   Contraseña: **2 puntos.**

    -   Resto de funciones del formulario: **1,5 punto.**

-   Apartado 2: **4 puntos**.

-   Claridad y comentarios y presentación del código: **1 puntos.**

Total: 10 puntos máximo. 

Consejos y recomendaciones:
===========================

Se recomienda realizar una función para cada una de las validaciones de tal
forma que se pueda llamar a cada una de forma independiente. Las funciones
deberían devolver true si la validación ha sido correcta o false (y los mensajes
de error solicitados) si la validación ha sido incorrecta.

Corrección:
===========

