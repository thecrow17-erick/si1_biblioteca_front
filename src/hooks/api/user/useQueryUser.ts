import { useQuery } from '@tanstack/react-query'
import {useQueryUsers} from './useQueryUsers'
import { mostrarUsuario } from '../../../query/user'



export const useQueryUser = (id:number) => {
  const queryUser = useQuery(["user",id],
    ()=>mostrarUsuario(id),
    {
      enabled: !!useQueryUsers,
      staleTime: 1000 * 60 * 60
    }
  )
  return {
    queryUser
  }
}
