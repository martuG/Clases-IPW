XML significa lenguaje de marcado extensible. Fue diseñado para almacenar y transportar datos, y para que lo puedan leer tanto las personas como los programas. XML cumple un papel importante en muchos sistemas. Se usa a menudo para distribuir datos a través de Internet. Conviene entenderlo bien.

XML es descriptivo. Una nota puede traer al remitente, al destinatario, un encabezado y un cuerpo. Aun así, el XML no hace nada por sí solo. XML es información envuelta en etiquetas. Alguien tiene que escribir un programa para enviarla, recibirla, guardarla o mostrarla.

En el siguiente enlace hay ejemplos sencillos de la sintaxis.

Introducción al XML

https://www.w3schools.com/xml/xml_whatis.asp

XML se usa en muchos aspectos del desarrollo web. A menudo sirve para separar los datos de la presentación. No trae información sobre cómo se va a mostrar. Los mismos datos XML pueden usarse en presentaciones distintas. Por eso, con XML, los datos y la presentación quedan separados.

XML suele ser un complemento de HTML. En muchas aplicaciones que usan los dos, XML almacena o transporta los datos, y HTML los formatea y los muestra. Al mostrar datos en HTML no hace falta editar el archivo HTML cuando cambian los datos. Con XML, los datos pueden guardarse en archivos XML separados. Con unas pocas líneas de JavaScript se puede leer un XML y actualizar el contenido de cualquier página HTML.

En el enlace siguiente hay un ejemplo.

Uso de XML

https://www.w3schools.com/xml/xml_usedfor.asp

Los documentos XML se forman como árboles de elementos. Un árbol XML empieza en un elemento raíz y se ramifica desde la raíz hasta los elementos secundarios. Todos los elementos pueden tener subelementos (elementos secundarios).

Los términos padre, hijo y hermano describen las relaciones. Los padres tienen hijos. Los hijos tienen padres. Los hermanos son hijos en el mismo nivel. Todos los elementos pueden tener contenido de texto y atributos.

En el siguiente enlace se ve la estructura de árbol.

Árbol XML

https://www.w3schools.com/xml/xml_tree.asp

XML tiene una sintaxis propia. Esta línea se llama prólogo XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

El prólogo es opcional. Si existe, tiene que aparecer primero en el documento. Los documentos XML pueden contener caracteres internacionales, como las vocales acentuadas. Para evitar errores hay que indicar la codificación usada, o guardar los archivos como UTF-8. UTF-8 es la codificación predeterminada de los documentos XML.

En XML es ilegal omitir la etiqueta de cierre. Todos los elementos tienen que tener una etiqueta de cierre. Un elemento vacío se puede escribir con una etiqueta de autocierre:

```xml
<p>Esto es un párrafo.</p>
<br />
```

Las etiquetas XML distinguen mayúsculas de minúsculas. La etiqueta `<Letra>` es distinta de la etiqueta `<letra>`. La apertura y el cierre se escriben de la misma manera: `<mensaje>Esto es correcto</mensaje>`. A la pareja se la llama también etiquetas de inicio y de fin.

En HTML a veces se ven elementos anidados de esta forma:

```xml
<b><i>Este texto va en negrita y en cursiva</b></i>
```

En XML, todos los elementos tienen que estar correctamente anidados:

```xml
<b><i>Este texto va en negrita y en cursiva</i></b>
```

Como `<i>` se abre dentro de `<b>`, tiene que cerrarse dentro de `<b>`.

Los elementos XML pueden tener atributos en pares nombre/valor, igual que en HTML. En XML, los valores de los atributos van siempre entre comillas:

```xml
<nota fecha="12/11/2022">
  <para>Ana</para>
  <de>Juan</de>
</nota>
```

En el siguiente enlace están los demás aspectos de la sintaxis.

XML: sintaxis

https://www.w3schools.com/xml/xml_syntax.asp

Un elemento XML es todo lo que va desde su etiqueta inicial hasta su etiqueta final. Un elemento puede contener:

1. texto
2. atributos
3. otros elementos
4. o una mezcla de lo anterior

Un elemento sin contenido está vacío. Se puede escribir `<elemento></elemento>` o con autocierre: `<elemento />`.

Los nombres de los elementos siguen estas reglas:

1. Distinguen mayúsculas de minúsculas.
2. Empiezan con una letra o con un guión bajo.
3. No pueden empezar con las letras xml (ni XML, ni Xml).
4. Pueden contener letras, dígitos, guiones, guiones bajos y puntos.
5. No pueden contener espacios.

En el siguiente enlace se profundizan los elementos.

Elementos XML

https://www.w3schools.com/xml/xml_elements.asp

Los elementos XML pueden contener atributos. Al trabajar con atributos conviene tener en cuenta tres límites:

1. Un atributo no puede contener varios valores. Un elemento, sí.
2. Un atributo no puede contener una estructura de árbol. Un elemento, sí.
3. Un atributo no se amplía con facilidad cuando el dato cambia.

En el siguiente enlace se ve cómo se usan los atributos.

Atributos XML

https://www.w3schools.com/xml/xml_attributes.asp

Los espacios de nombres evitan conflictos entre nombres de elementos. En XML, los nombres los define quien escribe el documento. Al mezclar XML de aplicaciones distintas, el mismo nombre puede querer decir dos cosas. El conflicto se evita con un prefijo. Al usar un prefijo hay que definir un espacio de nombres para ese prefijo. El espacio de nombres se define con el atributo xmlns en la etiqueta de inicio.

En el siguiente enlace se ve cómo se declaran.

Espacios de nombres en XML

https://www.w3schools.com/xml/xml_namespaces.asp

Los archivos XML sin procesar se pueden ver en los navegadores principales. No se muestran como una página HTML. Los documentos XML no dicen cómo presentar los datos. Como las etiquetas las inventa quien escribe el documento, el navegador no sabe si una etiqueta como `<table>` describe una tabla HTML o una mesa. Sin información de presentación, el navegador muestra el documento tal cual está.

Para aplicarle una presentación se usa XSLT. El estándar XSLT (Extensible Stylesheet Language Transformations) define un lenguaje para transformar datos XML. XSLT se usa para transformar un documento XML en un documento XHTML, o en otro documento XML.

En los siguientes enlaces se ve cómo se muestra y cómo se transforma.

Mostrando documentos XML

https://www.w3schools.com/xml/xml_display.asp

Introducción a XSLT

https://www.w3schools.com/xml/xsl_intro.asp

Finalmente, responder las preguntas del módulo denominado "Autoevaluación Formativa".
