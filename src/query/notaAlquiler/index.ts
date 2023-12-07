import {Axios} from '../../api/'
import { INotaAlquiler } from '../../interface/notaAlquiler';

export const createAlquilerCliente = async(datos: FormData):Promise<INotaAlquiler> =>{
    const {data} = await Axios.post<INotaAlquiler>("/nota-alquiler",datos)
    console.log(data);
    return data;
} 