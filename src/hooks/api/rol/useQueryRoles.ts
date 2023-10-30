import { useQuery } from "@tanstack/react-query"
import { listRoles } from "../../../query/rol"

export const useQueryRoles = () => {
  const queryRoles = useQuery(["roles"],
    ()=>listRoles(),
    {
      staleTime: 1000* 60 * 60
    }
  )
  return {
    queryRoles
  } 
}
