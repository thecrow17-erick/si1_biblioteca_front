import {Axios} from '../../api'
import { IAuth } from '../../interface';


interface BodyAuth{
  email:string,
  password:string
}

export const authLogin = async({email,password}: BodyAuth):Promise<IAuth>=>{
  const {data} = await Axios.post<IAuth>('/auth/signIn',{
    email,password
  });
  return data;
} 