# 🗺️ Roadmap para convertirse en Desarrollador Web

## Introducción

Ser desarrollador web no significa solamente aprender un lenguaje de programación o un framework.

El objetivo del roadmap es mostrar una progresión desde los **fundamentos de programación** hasta la capacidad de **diseñar, desarrollar, probar, publicar y mantener una aplicación web real**.

> **Problema → Diseño → Desarrollo → Pruebas → Publicación → Mantenimiento**

---

# 1. 🧠 Fundamentos de programación

- Variables y tipos de datos.
- Operadores.
- Condicionales.
- Bucles.
- Funciones.
- Arrays y objetos.
- Modularización.
- Algoritmos.
- Manejo de errores.
- Conceptos básicos de programación orientada a objetos.

**Objetivo:** poder resolver problemas de programación sin depender de un framework.

**Proyecto sugerido:** aplicación de consola para gestionar productos.

---

# 2. 🌐 HTML

HTML permite construir la **estructura de una página web**.

- HTML semántico.
- Elementos y atributos.
- Formularios.
- Tablas.
- Multimedia.
- Links.
- Accesibilidad.
- SEO básico.

**Objetivo:** comprender cómo se estructura un documento web.

**Proyecto sugerido:** página web informativa de un negocio.

---

# 3. 🎨 CSS

CSS permite controlar la **presentación visual y distribución**.

- Selectores.
- Box model.
- Flexbox.
- Grid.
- Responsive Design.
- Media queries.
- Animaciones.
- Variables CSS.
- Diseño adaptable a dispositivos móviles.

**Objetivo:** construir interfaces atractivas y adaptables.

**Proyecto sugerido:** convertir el sitio anterior en un sitio responsive.

---

# 4. ⚙️ JavaScript

JavaScript incorpora **lógica e interacción**.

- Variables.
- Funciones.
- Arrays y objetos.
- DOM.
- Eventos.
- Formularios.
- Validaciones.
- Fetch.
- JSON.
- Promesas.
- `async/await`.
- Módulos.
- Manejo de errores.

**Objetivo:** crear páginas y aplicaciones web dinámicas.

**Proyecto sugerido:** aplicación de gestión de productos con altas, bajas, modificaciones y consultas.

---

# 5. 🔀 Git y GitHub

- Git.
- Repositorios.
- Commits.
- Branches.
- Merge.
- Pull Requests.
- Resolución de conflictos.
- GitHub.

**Objetivo:** mantener versiones, trabajar en equipo y gestionar el código profesionalmente.

**Proyecto sugerido:** utilizar Git desde el inicio y publicar el proyecto en GitHub.

---

# 6. ⚛️ Frontend

Una vez dominado JavaScript, incorporar una biblioteca o framework.

Una ruta posible:

> **React**

- Componentes.
- Props.
- State.
- Eventos.
- Hooks.
- Formularios.
- Routing.
- Consumo de APIs.
- Manejo del estado.
- Componentización.
- Reutilización.

**Objetivo:** construir interfaces modernas y aplicaciones de una sola página.

**Proyecto sugerido:** frontend de un sistema de gestión conectado a una API.

---

# 7. 🖥️ Backend

Una ruta posible:

> **Node.js → Express**

- Servidor HTTP.
- Rutas.
- Controllers.
- Services.
- Repositories.
- Middleware.
- Validaciones.
- Manejo de errores.
- Variables de entorno.
- Autenticación.
- Autorización.

**Objetivo:** construir servidores y APIs capaces de procesar las operaciones de una aplicación.

**Proyecto sugerido:** API REST para gestionar productos, categorías y usuarios.

---

# 8. 🗄️ Bases de datos

Se recomienda comenzar por bases de datos relacionales.

## SQL

- Modelo relacional.
- Tablas.
- Claves primarias.
- Claves foráneas.
- Relaciones.
- `SELECT`.
- `INSERT`.
- `UPDATE`.
- `DELETE`.
- JOIN.
- Agregaciones.
- Índices.
- Transacciones.

## Después

- ORMs.
- Bases NoSQL.
- Diferencias entre SQL y NoSQL.
- Cuándo utilizar cada alternativa.

**Proyecto sugerido:** conectar la API con una base de datos y persistir la información.

---

# 9. 🔌 APIs

En esta etapa se integran frontend y backend.

```text
┌─────────────┐
│   React     │
│  FRONTEND   │
└──────┬──────┘
       │
       │ HTTP / JSON
       ▼
┌─────────────┐
│     API     │
│   Express   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  DATABASE   │
└─────────────┘
```

- HTTP.
- GET.
- POST.
- PUT/PATCH.
- DELETE.
- Status codes.
- Headers.
- JSON.
- REST.
- Autenticación.
- Documentación de APIs.

**Objetivo:** comprender cómo se comunican las diferentes partes de una aplicación web.

---

# 10. 🔐 Seguridad

- Autenticación.
- Autorización.
- Hash de contraseñas.
- JWT / sesiones.
- CORS.
- XSS.
- SQL Injection.
- CSRF.
- Validación de datos.
- Manejo de secretos.
- Variables de entorno.

**Objetivo:** construir aplicaciones que protejan la información y controlen correctamente el acceso.

---

# 11. 🧪 Testing

Pasar de:

> "Funciona"

a:

> "Puedo demostrar que funciona."

- Unit testing.
- Integration testing.
- Testing de APIs.
- Testing frontend.
- Casos positivos.
- Casos negativos.
- Automatización.

**Objetivo:** detectar errores y garantizar que los cambios no rompan funcionalidades existentes.

---

# 12. ☁️ Deployment

Una aplicación no está terminada cuando funciona en `localhost`.

- Hosting.
- Dominios.
- HTTPS.
- Variables de entorno.
- Cloud.
- CI/CD.
- Docker.
- Logs.
- Monitoreo.

```text
localhost
    ↓
GitHub
    ↓
Build
    ↓
Deploy
    ↓
https://mi-aplicacion.com
```

**Objetivo:** llevar una aplicación desde el entorno local hasta un entorno accesible por usuarios reales.

---

# 13. 🏗️ Arquitectura y buenas prácticas

- Arquitectura por capas.
- Separación de responsabilidades.
- SOLID.
- Clean Code.
- Patrones de diseño.
- DRY.
- Manejo de errores.
- Logging.
- Documentación.
- Escalabilidad.
- Performance.

**Objetivo:** crear aplicaciones mantenibles, escalables y comprensibles por otros desarrolladores.

---

# 14. 🎯 La importancia de los proyectos

El roadmap no debería plantearse como una simple lista de cursos.

La mejor forma de aprender desarrollo web es **aplicar cada conocimiento en un proyecto**.

| Etapa | Proyecto |
|---|---|
| HTML | Página informativa |
| HTML + CSS | Sitio responsive |
| JavaScript | Aplicación interactiva |
| Git | Proyecto versionado |
| React | SPA |
| Node + Express | API |
| SQL | Persistencia |
| React + API | Aplicación full stack |
| Auth | Sistema con usuarios |
| Testing | Aplicación testeada |
| Deploy | Aplicación publicada |
| Arquitectura | Aplicación mantenible |

---

# 15. 🚀 Proyecto integrador

Como etapa final, el estudiante debería desarrollar un sistema real que integre los conocimientos adquiridos.

## El proyecto debería incluir

- Frontend.
- Backend.
- Base de datos.
- API REST.
- Autenticación.
- Autorización.
- Validaciones.
- Manejo de errores.
- Testing.
- Git.
- Deploy.
- Documentación.

## Ejemplos

- Sistema de gestión de turnos para un centro médico.
- Sistema de gestión de productos y ventas para un comercio.
- Sistema de gestión de trámites municipales.

---

# 16. 🧭 Roadmap completo

```text
                    DESARROLLADOR WEB
                           │
                           ▼
                ┌─────────────────────┐
                │ 1. FUNDAMENTOS      │
                │ Programación        │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 2. HTML             │
                │ Estructura          │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 3. CSS              │
                │ Diseño y Layout     │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 4. JAVASCRIPT       │
                │ Lógica e interacción│
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 5. GIT + GITHUB     │
                │ Versionado          │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 6. FRONTEND         │
                │ React / Vue / etc.  │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 7. BACKEND          │
                │ Node / Express      │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 8. BASE DE DATOS    │
                │ SQL / NoSQL         │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 9. APIs             │
                │ REST / HTTP / JSON  │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 10. SEGURIDAD       │
                │ Auth / permisos     │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 11. TESTING         │
                │ Calidad             │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 12. DEPLOYMENT      │
                │ Cloud / CI/CD       │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ 13. ARQUITECTURA    │
                │ Buenas prácticas    │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ PROYECTO INTEGRADOR │
                │ 🚀 Aplicación real  │
                └─────────────────────┘
```

---

# 17. 🎓 Pregunta final para los estudiantes

> **¿En qué momento puedo decir que soy desarrollador web?**

La respuesta que se busca construir es:

> **No cuando aprendí un framework, sino cuando puedo entender un problema, diseñar una solución, desarrollarla, probarla, publicarla y mantenerla.**

---

# 18. 💡 Idea central

El desarrollo web puede entenderse como una evolución:

```text
Aprender a programar
        ↓
Construir una página
        ↓
Hacerla interactiva
        ↓
Construir una aplicación
        ↓
Conectar un backend
        ↓
Persistir información
        ↓
Crear APIs
        ↓
Agregar seguridad
        ↓
Probar
        ↓
Publicar
        ↓
Mantener y escalar
        ↓
Resolver problemas reales
```

El objetivo final no es aprender una lista de tecnologías.

El objetivo es desarrollar la capacidad de:

> **analizar un problema → diseñar una solución → implementarla → probarla → publicarla → mantenerla y evolucionarla.**
