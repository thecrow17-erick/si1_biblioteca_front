import {Axios} from '../../api'
import { ICreateUser, IListUsers, User } from '../../interface';


//mostrar usuarios
export const listUsers = async():Promise<IListUsers> =>{
  const {data} = await Axios.get<IListUsers>("/user");
  return data;
}
//mostrar usuario, requerimento = id
export const mostrarUsuario = async(id:number):Promise<User> =>{
  const {data} = await Axios.get<User>(`/user/${id}`)
  return data
}

//crear usuario

export const createUser = async({email,nombre,password,rolId,telefono}:User):Promise<ICreateUser> =>{
  const {data} = await Axios.post<ICreateUser>("/user",{
    email,password,rolId,telefono,nombre
  })
  return data;
}


//eliminar usuario, requerimento = id
export const deleteUser = async(id:number):Promise<User> =>{
  const {data} = await Axios.delete<User>(`/user/${id}`)
  return data
}
