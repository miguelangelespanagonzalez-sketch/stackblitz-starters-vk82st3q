let tecnicos = [
  {
    id: 1,
    nombre: 'Miguel Ángel España',
    especialidad: 'Administrador / Redes',
  },
  { id: 2, nombre: 'Lorenzo González', especialidad: 'Soporte Nivel 1' },
  { id: 3, nombre: 'Santiago Ocampo', especialidad: 'Soporte Nivel 2' },
];

let tickets = [];
let nextId = 1;

function obtenerTodos() {
  return tickets;
}

function obtenerPorId(id) {
  return tickets.find((t) => t.id === id);
}

function crear(datos) {
  const nuevoTicket = {
    id: nextId++,
    titulo: datos.titulo,
    descripcion: datos.descripcion || '',
    prioridad: datos.prioridad || 'media',
    estado: 'abierto',
    tecnicoAsignado: datos.tecnicoAsignado || 'Miguel Ángel España',
    fechaCreacion: new Date().toISOString(),
  };

  tickets.push(nuevoTicket);
  return nuevoTicket;
}

function actualizar(id, datos) {
  const ticket = obtenerPorId(id);
  if (!ticket) return null;
  Object.assign(ticket, datos);
  return ticket;
}

function eliminar(id) {
  const index = tickets.findIndex((t) => t.id === id);
  if (index === -1) return false;

  tickets.splice(index, 1);
  return true;
}

function obtenerTecnicos() {
  return tecnicos;
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
  obtenerTecnicos,
};
