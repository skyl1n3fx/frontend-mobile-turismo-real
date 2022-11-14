/* eslint-disable @typescript-eslint/naming-convention */
export interface RunsI {
  servicios: Servicio[];
}

export interface Servicio {
  fecha_inicio: string;
  hora_inicio: string;
  fecha_termino: string;
  hora_termino: string;
  nombre: string;
  telefono: string;
  tr_ida?: Trida;
  tr_vuelta?: Trida;
}

export interface Trida {
  nombre: string;
  precio: number;
  tipo_ubicacion: string;
  ciudad: string;
}
