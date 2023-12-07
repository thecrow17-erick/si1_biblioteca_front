import { Axios } from "../../api";
import { IBodyReservaAxios, IReservaAdmin, IReservaCliente, IResponseReserva } from "../../interface/reserva";



export const listReservasCliente = async(token: string):Promise<IReservaCliente> =>{
  const {data} = await Axios.get<IReservaCliente>("/reserva/cliente",{
    headers:{
      "auth-token": token
    }
  });
  console.log(data);
  return data;
}

export const listReservasClientes = async():Promise<IReservaAdmin> =>{
  const {data} = await Axios.get<IReservaAdmin>("/reserva/admin");
  console.log(data);
  return data;
}


export const postReservas = async({Body,token}: {Body: IBodyReservaAxios,token: string}):Promise<IResponseReserva> =>{
  const {data} = await Axios.post<IResponseReserva>("/reserva",Body,{
    headers:{
      "auth-token": token
    }
  });
  console.log(data);
  return data;
}

export const deleteReserva = async({id,token}: {id:number,token: string}):Promise<IResponseReserva> => {
  const {data} = await Axios.delete<IResponseReserva>(`/reserva/${id}`,{
    headers:{
      "auth-token": token
    }
  })
  console.log(data);
  return data;
}