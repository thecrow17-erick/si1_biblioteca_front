import {Axios} from '../../api/'
import { IBook,  IBooksCliente,  IListBooks } from '../../interface'


//lista de libros admin
export const listBooks = async(skip:number,take: number):Promise<IListBooks> =>{
  const {data} = await Axios.get<IListBooks>(`/libro?skip=${skip}&take=${take}`);
  console.log(data);
  return data;
}
//crear libro
export const createBook = async (datos: FormData):Promise<IBook> => {
  const {data} = await Axios.post<IBook>("/libro",datos);
  return data;
}

export const BooksClient = async ():Promise<IBooksCliente> => {
  const {data} = await Axios.get<IBooksCliente>("/libro/cliente");
  console.log(data);
  return data;
}