import {
  useMutation,
} from '@tanstack/react-query';

import {
  Axios
} from '../../api'

interface props{
  url: string,
}

export const usePost = <T,X>({url}:props)=> {
  const fetch = async(data: T)=>{
    try {
      const response = await Axios.post<X>(url,data);
      return response.data;
    } catch (err) {
      throw new Error("Error");
    }
  }
  const mutation = useMutation<X,Error,T>({
    mutationFn: fetch,
  })

  return mutation;
}
