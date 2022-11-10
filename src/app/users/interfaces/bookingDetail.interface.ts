export interface BookingDetailI {
  id: number;
  cliente: Cliente;
  vivienda: Vivienda;
  fecha_inicio: string;
  fecha_termino: string;
  abono: number;
  monto_pagado: number;
  total_pago: number;
  cant_personas: number;
  acompaniantes: any[];
  servicios: Servicio[];
  check_in: string;
  estado_checkin: string;
  check_out: string;
  estado_checkout: string;
}

export interface Servicio {
  id: number;
  tipo_servicio: string;
  precio: number;
  tipo_tranporte: string;
  nombre: string;
  descripcion: string;
  conductor: Conductor;
}

export interface Conductor {
  run: string;
  nombre: string;
  telefono: string;
  vehiculo: Vehiculo;
}

export interface Vehiculo {
  patente: string;
  modelo: string;
  marca: string;
  color: string;
}

export interface Vivienda {
  id: number;
  tipo_vivienda: Tipovivienda;
  nombre: string;
  descripcion: string;
  valor_noche: number;
  direccion: string;
  pais: Pais;
  estado_pais: Pais;
  ciudad: Pais;
}

export interface Pais {
  id: number;
  nombre: string;
}

export interface Tipovivienda {
  id: number;
  descripcion: string;
}

export interface Cliente {
  nombre: string;
  telefono: string;
  dni: string;
}
