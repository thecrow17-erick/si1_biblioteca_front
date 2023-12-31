// Generated by https://quicktype.io

export interface INotaIngreso {
  total:           number;
  allNotasIngreso: AllNotasIngreso[];
}

export interface AllNotasIngreso {
  id:           number;
  proveedor:    string;
  fechaIngreso: string;
}

//crear
export interface ICreateNota{
  id: number,
  fechaIngreso: Date,
  proveedor: string
}




export interface IBodyIngreso {
  proveedor: string,
  detalle: Array<IDetalleIngreso>
}
export interface IDetalleIngreso{
  libroId: number,
  cantidad: number
}

export interface IBodyNota {
  titulo: string,
  libroId: number,
  cantidad: number
}