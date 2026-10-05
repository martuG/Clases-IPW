El modelo de objetos del navegador (BOM) permite que JavaScript interactúe con el navegador. No existen estándares oficiales para el modelo de objetos del navegador (BOM). Uno de los objetos más utilizados es window. El objeto window es compatible con todos los navegadores. Representa la ventana del navegador. Todos los objetos, funciones y variables globales de JavaScript se convierten automáticamente en miembros del objeto window. Las variables globales son propiedades del objeto window. Las funciones globales son métodos del objeto window. Incluso el objeto document (del HTML DOM) es una propiedad del objeto window. A continuación, en el enlace, se ve cómo aprovecharlo.

BOM - El objeto window

https://www.w3schools.com/js/js_window.asp

También existe un objeto que representa la pantalla del usuario. Este objeto es screen. En el enlace hay ejemplos de cómo usarlo.

BOM - El objeto screen

https://www.w3schools.com/js/js_window_screen.asp

Con el objeto window.location podemos obtener la dirección de la página actual (URL) y también redirigir el navegador a una nueva página. Algunos ejemplos del uso de window.location son:

1. window.location.href devuelve el href (URL) de la página actual.
2. window.location.hostname devuelve el nombre de dominio del servidor web.
3. window.location.pathname devuelve la ruta y el nombre de archivo de la página actual.
4. window.location.protocol devuelve el protocolo web utilizado (http: o https:).

En el siguiente enlace se ve el código.

BOM - El objeto window.location

https://www.w3schools.com/js/js_window_location.asp

El objeto window.history contiene el historial del navegador. Para proteger la privacidad de los usuarios, existen limitaciones sobre cómo JavaScript puede acceder a este objeto. Algunos métodos útiles son:

1. history.back(), igual que hacer clic en Atrás en el navegador.
2. history.forward(), igual que hacer clic en Adelante en el navegador.

En el siguiente enlace hay código que utiliza este objeto.

BOM - El objeto window.history

https://www.w3schools.com/js/js_window_history.asp

El objeto window.navigator contiene información sobre el navegador. Algunos ejemplos de uso son:

1. navigator.appName
2. navigator.appCodeName
3. navigator.platform

En el siguiente enlace se observa cómo funciona este objeto.

BOM - El objeto window.navigator

https://www.w3schools.com/js/js_window_navigator.asp

JavaScript tiene tres tipos de cuadros emergentes: cuadro de alerta, cuadro de confirmación y cuadro de solicitud.

Un cuadro de alerta se usa a menudo si se quiere asegurar de que la información llegue al usuario. Cuando aparece un cuadro de alerta, el usuario tendrá que hacer clic en "Aceptar" para continuar.

El cuadro de confirmación se usa a menudo si se quiere que el usuario verifique o acepte algo. Cuando aparece un cuadro de confirmación, el usuario tendrá que hacer clic en "Aceptar" o "Cancelar" para continuar. Si el usuario hace clic en "Aceptar", el cuadro devuelve true. Si el usuario hace clic en "Cancelar", el cuadro devuelve false.

El cuadro de solicitud se usa para que el usuario ingrese un valor. Cuando aparece, el usuario tendrá que hacer clic en "Aceptar" o "Cancelar" para continuar después de ingresar un valor. Si el usuario hace clic en "Aceptar", el cuadro devuelve el valor ingresado. Si el usuario hace clic en "Cancelar", el cuadro devuelve null.

En el siguiente enlace están implementados los tres cuadros.

Cuadros emergentes

https://www.w3schools.com/js/js_popup.asp

Con JavaScript podemos utilizar temporizadores. El objeto window permite la ejecución de código en intervalos de tiempo específicos. Estos intervalos de tiempo se denominan eventos de tiempo. Los dos métodos clave son:

1. setTimeout(function, milliseconds). Ejecuta una función después de esperar un número específico de milisegundos.
2. setInterval(function, milliseconds). Igual que setTimeout(), pero repite la ejecución de la función de forma continua.

En el siguiente enlace se ve cómo se implementan.

Temporizadores

https://www.w3schools.com/js/js_timing.asp

Las cookies permiten almacenar información del usuario en las páginas web. Las cookies son datos, almacenados en pequeños archivos de texto, en la computadora. Cuando un servidor web envió una página a un navegador, la conexión se cierra y el servidor se olvida de todo sobre el usuario. Las cookies se inventaron para resolver el problema de cómo recordar información sobre el usuario. Por ejemplo, cuando un usuario visita una página web, su nombre puede almacenarse en una cookie. La próxima vez que visite la página, la cookie tiene almacenado su nombre.

En el siguiente enlace se ve cómo se utilizan las cookies.

Cookies

https://www.w3schools.com/js/js_cookies.asp

JSON significa JavaScript Object Notation. JSON es un formato simple de intercambio de datos. Es texto sin formato, escrito con la notación de objetos de JavaScript. Se usa para enviar datos entre computadoras y es independiente del lenguaje. El código para leer y generar JSON existe en muchos lenguajes de programación. El formato JSON es sintácticamente similar al código para crear objetos JavaScript. Por eso, un programa JavaScript puede convertir datos JSON en objetos JavaScript.

JavaScript tiene una función integrada para convertir una cadena JSON en un objeto JavaScript: JSON.parse(). También tiene una función integrada para convertir un objeto en una cadena JSON: JSON.stringify().

Ventajas de utilizar JSON:

1. Se puede recibir texto puro de un servidor y usarlo como un objeto de JavaScript.
2. Se puede enviar un objeto JavaScript a un servidor en formato de texto puro.
3. Se puede trabajar con los datos como objetos de JavaScript, sin análisis ni traducciones complicados.

En el siguiente enlace hay ejemplos de uso.

Introducción a JSON

https://www.w3schools.com/js/js_json_intro.asp

La sintaxis de JSON se deriva de la notación de objetos de JavaScript:

1. Los datos están en pares nombre/valor.
2. Los datos están separados por comas.
3. Las llaves sostienen objetos.
4. Los corchetes contienen arreglos.

Los datos JSON se escriben como pares nombre/valor (también llamados pares clave/valor). Un par está formado por un nombre de campo entre comillas dobles, seguido de dos puntos, seguido de un valor. Por ejemplo: "nombre": "Ana".

En el siguiente enlace hay ejemplos de la sintaxis.

Sintaxis JSON

https://www.w3schools.com/js/js_json_syntax.asp

Los tipos de datos en JSON pueden ser:

1. string
2. number
3. object (objeto JSON)
4. array
5. boolean
6. null

En JSON los datos no pueden ser:

1. Una función
2. Un Date
3. undefined

En los siguientes enlaces se ven los tipos, JSON.parse() y JSON.stringify().

JSON: tipos de datos

https://www.w3schools.com/js/js_json_datatypes.asp

JSON.parse()

https://www.w3schools.com/js/js_json_parse.asp

JSON.stringify()

https://www.w3schools.com/js/js_json_stringify.asp

Finalmente, responder las preguntas del módulo denominado "Autoevaluación Formativa".
