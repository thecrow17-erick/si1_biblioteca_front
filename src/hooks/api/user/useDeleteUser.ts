import { useMutation } from '@tanstack/react-query';
import { deleteUser } from '../../../query/user';

export const useDeleteUser = () => {
  const mutationDeleteUser = useMutation({
    mutationFn: deleteUser,
    onMutate: (body)=>{
      console.log(body);
    }
  })
  return {
    mutationDeleteUser
  }
}
