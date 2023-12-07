import {
  useNavigate
} from 'react-router-dom'

import { Loading } from '../../../components/Loading';
import { THead } from '../../../components/tables/THead';
import { Actions, Td, Tr } from '../../../components/tables';


import { useQueryRoles } from '../../../hooks/api/rol';
import { useDeleteRol } from '../../../hooks/api/rol/useDeleteRol';

export const PageRol = () => {
  const navigate = useNavigate();
  const {queryRoles} = useQueryRoles();
  const {mutationDeleteRol} = useDeleteRol();

  const dataHead: Array<string> = [
    "Id",
    "Descripcion",
    "CreatedAt",
    "UpdatedAt",
  ];
  const dataBody = queryRoles.data?.allRoles?.map((rol)=>({
    id: rol.id,
    descripcion: rol.descripcion,
    creado: rol.createdAt,
    modificado: rol.updatedAt
  })) || []

  const onClickDeleteRol = (id:number)=>{
  
    mutationDeleteRol.mutate(id,{
      onSettled(data, error, variables, context) {
        if(data){
          alert("Se ha eliminado la reserva");
          queryRoles.refetch();
        }
        console.log(data);
        console.log(error);
        console.log(variables);
        console.log(context);    
      },
    })
  }

  return queryRoles.isFetching?(
    <Loading/>
  ):(
    <div className="xl:px-5 xl:pt-10 ">
      <div className="flex justify-between md:p-0 p-3">
        <div className='xl:flex xl:justify-center'>
          <h1 className="font-semibold text-lg md:mr-5">Listas de Roles</h1>
          <button onClick={()=> queryRoles.refetch()} className="bg-blue-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Actualizar
        </button>
        </div>
        <button onClick={()=> navigate('/admin/roles/create')} className="bg-green-700 hover:bg-green-900 p-2 rounded-lg font-semibold text-white">
          Crear Rol
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
                        <Td name={key} value={value!} key={idx}/>
                      ))
                    }
                    <Actions onDelete={()=>onClickDeleteRol(b.id!)} onUpdate={()=>console.log(b.id)} id={b.id!}/>
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
