import {
  useNavigate
} from 'react-router-dom'

import { Loading } from '../../../components/Loading';
import { THead } from '../../../components/tables/THead';
import { Actions, Td, Tr } from '../../../components/tables';


import { useQueryUsers } from '../../../hooks/api/user';

export const UserPage = () => {
  const navigate = useNavigate();
  const {queryUsers} = useQueryUsers();
  const dataHead: Array<string> = [
    "Id",
    "nombre",
    "Email",
    "Telefono",
    "rol"
  ];
  const dataBody = queryUsers.data?.allUsers?.map((user)=>({
    id: user.id,
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono,
    rol: user.rol.descripcion 
  })) || []
  return queryUsers.isFetching?(
    <Loading/>
  ):(
    <div className="xl:px-5 xl:pt-10 ">
      <div className="flex justify-between md:p-0 p-3">
        <div className='xl:flex xl:justify-center'>
          <h1 className="font-semibold text-lg md:mr-5">Listas de Usuarios</h1>
          <button onClick={()=> queryUsers.refetch()} className="bg-blue-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Actualizar
        </button>
        </div>
        <button onClick={()=> navigate('/admin/user/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Crear Usuario
        </button>
      </div>
      <div className="py-5">
        <table className="min-w-full border-collapse block md:table">
          <THead data={dataHead}/>
          <tbody>
            {
              dataBody.map((b,i) =>(
                <Tr idx={i} key={i}>
                    {
                      Object.entries(b).map(([key,value],idx)=>(
                        <Td name={key} value={value} key={idx}/>
                      ))
                    }
                    <Actions onDelete={()=>console.log(b.id)} onUpdate={()=>console.log(b.id)} id={b.id}/>
                </Tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
  )
}
