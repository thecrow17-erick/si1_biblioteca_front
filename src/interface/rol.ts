export interface IGetRol {
  total: number,
  allRoles: Array<IRol>
}
export interface IRol{
  id: number,
  descripcion: string,
  createdAt: string,
  updatedAt: string
}