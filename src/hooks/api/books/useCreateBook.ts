import { useMutation } from "@tanstack/react-query";
import { createBook } from "../../../query/book";


export const useCreateBook = () => {
  const mutationCreateBook = useMutation({
    mutationFn: createBook,
    onMutate: (body)=>{
      console.log(body);
    }
  })
  
  return {
    mutationCreateBook
  }
}
