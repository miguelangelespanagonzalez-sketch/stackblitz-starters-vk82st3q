# Análisis de Requisitos - Mesa de Ayuda Técnica

## Actores
- **Miguel Ángel España**: Técnico y Administrador del sistema.
- **Lorenzo González**: Técnico de soporte de nivel 1.
- **Santiago Ocampo**: Técnico de soporte de nivel 2.

## Requisitos funcionales
RF1. El sistema debe permitir registrar un nuevo ticket ingresando título, descripción, prioridad y técnico asignado.
RF2. El sistema debe permitir consultar y desplegar la lista completa de tickets registrados en una tabla dinamica.
RF3. El sistema debe permitir filtrar los tickets registrados por su estado (por ejemplo: Abierto, En Proceso, Resuelto).
RF4. El sistema debe permitir filtrar los tickets registrados por su nivel de prioridad (Alta, Media, Baja).
RF5. El sistema debe permitir asignar o reasignar un técnico responsable a cada ticket creado.

## Requisitos no funcionales
RNF1. La API del servidor debe procesar y responder las peticiones en formato JSON utilizando Express y Node.js.
RNF2. Los campos obligatorios del formulario (como el Título y la Prioridad) deben validarse para no permitir el envío de datos vacíos.
RNF3. La interfaz gráfica debe ser limpia, clara y accesible desde cualquier navegador web moderno.
RNF4. La aplicación debe mantener una estructura de código modular separando rutas, controladores y manejo de datos.
RNF5. Las respuestas de la API deben ser rápidas y ejecutarse de manera asíncrona para no congelar la pantalla del usuario.