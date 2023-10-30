import {
  SubmitHandler,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {toast,Toaster} from 'react-hot-toast';

import { Loading } from '../../../components/Loading';
import { useCreateUser } from '../../../hooks/api/user';
import { CrearUser } from '../../../components/formulario/CrearUser';
import { ICrearUsuario } from '../../../interface';



export const CreateUser = () => {
  const navigate = useNavigate();
  const {mutationCreateUser} = useCreateUser();
  const onSubmit:SubmitHandler<ICrearUsuario> = ({email,nombre,password,rolId,telefono})=>{
    mutationCreateUser.mutate({
      email,nombre,password,rolId: +rolId,telefono
    },{
      onSettled: (data,error,variables,context)=>{
        console.log(data);
        if(data){
          toast.success("Usuario creado correctamente.")
          setTimeout(() => {
            navigate("/admin/users")
          }, 3000);
        }
        console.log(error);
        console.log(variables);
        console.log(context);
      }
    })
  }
  return mutationCreateUser.isLoading?(
    <Loading/>
  ):(
    <div className="md:w-2/3 w-full md:p-2 p-5">
      <Toaster position='top-center'/>
      <h1 className="font-bold text-2xl text-center">Crear Productos</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <CrearUser onSubmit={onSubmit}/>
      </div>
    </div>
  )
}
