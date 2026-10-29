# Diseño del Sistema - Mesa de Ayuda Técnica

## 1. Modelo de datos

### Entidad: Ticket

- **id**: (número o texto, autogenerado, obligatorio)
- **titulo**: (texto, obligatorio - "Título del problema")
- **descripcion**: (texto, opcional - "Detalles de la falla")
- **prioridad**: (texto: "Alta" | "Media" | "Baja", obligatorio)
- **tecnicoAsignado**: (texto, obligatorio - Nombre del técnico responsable)
- **estado**: (texto: "Abierto" | "En Proceso" | "Resuelto", obligatorio)

---

## 2. Rutas de la API

| Método     | Ruta           | Qué hace                                                        |
| :--------- | :------------- | :-------------------------------------------------------------- |
| **GET**    | `/tickets`     | Lista todos los tickets registrados para mostrarlos en la tabla |
| **GET**    | `/tickets/:id` | Consulta un ticket específico por su ID                         |
| **POST**   | `/tickets`     | Crea un nuevo ticket desde el formulario principal              |
| **PUT**    | `/tickets/:id` | Edita un ticket existente                                       |
| **DELETE** | `/tickets/:id` | Elimina un ticket del sistema                                   |

---

## 3. Estructura de carpetas del proyecto

```text
/proyecto
  /src
    /rutas         → define las rutas y qué función atiende cada una
    /controladores → la lógica de cada acción (crear, listar, editar...)
    /data          → donde se guarda la información de los tickets
  index.js         → arranca el servidor Express
  package.json
  requisitos.md
  readme.md
  diseno.md
```
