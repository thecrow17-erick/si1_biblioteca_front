import { useMutation } from "@tanstack/react-query";
import { authLogin } from "../../../query/auth";



export const useMutationLogin = () => {
  const loginMutation = useMutation({
    mutationFn: authLogin,
    onMutate: (body)=>{
      console.log(body);
    }
  })
  return {
    loginMutation
  }
}
