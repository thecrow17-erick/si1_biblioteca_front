import { Axios } from "../../api";
import { ICreateRol, IListRol, Rol} from "../../interface";


export const listRoles = async():Promise<IListRol>=>{
  const {data} = await Axios.get<IListRol>("/rol");
  console.log(data);
  return data;
}

export const createRol = async({descripcion}: Rol):Promise<ICreateRol>=>{
  const {data} = await Axios.post<ICreateRol>("/rol",{descripcion});
  console.log(data);
  return data;
}

export const deleteRol = async(id:number):Promise<Rol>=>{
  const {data} = await Axios.delete<Rol>(`/rol/${id}`)
  return data
}