export interface CheckListI {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  detalle_sala: Detallesala;
}

export interface Detallesala {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  id_detalle: number;
  imagen: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  tipo_sala: Tiposala;
}

export interface Tiposala {
  id: number;
  descripcion: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  detalle_producto: Detalleproducto[];
}

export interface Detalleproducto {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  id_detalle: number;
  producto: Producto;
}

export interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
  estado: Estado;
}

export interface Estado {
  id: number;
  descripcion: string;
}

export interface DamageTableI {
  code: string;
  percent: number;
  name: string;
}
