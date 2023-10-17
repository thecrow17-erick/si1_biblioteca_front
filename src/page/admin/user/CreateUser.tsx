import {
  SubmitHandler,
  useForm
} from 'react-hook-form'

import { useGet, usePost } from "../../../hooks/api"
import { IGetRol } from "../../../interface/rol";
import { AlertError } from '../../../components/alerts';
import { Loading } from '../../../components/Loading';

interface IBody {
  nombre: string,
  email: string,
  telefono: string,
  password: string,
  rolId: number,
}
interface IResponse {
  nombre: string,
  email: string,
  telefono: string,
  password: string,
  rolId: number,
  createdAt: string,
  updatedAt: string
}

export const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<IBody>()
  const {mutate,isLoading} = usePost<IBody,IResponse>({url: "/user"})
  const rol = useGet<IGetRol>({url: "/rol"});

  const onSubmit:SubmitHandler<IBody> = ({nombre,email,password,rolId,telefono})=>{
    mutate({email,nombre,password,rolId: parseInt(String(rolId)),telefono},{
      onSuccess:(data)=>{
        console.log(data);
        
      }
    })
  }
  return isLoading?(
    <Loading/>
  ):(
    <div className="md:w-2/3 w-full md:p-2 p-5">
      <h1 className="font-bold text-2xl text-center">Crear Productos</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("nombre",{
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
              {
                errors.nombre && (
                  <AlertError msg={errors.email?.message} />
                )
              }
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
              {...register("password",{
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
                  defaultValue={"0"}
                  {...register("rolId",{
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
                    rol.data?.allRoles?.map((r,idx)=>(
                      <option value={r.id} key={idx}>{r.descripcion}</option>
                    ))
                  }
                </select>
                {
                errors.nombre && (
                  <AlertError msg={errors.password?.message} />
                )
              }
            </div>
            
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
              Send Enquiry
            </button>
          </form>
      </div>
    </div>
  )
}
