import { Axios } from "../../api";
import { IBodyReservaAxios, IReservaCliente, IResponseReserva } from "../../interface/reserva";



export const listReservasClientes = async(token: string):Promise<IReservaCliente> =>{
  const {data} = await Axios.get<IReservaCliente>("/reserva/cliente",{
    headers:{
      "auth-token": token
    }
  });
  console.log(data);
  return data;
}


export const postReservas = async(Body: IBodyReservaAxios,token: string):Promise<IResponseReserva> =>{
  const {data} = await Axios.post<IResponseReserva>("/reserva",Body,{
    headers:{
      "auth-token": token
    }
  });
  console.log(data);
  return data;
}