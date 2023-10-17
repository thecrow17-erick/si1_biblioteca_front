import {
  useNavigate
} from 'react-router-dom'

import { Loading } from '../../../components/Loading';
import {
  useGet
} from '../../../hooks/api'
import { IGetUser, ITUsers } from '../../../interface/user';
import { THead } from '../../../components/tables/THead';
import { TBody } from '../../../components/tables/TBody';


export const UserPage = () => {
  const navigate = useNavigate();
  const {data,isFetching} = useGet<IGetUser>({url: "/user"});
  const dataHead: Array<string> = [
    "Id",
    "nombre",
    "Email",
    "Telefono",
    "rol"
  ];
  const dataBody: Array<ITUsers> = data?.allUsers?.map((d) => ({
    id: d.id,
    nombre: d.nombre,
    email: d.email,
    telefono: d.telefono,
    rol: d.rol.descripcion
  })) || [];
  return isFetching?(
    <Loading/>
  ):(
    <div className="xl:px-5 xl:pt-10 ">
      <div className="flex justify-between md:p-0 p-3">
        <h1 className="font-semibold text-lg">Listas de Usuarios</h1>
        <button onClick={()=> navigate('/admin/user/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Crear Usuario
        </button>
      </div>
      <div className="py-5">
        <table className="min-w-full border-collapse block md:table">
          <THead data={dataHead}/>
          <TBody data={dataBody}/>
        </table>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
  )
}
