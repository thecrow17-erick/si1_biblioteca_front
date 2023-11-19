import {Axios} from '../../api'
import { IBodyIngreso, ICreateNota, INotaIngreso } from '../../interface'

export const listNotas =async (): Promise<INotaIngreso> => {
  const {data} = await Axios.get<INotaIngreso>("/nota-ingreso");
  console.log(data);
  return data;
}

export const crearNota = async(datos: IBodyIngreso):Promise<ICreateNota> =>{
  const {data} = await Axios.post<ICreateNota>("/nota-ingreso",datos);
  return data;
}