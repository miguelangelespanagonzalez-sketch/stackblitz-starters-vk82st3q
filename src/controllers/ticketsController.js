const data = require('../data/tickets');

// Listar todos los tickets con soporte para filtros por query params (?estado=...&tecnicoAsignado=...)
function listar(req, res) {
  let resultado = data.obtenerTodos();
  const { estado, tecnicoAsignado } = req.query;

  if (estado) {
    resultado = resultado.filter(
      (t) => t.estado.toLowerCase() === estado.toLowerCase()
    );
  }
  if (tecnicoAsignado) {
    resultado = resultado.filter((t) =>
      t.tecnicoAsignado.toLowerCase().includes(tecnicoAsignado.toLowerCase())
    );
  }

  res.json(resultado);
}

// Obtener un ticket específico por su ID
function obtener(req, res) {
  const id = parseInt(req.params.id);
  const ticket = data.obtenerPorId(id);

  if (!ticket) {
    return res.status(404).json({ error: 'Ticket no encontrado' });
  }
  res.json(ticket);
}

// Crear un nuevo ticket con validación de campos obligatorios
function crear(req, res) {
  const { titulo, descripcion, prioridad, tecnicoAsignado } = req.body;

  if (!titulo) {
    return res.status(400).json({ error: 'El campo "título" es obligatorio' });
  }

  const nuevoTicket = data.crear({
    titulo,
    descripcion: descripcion || '',
    prioridad: prioridad || 'media',
    tecnicoAsignado: tecnicoAsignado || 'Miguel Ángel España',
  });

  res.status(201).json(nuevoTicket);
}

// Actualizar un ticket existente (Sprint 2 - Método PUT)
function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const ticketActualizado = data.actualizar(id, req.body);

  if (!ticketActualizado) {
    return res
      .status(404)
      .json({ error: 'Ticket no encontrado para actualizar' });
  }

  res.json(ticketActualizado);
}

// Eliminar un ticket (Sprint 2 - Método DELETE)
function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const exito = data.eliminar(id);

  if (!exito) {
    return res
      .status(404)
      .json({ error: 'Ticket no encontrado para eliminar' });
  }

  res.status(204).send();
}

// Listar los técnicos de soporte disponibles en la mesa de ayuda
function listarTecnicos(req, res) {
  res.json(data.obtenerTecnicos());
}

module.exports = {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar,
  listarTecnicos,
};
