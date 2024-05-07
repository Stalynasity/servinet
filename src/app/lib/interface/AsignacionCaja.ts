export interface AsignacionCaja {
  id: number; // Identificador único de la asignación
  usuarioGestorId: number; // ID del usuario gestor que realiza la asignación
  cajaId: number; // ID de la caja asignada
  fechaAsignacion: Date; // Fecha de la asignación
}
