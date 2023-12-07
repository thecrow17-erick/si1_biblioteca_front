import { useMutation } from "@tanstack/react-query";
import { createRol } from "../../../query/rol";

export const useCreateRol = () => {
    const mutationCreateRol = useMutation({
      mutationFn: createRol,
      onMutate: (body)=>{
        console.log(body);
      }
    });
    return {
      mutationCreateRol
    }
  }