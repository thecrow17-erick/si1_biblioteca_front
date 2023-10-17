import {
  useQuery
} from '@tanstack/react-query';

import {
  Axios
} from '../../api'

interface props {
  url: string
}

export const useGet = <T>({url}:props) => {
  const fetch = async()=>{
    try {
      const {data} = await Axios.get<T>(url);
      return data;
    } catch (err) {
      throw new Error("Error");
    }
  }
  const query = useQuery<T,Error>(["getQuery", URL],{
    queryFn: fetch,
    refetchOnWindowFocus: false
  })
  return query; 
}

