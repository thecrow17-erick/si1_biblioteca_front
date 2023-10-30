import {Axios} from '../../api/'
import { IBook,  IListBooks } from '../../interface'

export const listBooks = async():Promise<IListBooks> =>{
  const {data} = await Axios.get("/libro");
  console.log(data);
  return data;
}

export const createBook = async (datos: FormData):Promise<IBook> => {
  const {data} = await Axios.post<IBook>("/libro",datos);
  return data;
}