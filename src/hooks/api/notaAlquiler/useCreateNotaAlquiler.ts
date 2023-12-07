import { useMutation } from "@tanstack/react-query";
import { createAlquilerCliente } from "../../../query/notaAlquiler";

export const useCreateNotaAlquiler = () => {
  const mutationCreateNotaAlquiler = useMutation({
    mutationFn: createAlquilerCliente,
    onMutate: (body)=>{
      console.log(body);
    }
  })
  
  return {
    mutationCreateNotaAlquiler
  }
}
