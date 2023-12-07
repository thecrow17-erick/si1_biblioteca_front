import { useQuery } from "@tanstack/react-query";
import {listReservasClientes, listReservasCliente} from '../../../query/reservas'

export const useQueryReservasCliente = (token: string) => {
  const queryReserva = useQuery(["reserva"],
  ()=>listReservasCliente(token),{
    staleTime: 1000 * 60 * 60
  }
  )
  return {
    queryReserva
  }
}
export const useQueryReservasClientes = () => {
  const queryReservas = useQuery(["reservas"],
  ()=>listReservasClientes(),{
    staleTime: 1000 * 60 * 60
  }
  )
  return {
    queryReservas
  }
}
