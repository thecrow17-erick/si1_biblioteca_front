export interface IListRol {
  total: number,
  allRoles: Array<IRol>
}

export interface ICreateRol {
  rol: Rol
}

export interface Rol {
  id?:  number;
  descripcion: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IRol{
  id?: number,
  descripcion: string,
  createdAt?: string,
  updatedAt?: string
}
export interface ICrearRol{
  descripcion: string,
}

