import { useQuery } from "@tanstack/react-query";
import { BooksClient } from "../../../query/book";



export const useQueryCliente = () => {
  const queryBooks = useQuery(["books"],
  ()=>BooksClient(),{
    staleTime: 1000 * 60 * 60
  }
  )

  return {
    queryBooks
  }
}
