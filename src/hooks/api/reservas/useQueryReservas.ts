import { useQuery } from "@tanstack/react-query";
import {listReservasClientes} from '../../../query/reservas'

export const useQueryReservas = (token: string) => {
  const queryReservas = useQuery(["reservas"],
  ()=>listReservasClientes(token),{
    staleTime: 1000 * 60 * 60
  }
  )
  return {
    queryReservas
  }
}
