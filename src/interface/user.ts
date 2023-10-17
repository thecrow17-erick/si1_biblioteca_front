import { IRol } from "./rol"

export interface IGetUser {
  total: number,
  allUsers: Array<IUser>
}

export interface IUser {
  id: number,
  email: string,
  nombre: string,
  telefono: string,
  password?: string
  rol: {
    descripcion: string
  }| IRol
}
export interface ITUsers {
  id: number,
  email: string,
  nombre: string,
  telefono: string,
  rol: string
}
