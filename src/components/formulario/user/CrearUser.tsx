import { FC} from 'react'
import {
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { AlertError } from '../../alerts'
import { useQueryRoles } from '../../../hooks/api/rol'
import { Loading } from '../../Loading'
import { ICrearUsuario } from '../../../interface'
import { useNavigate } from 'react-router-dom'


interface props{
  onSubmit: SubmitHandler<ICrearUsuario>,

}

export const CrearUser:FC<props> = ({onSubmit}) => {
  const navigate = useNavigate();
  const {queryRoles} = useQueryRoles();
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<ICrearUsuario>()

  return (
    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("nombre",
        {
          required:{
            value: true,
            message: "El nombre es requerido"
          }
        })}
        />
         {
          errors.nombre && (
            <AlertError msg={errors.nombre?.message} />
          )
        }
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("email",{
          required:{
            value: true,
            message: "El email es requerido"
          }
        })}
        />
        {/* {
          errors.nombre && (
            <AlertError msg={errors.email?.message} />
          )
        } */}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("telefono",{
          required:{
            value: true,
            message: "El telefono es requerido"
          },
          maxLength: {
            value: 8,
            message: "Ingrese un telefono valido"
          }
        })}
        />
        {
          errors.nombre && (
            <AlertError msg={errors.telefono?.message} />
          )
        } 
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("password"
        ,{
          required:{
            value: true,
            message: "El password es requerido"
          },
          minLength: {
            value: 8,
            message: "Ingrese un password valido"
          }
        })}
        
        />
        {
          errors.nombre && (
            <AlertError msg={errors.password?.message} />
          )
        }
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repite Password</label>
        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      {/* 
        //roles
      */}
      <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("rolId"
            ,{
              required:{
                value: true,
                message: "Seleccion un rol valido"
              },
              validate: (data: number)=>{
                if(data === 0) return "Seleccion una un rol"
              }
            })}
            >
            <option value={"0"} selected>-- SELECCIONE --</option>
            {
              queryRoles.isLoading ? (
                <Loading />
              ) : (
                queryRoles.data?.allRoles.map((rol) => (
                  <option value={rol.id} key={rol.id} selected>
                    {rol.descripcion}
                  </option>
                ))
              )
            } 
          </select>
          {
          errors.nombre && (
            <AlertError msg={errors.password?.message} />
          )
        }
      </div>
      <div className="mt-10 w-full px-20 flex justify-between">

            <button className="inline-block w-full rounded-lg mt-5 bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
            onClick={() => navigate('/admin/users')}
            >
            Cancelar
            </button>

            <button
            type="submit"
            className="inline-block w-full rounded-lg mt-5 bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
            Send Enquiry
            </button>

        </div>
    </form>
  )
}
