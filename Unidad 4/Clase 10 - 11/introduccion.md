En JavaScript podemos utilizar los conceptos de la programación orientada a objetos. Los objetos también son manipulados como variables, pero los objetos pueden contener muchos valores. Los valores se escriben como pares nombre:valor (nombre y valor separados por dos puntos). Ingresemos al siguiente enlace para observar algunos ejemplos.

Objetos en JavaScript

Los eventos HTML se desencadenan cuando le suceden "cosas" a los elementos HTML. Cuando se usa JavaScript en páginas HTML, JavaScript puede "reaccionar" a estos eventos. Un evento HTML puede ser algo que le sucede al navegador o algo que hace un usuario.

Estos son algunos ejemplos de eventos HTML:

Una página web HTML ha terminado de cargarse
Se cambió un campo de entrada HTML
Se hizo clic en un botón HTML

A menudo, cuando suceden los eventos, es posible que desee hacer algo. JavaScript le permite ejecutar código cuando se detectan eventos. HTML permite que los atributos del controlador de eventos, con código JavaScript, se agreguen a los elementos HTML. En el siguiente link podemos observar numerosos ejemplos.

Eventos HTML con JavaScript

Profundicemos los conceptos sobre los objetos en JavaScript. En JavaScript, casi "todo" es un objeto.

Los booleanos pueden ser objetos (si se definen con la new palabra clave)
Los números pueden ser objetos (si se definen con la new palabra clave)
Las cadenas pueden ser objetos (si se definen con la new palabra clave)
Las fechas son siempre objetos.
Las matemáticas son siempre objetos.
Las expresiones regulares son siempre objetos.
Los arreglos son siempre objetos.
Las funciones son siempre objetos.
Los objetos son siempre objetos.

Todos los valores de JavaScript, excepto los primitivos, son objetos. Un valor primitivo es un valor que no tiene propiedades ni métodos. Por ejemplo 3.14 es un valor primitivo. Un tipo de datos primitivo son datos que tienen un valor primitivo.

JavaScript define 7 tipos de tipos de datos primitivos:

Ejemplos
string
number
boolean
null
undefined
symbol
bigint

En el siguiente enlace podemos profundizar estos conceptos.

Definición de objetos

En JavaScript se considera una buena práctica nombrar funciones constructoras. También que estas comiencen con una primera letra en mayúscula. En un constructor la función this es un sustituto del nuevo objeto. El valor de this se convertirá en el nuevo objeto cuando se cree un nuevo objeto. A veces necesitamos un "modelo" para crear muchos objetos del mismo "tipo". La forma de crear un "tipo de objeto" es usar una función constructora de objetos. Los objetos del mismo tipo se crean llamando a la función constructora con la palabra clave "new". Veamos algunos ejemplos en el siguiente link.

Constructores

Las propiedades en los objetos ocupan un lugar destacado ya que representan su estado. Las propiedades son la parte más importante de cualquier objeto de JavaScript. Las propiedades son los valores asociados con un objeto de JavaScript. Un objeto JavaScript es una colección de propiedades desordenadas. Por lo general, las propiedades se pueden cambiar, agregar y eliminar, pero algunas son de solo lectura. La sintaxis para acceder a la propiedad de un objeto posee distintas posibilidades: "objectName.property" o objectName["property"] o objectName[expression]. Observemos algunos ejemplos de lo expresado en el siguiente enlace.

Propiedades de los objetos

En JavaScript, como mencionamos anteriormente la palabra clave this se refiere a un objeto. El objeto al cual se refiere depende de cómo se invoque this. La palabra clave this se refiere a diferentes objetos dependiendo de cómo se use. En JavaScript se puede considerar un método de JavaScript es una propiedad que contiene una definición de función. Ingresemos al siguiente enlace para ver estos conceptos en la práctica.

Métodos y la palabra this

Algunas soluciones comunes para mostrar objetos de JavaScript son:

Mostrar las propiedades del objeto por nombre
Visualización de las propiedades del objeto en un bucle
Mostrar el objeto usando Object.values()
Mostrar el objeto usando JSON.stringify()

En el siguiente enlace ejemplificamos cada una de estas posibilidades.

Visualizando el estado de un objeto

Con la llegada del estándar ECMAScript 5 (ES5 2009) se han introducido los Getter y Setters. Estos le permiten definir objetos de acceso. También otorgan una sintaxis más simple y permiten la misma sintaxis para propiedades y métodos. Son útiles para hacer programar procesos asociados a las acciones de lectura y escritura de las propiedades. En el siguiente enlace podemos ver esto en la práctica.

Accesores para propiedades

Todos los objetos JavaScript heredan propiedades y métodos de un prototipo. Por ejemplo:

Los objetos Date heredan de Date.prototype
Los objetos Array heredan de Array.prototype
Los objetos Person heredan de Person.prototype (Person sería un constructor definido por el usuario)

El Object.prototype está en la parte superior de la cadena de herencia del prototipo. Los objetos Date, Array y Person heredan de Object.prototype. También se pueden agregar propiedades y métodos a objetos. Existen escenarios donde se desea agregar nuevas propiedades (o métodos) a todos los objetos existentes de un tipo determinado o bien agregar nuevas propiedades (o métodos) a un constructor de objetos. En el siguiente enlace podemos analizar cómo se lleva a la práctica lo mencionado.

Prototipos de objetos

ECMAScript 5 (2009) agregó muchos métodos de objeto nuevos a JavaScript. En el siguiente enlace veremos los más trascendentes.

Métodos de objetos JavaScript ES5

El estándar ECMAScript 2015, también conocido como ES6, introdujo clases de JavaScript. Las clases de JavaScript son plantillas para objetos de JavaScript. Una clase JavaScript no es un objeto: es una plantilla para objetos de JavaScript. El método constructor se llama automáticamente cuando se crea un nuevo objeto. El método constructor es un método especial por:

Tiene que tener el nombre exacto "constructor".
Se ejecuta automáticamente cuando se crea un nuevo objeto.
Se utiliza para inicializar las propiedades del objeto.

Si no define un método constructor, JavaScript agregará un método constructor vacío. En el siguiente enlace podemos observar cómo se define y utilizan las clases en JavaScript.

Clases en JavaScript

En JavaScript podemos realizar herencia entre clases. Para crear herencia entre clases, utilice la palabra clave extends. Una clase creada con herencia de clase hereda todos los métodos de otra base (super clase o clase padre). En el siguiente enlace podemos ver cómo crear clases, heredar entre ellas y acceder a la clase base.

Herencia entre clases

En JavaScript podemos tener métodos estáticos. Los métodos de clase estáticos se definen en la propia clase. No puede llamar a un método estático en un objeto, solo se puede llamar en una clase. En el siguiente enlace vemos su definición y uso.

Métodos estáticos

El modelo de objeto de documento, DOM, o simplemente HTML DOM es fuertemente utilizado con JavaScript. JavaScript puede acceder y cambiar todos los elementos de un documento HTML. Cuando se carga una página web, el navegador crea un modelo de objeto de documento de la página. El modelo HTML DOM se construye como un árbol de objetos. El HTML DOM es un modelo de objeto estándar y una interfaz de programación para HTML. En él se definen:

Los elementos HTML como objetos.
Las propiedades de todos los elementos HTML.
Los métodos para acceder a todos los elementos HTML.
Los eventos para todos los elementos HTML.

Con el modelo de objetos, JavaScript obtiene todo el poder que necesita para crear HTML dinámico. JavaScript puede:

Cambiar todos los elementos HTML en la página.
Cambiar todos los atributos HTML en la página.
Cambiar todos los estilos CSS en la página.
Eliminar elementos y atributos HTML existentes.
Agregar nuevos elementos y atributos HTML.
Reaccionar a todos los eventos HTML existentes en la página.
Crear nuevos eventos HTML en la página.

En el siguiente enlace veremos cómo utilizarlo.

HTML DOM

La interfaz de programación DOM permite acceder al HTML DOM con JavaScript (y con otros lenguajes de programación). En el DOM, todos los elementos HTML se definen como objetos. Una propiedad es un valor que se puede obtener o establecer (como cambiar el contenido de un elemento HTML). Un método es una acción que puede realizar (como agregar o eliminar un elemento HTML). En el siguiente enlace veremos cómo llevar estos conceptos a la práctica.

HTML DOM - Métodos

El objeto del documento en el HTML DOM representa la página web. Si desea acceder a cualquier elemento en una página HTML, siempre comienza accediendo al objeto del documento. Por medio del objeto documento se pueden encontrar elementos y cambiarlos, también agregarlos o eliminarlos. Adicionalmente se puede acceder a los controladores de eventos. En el siguiente enlace se muestran algunos ejemplos de cómo puede utilizar el objeto de documento para acceder y manipular HTML.

El objeto documento

Profundizando la manera de encontrar elementos podemos mencionar:

Encontrar elementos HTML por ID
Encontrar elementos HTML por nombre de etiqueta
Encontrar elementos HTML por nombre de clase
Encontrar elementos HTML mediante selectores CSS
Encontrar elementos HTML por colecciones de objetos HTML

A continuación en el enlace podrá observar cómo utilizar cada una de estas posibilidades.

Acceso a elementos

El HTML DOM permite que JavaScript cambie el contenido de los elementos HTML. La forma más sencilla de modificar el contenido de un elemento HTML es mediante la propiedad innerHTML. En el siguiente enlace se lleva a la práctica este concepto.

Modificando el HTML con HTML-DOM

También el HTML DOM permite que JavaScript cambie el estilo de los elementos HTML. En el siguiente enlace se puede acceder a ejemplos que muestran cómo hacerlo.

Modificando estilos con HTML-DOM

HTML DOM permite, con un poco de animación, crear animaciones. Veamos algunos ejemplos de cómo hacerlo en el siguiente enlace.

Animaciones

Otra forma de aprovechar las posibilidades del HTML DOM es hacer que JavaScript reaccione a eventos HTML. Un código JavaScript se puede ejecutar cuando ocurre un evento, como cuando un usuario hace clic en un elemento HTML. Para ejecutar código cuando un usuario hace clic en un elemento, debe agregar código JavaScript a un atributo de evento HTML denominado onclick. Algunos ejemplos sobre eventos HTML entre otros se dan cuando:

Un usuario hace clic con el mouse.
Una página web ha cargado.
Se ha cargado una imagen.
El mouse se mueve sobre un elemento.
Se cambia un campo de entrada.
Se envía un formulario HTML.
Un usuario pulsa una tecla.

Trabajando con Eventos

Se pueden agregar controladores de eventos dinámicamente con addEventListener(). A continuación en el siguiente enlace veremos cómo llevarlo al código.

A la escucha de eventos

Con HTML DOM, se puede navegar por el árbol de nodos utilizando relaciones de nodos. De acuerdo con el estándar W3C HTML DOM, todo en un documento HTML es un nodo, a saber:

Todo el documento es un nodo de documento.
Cada elemento HTML es un nodo de elemento.
El texto dentro de los elementos HTML son nodos de texto.
Cada atributo HTML es un nodo de atributo (obsoleto).
Todos los comentarios son nodos de comentarios.

Con el HTML DOM, JavaScript puede acceder a todos los nodos del árbol de nodos. Se pueden crear nuevos nodos y todos los nodos se pueden modificar o eliminar. Los nodos están relacionados. Los nodos del árbol de nodos tienen una relación jerárquica entre sí. Los términos padre, hijo y hermano se utilizan para describir las relaciones. En un árbol de nodos, el nodo superior se llama raíz (o nodo raíz). Cada nodo tiene exactamente un padre, excepto la raíz (que no tiene padre). Un nodo puede tener varios hijos. Los hermanos son nodos con el mismo padre. En el siguiente enlace podemos ver cómo navegar los nodos.

Navegando el DOM

En la jerarquía de nodos se pueden crear nuevos nodos e insertarlos. A continuación, en el enlace, un ejemplo de cómo hacerlos.

Creando nuevos elementos (Nodos)

Con JavaScript y HTML DOM se pueden obtener colecciones de elementos. El objeto que las representa es HTMLCollection. El método getElementsByTagName() devuelve un objeto HTMLCollection. Un objeto HTMLCollection es una lista similar a una matriz (colección) de elementos HTML pero no es una matriz. En el siguiente enlace podemos observar cómo obtener estas colecciones.

Manejo de colecciones

El objeto HTML DOM NodeList. Un objeto NodeList es una lista (colección) de nodos extraídos de un documento. Es casi lo mismo que un objeto HTMLCollection. Algunos navegadores antiguos devuelven un objeto NodeList en lugar de HTMLCollection para métodos como getElementsByClassName(). Todos los navegadores devuelven un objeto NodeList para la propiedad childNodes. La mayoría de los navegadores devuelven un objeto NodeList para el método querySelectorAll(). Para verlo implementado en código accedamos al siguiente enlace.

Objeto NodeList
