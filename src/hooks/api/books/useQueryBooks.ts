import { useQuery } from "@tanstack/react-query";
import { listBooks } from "../../../query/book";



export const useQueryBooks = (skip:number,take:number) => {
  const queryBooks = useQuery(["books",take,skip],
  ()=>listBooks(skip,take),{
    staleTime: 1000 * 60 * 60
  }
  )

  return {
    queryBooks
  }
}
