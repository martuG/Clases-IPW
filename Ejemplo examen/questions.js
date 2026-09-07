const PREGUNTAS = [
    {
        id: 1,
        tema: "html",
        nivel: "bajo",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Qué significa HTML?",
        opciones: [
            "HyperText Markup Language",
            "High Transfer Machine Language",
            "Home Tool Markup List",
            "Hyperlink Text Management Language"
        ],
        correcta: 0,
        aceptadas: null,
        explicacion: "HTML es HyperText Markup Language: un lenguaje de marcado de hipertexto. Describe la estructura y el significado de cada parte del documento, no es un lenguaje de programación."
    },
    {
        id: 2,
        tema: "html",
        nivel: "bajo",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "HTML es un lenguaje de programación.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "Es falso. HTML es un lenguaje de marcado. El navegador no lo ejecuta como un programa: lee las etiquetas y construye una representación del documento (el DOM)."
    },
    {
        id: 3,
        tema: "html",
        nivel: "bajo",
        tipo: "fill",
        enfoque: "teoria",
        enunciado: "El contenido visible de la página (títulos, textos, imágenes, formularios) se escribe dentro de la etiqueta ______.",
        opciones: null,
        correcta: null,
        aceptadas: ["body", "<body>", "<body></body>", "el body", "la etiqueta body"],
        explicacion: "Todo lo visible va en <body>. El <head> guarda metadatos (título, charset, viewport, vínculo al CSS) y no es un encabezado visual."
    },
    {
        id: 4,
        tema: "html",
        nivel: "bajo",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Qué muestra la etiqueta <code>&lt;title&gt;</code>?",
        opciones: [
            "El título grande que se ve arriba del contenido de la página",
            "El título de la pestaña del navegador",
            "El nombre del archivo HTML",
            "El encabezado semántico <code>&lt;header&gt;</code>"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "<title> va en el <head> y define el texto de la pestaña. El encabezado visual se arma con <header> (y un <h1>) dentro del <body>."
    },
    {
        id: 5,
        tema: "css",
        nivel: "bajo",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Qué significa CSS?",
        opciones: [
            "Computer Style Syntax",
            "Cascading Style Sheets",
            "Creative Site System",
            "Coded Structure Styles"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "CSS es Cascading Style Sheets (hojas de estilo en cascada). Controla la presentación: colores, tipografía, tamaños y distribución."
    },
    {
        id: 6,
        tema: "css",
        nivel: "bajo",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "En esta materia, el CSS debe ir en un archivo separado y vincularse desde el HTML.",
        opciones: ["Verdadero", "Falso"],
        correcta: 0,
        aceptadas: null,
        explicacion: "Es la regla de trabajo: index.html para estructura y styles.css para presentación. Se vinculan con <link rel=\"stylesheet\" href=\"styles.css\"> en el <head>."
    },
    {
        id: 7,
        tema: "css",
        nivel: "bajo",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Cuál es la forma correcta, en esta materia, de aplicar estilos a una página?",
        opciones: [
            "Escribir <code>style=\"\"</code> en cada etiqueta",
            "Poner un bloque <code>&lt;style&gt;</code> dentro del <code>&lt;body&gt;</code>",
            "Vincular un archivo <code>.css</code> con <code>&lt;link rel=\"stylesheet\" href=\"styles.css\"&gt;</code> en el <code>&lt;head&gt;</code>",
            "Escribir los colores como atributos HTML (<code>bgcolor</code>, <code>font</code>)"
        ],
        correcta: 2,
        aceptadas: null,
        explicacion: "La forma obligatoria es CSS externo. Los estilos en línea e internos se mencionan solo para reconocerlos, no como práctica habitual."
    },
    {
        id: 8,
        tema: "box",
        nivel: "bajo",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "En el modelo de caja, ¿qué es el <code>padding</code>?",
        opciones: [
            "El espacio externo entre una caja y las vecinas",
            "El espacio interno, entre el contenido y el borde",
            "La línea que cierra la caja",
            "El color de fondo del elemento padre"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Padding es aire interno. El fondo de la caja sí lo pinta. El espacio externo es margin; la línea que cierra la caja es border."
    },
    {
        id: 9,
        tema: "box",
        nivel: "bajo",
        tipo: "fill",
        enfoque: "teoria",
        enunciado: "El espacio externo que separa una caja de las demás se controla con la propiedad ______.",
        opciones: null,
        correcta: null,
        aceptadas: ["margin", "el margin", "márgen", "margen", "margin-top", "los margenes", "los márgenes"],
        explicacion: "Margin es aire externo y transparente: no se pinta con el fondo del elemento. Sirve para separar cajas entre sí."
    },
    {
        id: 10,
        tema: "html",
        nivel: "bajo",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "La etiqueta <code>&lt;img&gt;</code> necesita una etiqueta de cierre <code>&lt;/img&gt;</code>.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "Es un elemento vacío: se escribe con una sola etiqueta, junto con <br>, <hr>, <meta> y <link>. Lleva atributos como src y alt, no contenido interno."
    },
    {
        id: 11,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "En <code>&lt;p class=\"destacado\"&gt;Bienvenidos&lt;/p&gt;</code>, ¿qué es el <strong>elemento</strong>?",
        opciones: [
            "Solo la palabra <code>class</code>",
            "Solo el texto «Bienvenidos»",
            "Solo la etiqueta de apertura <code>&lt;p class=\"destacado\"&gt;</code>",
            "El conjunto: apertura + contenido + cierre"
        ],
        correcta: 3,
        aceptadas: null,
        explicacion: "Etiqueta de apertura: <p class=\"destacado\">. Contenido: Bienvenidos. Cierre: </p>. El elemento es todo el conjunto. class=\"destacado\" es un atributo."
    },
    {
        id: 12,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Para qué sirve <code>&lt;!DOCTYPE html&gt;</code> y dónde debe ir?",
        opciones: [
            "Declara que el documento es HTML5 y debe ser lo primero del archivo",
            "Es el título de la pestaña y va en el <code>&lt;body&gt;</code>",
            "Vincula el CSS y va al final del <code>&lt;head&gt;</code>",
            "Indica el idioma de la página y reemplaza a <code>lang</code>"
        ],
        correcta: 0,
        aceptadas: null,
        explicacion: "DOCTYPE declara HTML5 y va primero. El idioma se indica con lang en <html>. El CSS se vincula con <link>. El título de pestaña es <title>."
    },
    {
        id: 13,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Qué problema concreto evita <code>&lt;html lang=\"es\"&gt;</code>?",
        opciones: [
            "Que el CSS no se cargue",
            "Que el navegador o un lector de pantalla asuman otro idioma al leer o indexar la página",
            "Que falten tildes en el texto",
            "Que la página no sea HTML5"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "lang=\"es\" declara el idioma. Sirve para accesibilidad (lectores de pantalla) y SEO. Las tildes las resuelve charset=\"UTF-8\". HTML5 lo declara el DOCTYPE."
    },
    {
        id: 14,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Una página en español muestra «InformaciÃ³n» en lugar de «Información». ¿Cuál es la causa más probable?",
        opciones: [
            "Falta el <code>&lt;h1&gt;</code>",
            "El CSS está mal vinculado",
            "Falta <code>&lt;meta charset=\"UTF-8\"&gt;</code> o el archivo no se guardó en UTF-8",
            "Se usó <code>&lt;strong&gt;</code> en vez de <code>&lt;b&gt;</code>"
        ],
        correcta: 2,
        aceptadas: null,
        explicacion: "Sin charset UTF-8 (o si el archivo no está en esa codificación) aparecen caracteres rotos como Ã¡ en lugar de á. Es un error frecuente de estructura, no de semántica visual."
    },
    {
        id: 15,
        tema: "html",
        nivel: "medio-alto",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "La etiqueta <code>&lt;head&gt;</code> es el encabezado visual de la página (logo, menú y título que ve el usuario).",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "Falso. <head> es metadatos. El encabezado visual se arma con <header> dentro del <body>. Confundirlos es uno de los errores más comunes de la unidad."
    },
    {
        id: 16,
        tema: "html",
        nivel: "medio-alto",
        tipo: "fill",
        enfoque: "teoria",
        enunciado: "El navegador no ejecuta HTML como un programa: lee las etiquetas y construye una representación del documento llamada ______.",
        opciones: null,
        correcta: null,
        aceptadas: ["dom", "el dom", "document object model", "el document object model"],
        explicacion: "Esa representación es el DOM (Document Object Model). Después se estiliza con CSS y se puede modificar con JavaScript."
    },
    {
        id: 17,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "¿Cuál de estos fragmentos está bien anidado?",
        codigo: "<p>Texto <strong>importante</p></strong>\n\n<p>Texto <strong>importante</strong></p>",
        opciones: [
            "El primero: se puede cerrar <code>&lt;p&gt;</code> antes que <code>&lt;strong&gt;</code>",
            "El segundo: las etiquetas no se cruzan",
            "Los dos son equivalentes; el navegador siempre los interpreta igual",
            "Ninguno: <code>&lt;strong&gt;</code> no puede ir dentro de un párrafo"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "El anidamiento no se cruza: se cierra primero lo que se abrió último. El navegador intenta reparar HTML mal formado, pero el resultado puede ser impredecible. En la materia se exige anidamiento correcto."
    },
    {
        id: 18,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Cuándo usarías <code>&lt;article&gt;</code> y cuándo un <code>&lt;div&gt;</code>?",
        opciones: [
            "<code>&lt;article&gt;</code> para cualquier caja con fondo; <code>&lt;div&gt;</code> para noticias",
            "<code>&lt;article&gt;</code> cuando el bloque es contenido independiente (noticia, ficha, publicación); <code>&lt;div&gt;</code> solo si ninguna etiqueta semántica representa mejor ese bloque",
            "Son sinónimos: se elige según el tamaño visual",
            "<code>&lt;div&gt;</code> siempre, porque <code>&lt;article&gt;</code> es solo para blogs"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Semántica = significado, no apariencia. <article> es contenido que tendría sentido por sí solo. <div> no tiene significado: se usa cuando no hay una etiqueta semántica mejor."
    },
    {
        id: 19,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "Sobre <code>&lt;main&gt;</code>, ¿qué afirma la materia?",
        opciones: [
            "Puede haber varios <code>&lt;main&gt;</code>, uno por sección",
            "Debe haber uno por página: es el contenido principal",
            "Reemplaza al <code>&lt;body&gt;</code>",
            "Va en el <code>&lt;head&gt;</code> junto al título"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "<main> marca el contenido central. Debe haber uno por página. No reemplaza a <body> ni va en <head>."
    },
    {
        id: 20,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Cómo se eligen los títulos <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> en esta materia?",
        opciones: [
            "Según el tamaño que se ve en el navegador: si se necesita letra chica, se usa <code>&lt;h6&gt;</code>",
            "Debe haber un solo <code>&lt;h1&gt;</code> con el tema principal; los niveles no se saltean; el tamaño se controla con CSS",
            "Se pueden poner varios <code>&lt;h1&gt;</code> si todos son importantes",
            "Los títulos semánticos no importan si el CSS ya define el tamaño"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Un solo h1, jerarquía sin saltos (no pasar de h1 a h3 sin h2) y tamaño visual a cargo de CSS. Elegir h4 «porque se ve más chico» rompe la semántica y la accesibilidad."
    },
    {
        id: 21,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Un estudiante escribe este esquema de títulos. ¿Qué está mal?",
        codigo: "<h1>Ficha personal</h1>\n<h3>Datos de contacto</h3>\n<h2>Materias que curso</h2>",
        opciones: [
            "Nada: el orden de los números es libre",
            "Falta un <code>&lt;h6&gt;</code>",
            "Se saltó de <code>h1</code> a <code>h3</code> y además el <code>h2</code> aparece después, rompiendo la jerarquía",
            "Los títulos no pueden ir en el <code>&lt;body&gt;</code>"
        ],
        correcta: 2,
        aceptadas: null,
        explicacion: "La jerarquía debe ser consecutiva. Después del h1 corresponde un h2. Un h3 sería un subtítulo de ese h2, no un reemplazo."
    },
    {
        id: 22,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Cuál es el uso correcto de <code>&lt;br&gt;</code>?",
        opciones: [
            "Separar párrafos y «bajar» bloques de contenido",
            "Forzar un salto de línea dentro de un mismo bloque, no para reemplazar párrafos",
            "Crear espacio entre secciones; es mejor que CSS",
            "Cerrar un párrafo cuando se olvidó <code>&lt;/p&gt;</code>"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "<br> es un salto de línea interno. Los párrafos se marcan con <p>. El espacio entre bloques se resuelve con CSS (margin o padding), no apilando <br>."
    },
    {
        id: 23,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Por qué la materia prefiere <code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code> frente a <code>&lt;b&gt;</code> e <code>&lt;i&gt;</code> cuando hay significado?",
        opciones: [
            "Porque <code>&lt;b&gt;</code> e <code>&lt;i&gt;</code> ya no existen en HTML5",
            "Porque <code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code> comunican importancia o énfasis, no solo apariencia",
            "Porque no se pueden estilizar con CSS",
            "Porque ocupan menos espacio en el archivo"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "<b> e <i> existen, pero transmiten poco significado. <strong> indica importancia y <em> énfasis/entonación. La negrita o la cursiva visual se pueden lograr también con CSS."
    },
    {
        id: 24,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Querés definir términos y sus explicaciones (HTML → «lenguaje de marcado», CSS → «lenguaje de estilos»). ¿Qué lista corresponde?",
        opciones: [
            "<code>&lt;ul&gt;</code> con <code>&lt;li&gt;</code>",
            "<code>&lt;ol&gt;</code> con <code>&lt;li&gt;</code>",
            "<code>&lt;dl&gt;</code> con <code>&lt;dt&gt;</code> y <code>&lt;dd&gt;</code>",
            "Una <code>&lt;table&gt;</code>, porque hay dos columnas"
        ],
        correcta: 2,
        aceptadas: null,
        explicacion: "La lista de definiciones es <dl>: <dt> es el término y <dd> la descripción. <ul> es no ordenada, <ol> es ordenada. Una tabla es para datos tabulares, no para glosarios."
    },
    {
        id: 25,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "Sobre el atributo <code>alt</code> de una imagen, ¿qué es correcto en esta materia?",
        opciones: [
            "Es opcional si la imagen «se entiende sola»",
            "Es obligatorio: describe la imagen para quien no puede verla y para cuando no carga",
            "Sirve para el título que aparece al pasar el mouse; reemplaza a <code>src</code>",
            "Debe repetir siempre el nombre del archivo (<code>foto.jpg</code>)"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "alt es obligatorio en la materia. Describe el contenido. Si la imagen es decorativa, alt puede quedar vacío (alt=\"\"), pero hay que justificarlo. No reemplaza un título ni a src."
    },
    {
        id: 26,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Un enlace dice <code>&lt;a href=\"#seccion-tablas\"&gt;Saltar a tablas&lt;/a&gt;</code>. ¿Qué tiene que existir en la página para que funcione el ancla?",
        opciones: [
            "Un archivo llamado <code>seccion-tablas.html</code>",
            "Un elemento con <code>id=\"seccion-tablas\"</code>, por ejemplo <code>&lt;h2 id=\"seccion-tablas\"&gt;</code>",
            "Una clase <code>.seccion-tablas</code> en el CSS",
            "El atributo <code>target=\"_blank\"</code> en el enlace"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "El href con # apunta a un id de la misma página. class no sirve como destino de ancla. Un archivo aparte sería un enlace interno de documento, no un ancla."
    },
    {
        id: 27,
        tema: "html",
        nivel: "medio-alto",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "Las tablas HTML se pueden usar para armar el diseño de toda la página (columnas de layout).",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "Falso. Las tablas son para datos tabulares (horarios, notas, comparaciones). El diseño de página se resuelve con CSS, no con <table>."
    },
    {
        id: 28,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "¿Qué falta para asociar correctamente etiqueta y campo?",
        codigo: "<label for=\"correo\">Correo</label>\n<input type=\"email\" id=\"email\" name=\"email\">",
        opciones: [
            "Nada: <code>for</code> y <code>name</code> ya coinciden",
            "El <code>for</code> del label debe ser igual al <code>id</code> del input (<code>correo</code> y <code>email</code> no coinciden)",
            "Hay que sacar el <code>id</code>; solo importa <code>name</code>",
            "El label debe ir después del input sí o sí"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "for e id tienen que coincidir carácter por carácter. name es el nombre del dato al enviar. Si no coinciden, el clic en «Correo» no enfoca el campo y se pierde accesibilidad."
    },
    {
        id: 29,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "En un formulario, ¿qué rol tienen <code>name</code> e <code>id</code>?",
        opciones: [
            "Son lo mismo: se puede usar uno u otro indistintamente",
            "<code>id</code> identifica el control en la página (y lo une al label); <code>name</code> es el nombre del dato que se enviaría",
            "<code>name</code> solo sirve para CSS; <code>id</code> solo para JavaScript",
            "<code>id</code> puede repetirse en varios inputs; <code>name</code> debe ser único"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "id es único en la página y conecta con label for. name viaja con el envío (más adelante, en el servidor). No son intercambiables."
    },
    {
        id: 30,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "¿Qué ventaja concreta tiene <code>&lt;input type=\"email\" required&gt;</code> frente a <code>type=\"text\"</code> sin <code>required</code>?",
        opciones: [
            "Ninguna: el servidor todavía no existe, así que el tipo no hace nada",
            "Cambia el teclado en muchos celulares, pide un formato de correo y el navegador puede impedir el envío vacío",
            "Encripta el correo como si fuera <code>password</code>",
            "Obliga a vincular un archivo CSS"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "En esta unidad el envío al servidor no se estudia, pero type y required ya cambian validación del navegador y el teclado móvil. password ocultaría el texto; no es el caso."
    },
    {
        id: 31,
        tema: "html",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "En un <code>&lt;audio&gt;</code> o <code>&lt;video&gt;</code>, ¿para qué sirve el texto que va entre las etiquetas de apertura y cierre?",
        opciones: [
            "Es el título que se ve siempre encima del reproductor",
            "Es un fallback: solo aparece si el navegador no puede reproducir el medio",
            "Reemplaza al atributo <code>controls</code>",
            "Es obligatorio y debe ser un <code>&lt;h1&gt;</code>"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Ese texto es respaldo. controls muestra los botones de reproducción. El medio real se indica con <source src=\"...\">."
    },
    {
        id: 32,
        tema: "html",
        nivel: "medio-alto",
        tipo: "fill",
        enfoque: "teoria",
        enunciado: "Un comentario en HTML, que el navegador no muestra, se escribe entre ______.",
        opciones: null,
        correcta: null,
        aceptadas: ["<!-- -->", "<!-- y -->", "<!--...-->", "<!--", "las marcas <!-- y -->", "<!-- comentario -->"],
        explicacion: "La sintaxis es <!-- comentario -->. No reemplaza una explicación clara del HTML. CSS usa /* */ y no admite <!-- -->."
    },
    {
        id: 33,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "Si un <code>p</code> y un <code>.destacado</code> definen colores distintos sobre el mismo párrafo, ¿cuál gana y por qué?",
        opciones: [
            "El de <code>p</code>, porque las etiquetas pesan más que las clases",
            "El de <code>.destacado</code>, porque el selector de clase es más específico que el de elemento",
            "Ninguno: hay que usar <code>!important</code>",
            "El que esté escrito primero en el CSS"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "A igual origen, gana el selector más específico. De menor a mayor: elemento, clase, id, estilo en línea. Si empatan en especificidad, gana la regla que aparece última."
    },
    {
        id: 34,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "Definís <code>font-family</code> y <code>color</code> en <code>body</code>. ¿Qué ocurre con un <code>p</code> hijo, si no hay otra regla?",
        opciones: [
            "No hereda nada: hay que repetir tipografía en cada etiqueta",
            "Hereda tipografía y color; propiedades como <code>margin</code>, <code>padding</code> o <code>border</code> no se heredan",
            "Hereda también <code>margin</code> y <code>width</code> del body",
            "Solo hereda <code>background</code>"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Se heredan color, font-family y line-height. No se heredan margin, padding, border, width ni background. Por eso conviene tipografía y color en body."
    },
    {
        id: 35,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Cuál es la diferencia entre <code>display: none</code> y <code>visibility: hidden</code>?",
        opciones: [
            "No hay diferencia",
            "<code>display: none</code> saca el elemento del flujo; <code>visibility: hidden</code> lo oculta pero reserva su lugar",
            "<code>visibility: hidden</code> borra el HTML; <code>display: none</code> solo cambia el color",
            "Ambas hacen que el elemento siga ocupando espacio"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "No son equivalentes. none elimina el espacio. hidden deja un hueco invisible. Tampoco «borran» el HTML: solo cambian la presentación."
    },
    {
        id: 36,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "Si <code>html { font-size: 16px; }</code>, ¿cuánto mide <code>font-size: 2rem</code> en un título y de qué depende <code>em</code>?",
        opciones: [
            "2rem = 32px; <code>em</code> es relativa al <code>font-size</code> del propio elemento (o de su contexto)",
            "2rem = 2px; <code>em</code> es igual al viewport",
            "2rem = 16px; <code>em</code> siempre es 16px",
            "rem y em son unidades absolutas, como <code>px</code>"
        ],
        correcta: 0,
        aceptadas: null,
        explicacion: "rem se calcula respecto del font-size de html (2 × 16 = 32px). em depende del tamaño de fuente del elemento. En la materia se recomienda rem para tipografía."
    },
    {
        id: 37,
        tema: "css",
        nivel: "medio-alto",
        tipo: "fill",
        enfoque: "teoria",
        enunciado: "Los comentarios en CSS se escriben con la sintaxis ______.",
        opciones: null,
        correcta: null,
        aceptadas: ["/* */", "/* y */", "/*...*/", "/*", "barra asterisco", "/* comentario */"],
        explicacion: "CSS solo admite /* comentario */. No acepta // ni <!-- -->. Olvidar el punto y coma en una declaración también puede romper la regla."
    },
    {
        id: 38,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Mirá estas reglas. El párrafo tiene <code>class=\"aviso\"</code> y no hay estilos en línea. ¿De qué color queda el texto?",
        codigo: "p { color: black; }\n.aviso { color: crimson; }\n#destacado { color: navy; }",
        opciones: [
            "Negro, porque <code>p</code> está primero",
            "Carmesí, porque coincide la clase <code>.aviso</code> y no hay id en el HTML",
            "Azul, porque el id siempre gana aunque el elemento no lo tenga",
            "El navegador elige al azar"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "#destacado no aplica: el elemento no tiene ese id. Entre p y .aviso gana la clase. Si un estilo «no se aplica», hay que chequear vínculo, selector y especificidad (F12)."
    },
    {
        id: 39,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Qué selecciona el combinador <code>h2 + p</code>?",
        opciones: [
            "Todos los <code>p</code> que estén en cualquier lugar dentro de un <code>h2</code>",
            "Solo los <code>p</code> hijos directos de un <code>h2</code>",
            "El <code>p</code> que está justo después de un <code>h2</code> (hermano adyacente)",
            "Cualquier elemento que tenga las clases <code>h2</code> y <code>p</code>"
        ],
        correcta: 2,
        aceptadas: null,
        explicacion: "Espacio = descendiente (article p). > = hijo directo (nav > ul). + = hermano adyacente (h2 + p). No son clases: h2 y p son selectores de elemento."
    },
    {
        id: 40,
        tema: "css",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Un menú quita el subrayado de los enlaces. ¿Qué falta para no romper usabilidad?",
        codigo: "nav a {\n    text-decoration: none;\n}",
        opciones: [
            "Nada: los enlaces nunca deben subrayarse",
            "Mostrar de nuevo el subrayado (u otro indicador claro) en <code>:hover</code> y <code>:focus</code>",
            "Usar un <code>id</code> distinto para cada enlace",
            "Poner <code>display: none</code> en el <code>:focus</code>"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: ":hover y :focus importan. El foco aparece al navegar con teclado: no debe eliminarse sin un reemplazo visible. En la materia se pide subrayado en hover y focus."
    },
    {
        id: 41,
        tema: "css",
        nivel: "medio-alto",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "En un archivo <code>.css</code> se puede comentar una línea con <code>//</code>, como en JavaScript.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "Falso. CSS no admite // ni comentarios HTML. Solo /* */. Es un error frecuente cuando se copia el hábito de otros lenguajes."
    },
    {
        id: 42,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "¿Qué problema concreto resuelve <code>box-sizing: border-box</code>?",
        opciones: [
            "Hace que <code>width</code> incluya contenido, padding y borde, y evita que dos columnas de 50% se pasen del padre",
            "Elimina la necesidad de usar padding",
            "Centra automáticamente todas las cajas",
            "Activa las media queries en el celular"
        ],
        correcta: 0,
        aceptadas: null,
        explicacion: "En content-box (el valor por defecto), width es solo el contenido: padding y border se suman. Con border-box, width es el total de la caja visible. En la materia se resetea en *."
    },
    {
        id: 43,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Con el modelo por defecto (<code>content-box</code>), ¿cuál es el ancho total ocupado?",
        codigo: ".caja {\n    width: 300px;\n    padding: 20px;\n    border: 10px solid black;\n}",
        opciones: [
            "300px",
            "320px",
            "360px",
            "330px"
        ],
        correcta: 2,
        aceptadas: null,
        explicacion: "300 + 20 + 20 de padding + 10 + 10 de borde = 360px. Se pidió 300px de contenido y la caja visible ocupa más. Con border-box ocuparía 300px en total."
    },
    {
        id: 44,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Un <code>h2</code> tiene <code>margin-bottom: 24px</code> y el <code>p</code> siguiente <code>margin-top: 16px</code>. En flujo normal, ¿cuánto suele medirse entre ellos?",
        opciones: [
            "40px, porque los márgenes verticales siempre se suman",
            "24px: prevalece el mayor (colapso de márgenes)",
            "16px, porque gana el del párrafo",
            "0px, porque los títulos no tienen margen"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Margin collapsing: entre bloques consecutivos en flujo normal suele ganar el mayor, no la suma. No ocurre con márgenes horizontales ni, en general, con flex o grid."
    },
    {
        id: 45,
        tema: "box",
        nivel: "medio-alto",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "El <code>padding</code> puede ser negativo para «meter» el contenido hacia afuera de la caja.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "El padding no es negativo. El margen sí puede serlo, pero en esta unidad introductoria se desaconseja porque suele romper el flujo."
    },
    {
        id: 46,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "Si falta <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>, ¿qué ocurre en muchos celulares?",
        opciones: [
            "La página no se abre",
            "El navegador simula un ancho de escritorio (~980px) y escala todo: el sitio se ve pequeño y hay que hacer zoom",
            "Se desconecta el archivo CSS",
            "Las imágenes se vuelven fluidas solas"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "width=device-width alinea el diseño con el ancho real; initial-scale=1.0 evita zoom inicial. Sin esa línea, las media queries no se comportan como se espera en el celular."
    },
    {
        id: 47,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "teoria",
        enunciado: "En el enfoque mobile-first que pide la materia, ¿cómo se agregan los estilos de pantallas más grandes?",
        opciones: [
            "Con <code>@media (max-width: ...)</code> partiendo del escritorio",
            "Con <code>@media (min-width: ...)</code>, después de escribir primero el CSS de la pantalla más chica",
            "Sin media queries: solo con píxeles fijos",
            "Poniendo un sitio distinto para celular"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Mobile-first: base para móvil y se agrega complejidad con min-width. Desktop-first usa max-width para achicar. Responsive no es «otro sitio» para celular."
    },
    {
        id: 48,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Una foto de 1200px de ancho genera scroll horizontal en el teléfono. ¿Qué patrón indica la materia?",
        opciones: [
            "Ponerle <code>width: 1200px</code> también al body",
            "<code>img { max-width: 100%; height: auto; }</code> para que no desborde y conserve la proporción",
            "Sacar la meta viewport",
            "Usar una tabla de una columna"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Imagen fluida: max-width: 100% impide que desborde al padre; height: auto mantiene la proporción. Suele sumarse display: block. Un width fijo en body empeora el problema."
    },
    {
        id: 49,
        tema: "box",
        nivel: "medio-alto",
        tipo: "tf",
        enfoque: "teoria",
        enunciado: "El color de fondo de un elemento pinta también el <code>margin</code>.",
        opciones: ["Verdadero", "Falso"],
        correcta: 1,
        aceptadas: null,
        explicacion: "Falso. El fondo cubre contenido y padding. El margin es transparente y deja ver lo que hay detrás (en general, el fondo del padre). Por eso: si el espacio debe llevar el mismo fondo, es padding."
    },
    {
        id: 50,
        tema: "box",
        nivel: "medio-alto",
        tipo: "mc",
        enfoque: "aplicada",
        enunciado: "Dos tarjetas tienen <code>width: 50%</code> y además <code>padding</code>, con <code>box-sizing: content-box</code>. ¿Por qué no entran en una misma fila?",
        opciones: [
            "Porque el porcentaje no funciona en CSS",
            "Porque <code>width</code> es solo el contenido: el padding (y el borde) se suman y el total supera el 100%",
            "Porque falta un <code>&lt;br&gt;</code> entre las tarjetas",
            "Porque <code>margin: 0 auto</code> obliga a una sola columna"
        ],
        correcta: 1,
        aceptadas: null,
        explicacion: "Es el caso clásico que motiva border-box. margin: 0 auto centra un bloque con ancho definido; no es la causa de que 50% + 50% + padding desborde."
    }
];
