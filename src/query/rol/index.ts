import { Axios } from "../../api";
import { IListRol} from "../../interface";


export const listRoles = async():Promise<IListRol>=>{
  const {data} = await Axios.get<IListRol>("/rol");
  console.log(data);
  return data;
}