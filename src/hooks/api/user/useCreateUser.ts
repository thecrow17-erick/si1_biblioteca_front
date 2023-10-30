import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../query/user";


export const useCreateUser = () => {
  const mutationCreateUser = useMutation({
    mutationFn: createUser,
    onMutate: (body)=>{
      console.log(body);
    }
  });
  return {
    mutationCreateUser
  }
}
