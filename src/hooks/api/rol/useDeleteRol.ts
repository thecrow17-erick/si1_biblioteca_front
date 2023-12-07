import { useMutation } from '@tanstack/react-query';
import { deleteRol } from '../../../query/rol';

export const useDeleteRol = () => {
  const mutationDeleteRol = useMutation({
    mutationFn: deleteRol,
    onMutate: (body)=>{
      console.log(body);
    }
  })
  return {
    mutationDeleteRol
  }
}