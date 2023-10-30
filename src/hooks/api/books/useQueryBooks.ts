import { useQuery } from "@tanstack/react-query";
import { listBooks } from "../../../query/book";



export const useQueryBooks = () => {
  const queryBooks = useQuery(["books"],
  ()=>listBooks(),{
    staleTime: 1000 * 60 * 60
  }
  )

  return {
    queryBooks
  }
}
