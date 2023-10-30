import { useQuery } from "@tanstack/react-query";
import { listUsers } from "../../../query/user";

export const useQueryUsers = () => {
  const queryUsers = useQuery(["users"],
    ()=>listUsers(),
    {
      staleTime: 1000 * 60 * 60  
    } 
  )
  return {
    queryUsers
  }
}
