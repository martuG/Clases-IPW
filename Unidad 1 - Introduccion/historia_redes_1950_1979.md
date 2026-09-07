# 🌐 1950–1979: de las primeras ideas de redes a ARPANET

## Antes de empezar: ¿cómo eran las computadoras?

En las décadas de 1950 y 1960, las computadoras eran muy diferentes de las actuales.

Eran:

- Enormes.
- Extremadamente caras.
- Utilizadas principalmente por gobiernos, universidades y grandes empresas.
- Mucho menos potentes que cualquier computadora actual.
- Generalmente utilizadas de forma aislada.

La idea de tener **una computadora conectada a otra computadora** todavía no era algo cotidiano.

Por eso, uno de los grandes problemas que comenzaron a plantearse los investigadores fue:

> **¿Cómo podemos hacer que distintas computadoras compartan información y recursos?**

Ese problema es el punto de partida de la historia que posteriormente llevará a Internet.

---

# 🚀 1957 — Lanzamiento del Sputnik

## ¿Qué pasó?

En octubre de 1957, la Unión Soviética lanzó **Sputnik 1**, el primer satélite artificial de la Tierra.

Estados Unidos interpretó este acontecimiento como una señal de que la Unión Soviética estaba avanzando rápidamente en tecnología científica y militar.

Como respuesta, el gobierno estadounidense creó en 1958 la **Advanced Research Projects Agency (ARPA)**, posteriormente conocida como DARPA.

## ¿Qué era ARPA?

No era una empresa de Internet.

Era una agencia del gobierno estadounidense encargada de financiar y coordinar investigaciones científicas y tecnológicas consideradas estratégicas.

Entre las áreas investigadas estaban:

- Computación.
- Comunicaciones.
- Satélites.
- Tecnologías militares.
- Procesamiento de información.

## ¿Por qué es importante para Internet?

Porque ARPA comenzó a financiar investigaciones universitarias y científicas relacionadas con **redes de computadoras**.

```text
Sputnik
   ↓
Estados Unidos percibe una amenaza tecnológica
   ↓
Creación de ARPA
   ↓
Financiamiento de investigación tecnológica
   ↓
Investigación sobre redes
   ↓
ARPANET
   ↓
Internet
```

### Para los alumnos

Una buena pregunta sería:

> **¿Internet fue creado directamente por el ejército?**

La respuesta es más compleja. El gobierno estadounidense, a través de ARPA, financió investigaciones, pero gran parte del trabajo fue realizado por investigadores de universidades y centros científicos.

---

# 💻 1960–1964 — La necesidad de conectar computadoras

Durante la década de 1960 comienza a crecer la investigación sobre computación. Pero aparece un problema:

Supongamos que una universidad tiene una computadora muy potente, otra universidad tiene otra computadora y una tercera tiene un sistema diferente.

> **¿Cómo hacemos para que puedan intercambiar información?**

En esa época, las computadoras no utilizaban Internet ni protocolos comunes como TCP/IP. Cada sistema podía funcionar de manera bastante independiente.

Los investigadores comenzaron entonces a pensar en **redes de computadoras**.

---

# 📦 Década de 1960 — Conmutación de paquetes

Este es uno de los conceptos más importantes para entender Internet.

## ¿Cuál era el problema?

Imaginemos que queremos enviar un archivo muy grande desde una computadora a otra.

Una posibilidad sería mantener una conexión exclusiva entre ambas computadoras durante toda la transmisión. Pero eso tiene un problema:

```text
Computadora A ───────────────── Computadora B
              conexión exclusiva
```

Mientras A está enviando información a B, ese canal está ocupado.

Los investigadores comenzaron a explorar una idea diferente: **dividir la información en pequeños fragmentos llamados paquetes**.

Por ejemplo:

```text
Archivo
████████████████████████

        ↓

Paquetes

[001] [002] [003] [004] [005]
```

Cada paquete puede viajar por la red y posteriormente volver a ensamblarse.

```text
[001] ──┐
[002] ──┤
[003] ──┼──→ Computadora destino
[004] ──┤
[005] ──┘
```

## ¿Por qué fue revolucionario?

Porque los paquetes podían utilizar diferentes caminos para llegar al destino.

```text
        ┌────── B ──────┐
A ──────┤               ├────── Destino
        └────── C ──────┘
```

Si un camino estaba ocupado o tenía un problema, podían utilizarse otros caminos. Esto es fundamental para entender cómo funcionan las redes de Internet.

> **Importante:** No significa que «Internet fue inventado por una sola persona gracias a la conmutación de paquetes». Hubo varios investigadores trabajando sobre ideas similares, entre ellos Paul Baran en Estados Unidos y Donald Davies en Reino Unido.

### Concepto que deberían llevarse

Internet no funciona como una única carretera entre dos computadoras. Es una **red de redes** donde los datos pueden viajar divididos en paquetes.

---

# 🧠 1962–1963 — J.C.R. Licklider y la idea de una red global

Uno de los investigadores importantes de esta etapa fue **J.C.R. Licklider**.

Licklider trabajó en ideas relacionadas con la interacción entre humanos y computadoras. Imaginó algo muy adelantado para su época: computadoras conectadas entre sí que permitieran acceder a información y recursos desde diferentes lugares.

No estaba describiendo exactamente la Web que conocemos hoy, pero sus ideas ayudaron a orientar las investigaciones de ARPA hacia las redes.

## ¿Por qué es interesante para Desarrollo Web?

Porque aparece una idea que hoy nos parece obvia:

> La computadora no tiene por qué ser un sistema aislado. Puede formar parte de una red y permitir acceder a recursos remotos.

---

# 🔌 1965 — Primera comunicación entre computadoras distantes

En 1965, investigadores del MIT y otra institución lograron conectar computadoras ubicadas en lugares diferentes mediante una línea telefónica.

La experiencia demostró que era posible hacer que computadoras remotas intercambiaran información, pero también mostró problemas:

- Las redes telefónicas no estaban diseñadas específicamente para computadoras.
- La comunicación podía ser lenta.
- La conexión era poco eficiente.
- Existían problemas de compatibilidad.

Esto reforzó la necesidad de diseñar redes específicamente pensadas para computadoras.

---

# 🌐 1966 — ARPA comienza a trabajar en una red

ARPA empezó a financiar investigaciones destinadas específicamente a construir una red que permitiera conectar diferentes computadoras.

Uno de los investigadores importantes fue **Larry Roberts**.

La idea era conectar diferentes centros de investigación y permitirles compartir:

- Información.
- Programas.
- Recursos informáticos.
- Capacidad de procesamiento.

La propuesta comenzaba a tomar la forma de lo que posteriormente sería ARPANET.

---

# 🖧 1967 — La idea de los IMP

Para conectar diferentes computadoras surgió una idea interesante: en lugar de conectar directamente cada computadora con todas las demás, se utilizarían dispositivos intermedios.

Estos dispositivos posteriormente serían conocidos como **IMP (Interface Message Processor)**.

Podemos pensarlo así:

```text
Computadora A
      │
      ▼
     IMP
      │
      ├────────── IMP ────────── Computadora B
      │
      └────────── IMP ────────── Computadora C
```

Los IMP eran una especie de antecesores de los dispositivos de red que hoy asociamos con routers. Su función era ayudar a transportar los mensajes entre las diferentes computadoras.

---

# 🌎 1969 — Nace ARPANET

Este es el gran hito de la década.

## ¿Qué pasó?

En 1969 comenzó a funcionar **ARPANET**, una red financiada por ARPA.

Los primeros cuatro nodos estaban ubicados en:

- UCLA.
- Stanford Research Institute.
- University of California, Santa Barbara.
- University of Utah.

La idea era que estas instituciones pudieran comunicarse y compartir recursos informáticos.

## El primer mensaje de ARPANET

Uno de los acontecimientos más famosos ocurrió entre **UCLA** y **Stanford Research Institute**.

El objetivo era enviar la palabra:

```text
LOGIN
```

Pero ocurrió algo inesperado: el sistema se cayó después de transmitir:

```text
LO
```

Por eso suele contarse que el primer mensaje de ARPANET fue **«LO»**, en lugar de «LOGIN».

### ¿Por qué es importante?

No porque «LO» sea una palabra especial. Lo importante es que por primera vez se estaba demostrando que computadoras ubicadas en instituciones diferentes podían comunicarse mediante una red de paquetes.

## ¿Cómo funcionaba ARPANET?

Simplificándolo mucho:

```text
┌─────────────┐
│ Computadora │
│    UCLA     │
└──────┬──────┘
       │
       ▼
     ┌─────┐
     │ IMP │
     └──┬──┘
        │
        │ Red
        │
     ┌──▼──┐
     │ IMP │
     └──┬──┘
        │
        ▼
┌─────────────┐
│ Computadora │
│  Stanford   │
└─────────────┘
```

Los IMP se encargaban de transportar los mensajes entre los diferentes puntos de la red.

Esto ya empieza a parecerse a una arquitectura de red moderna:

```text
Dispositivo
    ↓
Dispositivo de red
    ↓
Red
    ↓
Dispositivo de red
    ↓
Dispositivo
```

---

# 📌 1970 — ARPANET comienza a crecer

Durante los primeros años de la década de 1970 se fueron incorporando nuevos nodos. El objetivo era que diferentes universidades y centros de investigación pudieran comunicarse.

Pero apareció un nuevo problema:

> **¿Qué hacemos para que diferentes computadoras puedan comunicarse utilizando la red?**

Ya teníamos una infraestructura de red. Ahora necesitábamos protocolos.

---

# ✉️ 1971 — Nace el correo electrónico

Ray Tomlinson trabajaba en sistemas conectados a ARPANET. En 1971 desarrolló un sistema que permitía enviar mensajes entre computadoras conectadas a la red.

Para diferenciar **usuario** de **computadora**, utilizó el símbolo:

```text
@
```

Por ejemplo:

```text
usuario@computadora
```

Este formato terminó convirtiéndose en el estándar que todavía utilizamos: [martina@example.com](mailto:martina@example.com).

## ¿Por qué fue importante?

Porque ARPANET dejó de ser solamente una herramienta para investigadores que querían compartir recursos. Comenzó a convertirse también en una herramienta de comunicación entre personas.

Esto es muy importante para entender la evolución posterior:

```text
Computadoras conectadas
        ↓
Intercambio de datos
        ↓
Personas comunicándose
        ↓
Servicios de Internet
```

---

# 🎤 1972 — ARPANET se presenta públicamente

En 1972 ARPANET fue presentada públicamente durante una conferencia en Washington. Se realizó una demostración de la red y de diferentes aplicaciones que podían ejecutarse sobre ella.

Una de las aplicaciones más importantes era justamente el correo electrónico.

## ¿Qué demuestra esto?

Que la red ya no era solamente un experimento. Comenzaba a demostrar que podía ser una plataforma para diferentes servicios.

> **Internet es la infraestructura; sobre esa infraestructura pueden funcionar diferentes servicios.**

Por ejemplo:

```text
                 INTERNET
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
     Email         Web          Video
```

La Web aparecerá mucho después, en los años 90.

---

# 🌎 1973 — ARPANET comienza a conectarse internacionalmente

En 1973 ARPANET empezó a incorporar conexiones con instituciones fuera de Estados Unidos.

Esto plantea un problema fundamental:

Supongamos que tenemos una **Red A** y una **Red B**. Ambas funcionan, pero utilizan tecnologías diferentes.

> **¿Cómo hacemos para conectarlas?**

Esto da lugar a una de las ideas fundamentales de Internet: **interconectar redes diferentes**.

---

# 🧩 1974 — Cerf y Kahn: conectar redes diferentes

Aquí aparecen dos nombres muy importantes:

- Vint Cerf.
- Robert Kahn.

Trabajaron sobre un protocolo que permitiera que diferentes redes pudieran comunicarse entre sí.

La idea fundamental era:

```text
Red A
   │
   │
   ▼
┌─────────┐
│ Gateway │
└────┬────┘
     │
     ▼
   Red B
```

No era necesario que todas las redes fueran iguales. Podían existir diferentes tipos de redes y, mediante un protocolo común, comunicarse.

## ¿Por qué esto es tan importante?

Porque de acá surge una idea fundamental:

> **Internet no es una única red. Es una red de redes.**

De hecho, la palabra **Inter-net** puede entenderse como *interconnected networks*, o redes interconectadas.

### Una red

```text
Computadora A ─── Computadora B
```

### Internet

```text
        RED A
       /     \
      /       \
    RED B ─── RED C
      \       /
       \     /
        \   /
         RED D
```

---

# 🖧 1976 — Ethernet

En 1976 se desarrolló y popularizó **Ethernet**, una tecnología para conectar dispositivos dentro de una red local.

Por ejemplo:

```text
Computadora A ─┐
Computadora B ─┤
Computadora C ─┼── Ethernet ── Red local
Computadora D ─┘
```

Ethernet **no es Internet**. Es una tecnología utilizada para crear redes locales (LAN).

Pero fue muy importante porque permitió conectar computadoras de manera relativamente sencilla dentro de empresas, universidades y otros lugares.

## Una distinción importante

```text
Ethernet
   ↓
Tecnología para redes locales

TCP/IP
   ↓
Protocolos para comunicar redes

Internet
   ↓
Red global formada por redes interconectadas

Web
   ↓
Servicio que funciona sobre Internet
```

Esta distinción puede ser muy útil para tus alumnos.

---

# 🔀 1978 — TCP comienza a dividirse en TCP e IP

Inicialmente se trabajaba con un protocolo conocido como TCP. Con el tiempo se vio que convenía separar dos responsabilidades.

## IP

Se ocupa principalmente de:

> **¿A dónde debe ir el paquete?**

## TCP

Se ocupa principalmente de:

> **¿Cómo hacemos para que la comunicación sea confiable?**

Una simplificación útil es:

```text
                    TCP
         «Necesito transmitir correctamente
                 esta información»
                     ↓
                    IP
         «Necesito llevar estos paquetes
                 hasta ese destino»
```

Por ejemplo, si queremos enviar `HOLA`, TCP puede encargarse de dividir y controlar la transmisión, mientras IP se ocupa de direccionar los paquetes.

---

# 🧠 El concepto fundamental de esta etapa

Para mí, este es el aprendizaje más importante que deberían llevarse del período 1950–1979:

```text
1950
Computadoras aisladas
       ↓
1960
Investigación sobre redes
       ↓
Conmutación de paquetes
       ↓
1969
ARPANET
       ↓
1971
Email
       ↓
1973
Interconexión de redes
       ↓
1974
TCP
       ↓
1976
Ethernet
       ↓
1978
TCP/IP
       ↓
1980s
Internet moderno
       ↓
1989
World Wide Web
       ↓
1990s
Web
```

---

# ⚠️ Una aclaración fundamental

En 1979 todavía no existía la Web.

No había:

- HTML.
- CSS.
- JavaScript.
- Chrome.
- Páginas web.
- Sitios web.

Lo que se estaba construyendo era la infraestructura y los protocolos que posteriormente permitirían que existiera la Web.

Por eso, para una materia de Introducción al Desarrollo Web, los grupos de 1950–1969 y 1970–1979 deberían poder responder especialmente estas tres preguntas:

1. **¿Qué problema querían solucionar?** Conectar computadoras y compartir información y recursos.
2. **¿Qué soluciones fueron apareciendo?** Conmutación de paquetes → ARPANET → protocolos → TCP/IP → interconexión de redes.
3. **¿Cómo se relaciona esto con la Web?** La Web todavía no existía. Estos avances construyeron la infraestructura sobre la cual décadas después se desarrollaría la World Wide Web.

---

# 🎯 Idea final para los alumnos

La evolución durante estas décadas puede resumirse así:

```text
COMPUTADORAS AISLADAS
        ↓
«¿Podemos conectarlas?»
        ↓
REDES DE COMPUTADORAS
        ↓
«¿Cómo enviamos la información?»
        ↓
CONMUTACIÓN DE PAQUETES
        ↓
«¿Podemos conectar muchas computadoras?»
        ↓
ARPANET
        ↓
«¿Podemos comunicarnos entre personas?»
        ↓
EMAIL
        ↓
«¿Podemos conectar redes diferentes?»
        ↓
TCP/IP
        ↓
INTERNET
        ↓
«¿Podemos compartir documentos mediante enlaces?»
        ↓
WORLD WIDE WEB
        ↓
DESARROLLO WEB
```
