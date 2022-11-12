export interface DamageTableI {
  code: string;
  percent: number;
  name: string;
}

export interface ProductDetailI {
  pk: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  detalle_sala: Detallesala;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  detalle_producto: Detalleproducto;
}

export interface Detalleproducto {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  id_detalle: number;
  producto: Producto;
  estado: Tiposala;
}

export interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
}

export interface Detallesala {
  id_detalle: number;
  imagen: string;
  tipo_sala: Tiposala;
}

export interface Tiposala {
  id: number;
  descripcion: string;
}
