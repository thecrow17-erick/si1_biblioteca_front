import { useMutation } from "@tanstack/react-query"
import { crearNota } from "../../../query/notaIngreso"

export const useCreateNota = () => {
  const mutationNota = useMutation({
    mutationFn: crearNota,
    onMutate: (body)=>{
      console.log(body);
    }
  })
  
  return {
    mutationNota
  }
}
