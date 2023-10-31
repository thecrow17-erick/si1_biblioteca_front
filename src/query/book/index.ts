import {Axios} from '../../api/'
import { IBook,  IListBooks } from '../../interface'

export const listBooks = async(skip:number,take: number):Promise<IListBooks> =>{
  const {data} = await Axios.get(`/libro?skip=${skip}&take=${take}`);
  console.log(data);
  return data;
}

export const createBook = async (datos: FormData):Promise<IBook> => {
  const {data} = await Axios.post<IBook>("/libro",datos);
  return data;
}