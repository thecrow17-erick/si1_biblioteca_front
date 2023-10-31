import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICreateBook } from '../../../interface'
import { AlertError } from '../../alerts'
interface props{
  onSubmit: SubmitHandler<ICreateBook>,
}


export const CrearLibro:FC<props> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<ICreateBook>()

  return (
    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("titulo",{
          required:{
            value: true,
            message: "Ingrese un titulo valido"
          }
        })}
        />
        {
          errors.titulo && (
            <AlertError msg={errors.titulo?.message} />
          )
        }
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Autor</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("autor",{
          required:{
            value: true,
            message: "Ingrese un Autor valido"
          }
        })}
        />
        {
          errors.autor && (
            <AlertError msg={errors.autor?.message} />
          )
        }
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edicion</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("edicion",{
          required:{
            value: true,
            message: "Ingrese un Edicion valido"
          }
        })}
        />
        {
          errors.edicion && (
            <AlertError msg={errors.edicion?.message} />
          )
        }
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("precio",{
          required:{
            value: true,
            message: "Ingrese un Precio valido"
          }
        })}
        />
        {
          errors.precio && (
            <AlertError msg={errors.precio?.message} />
          )
        }
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de lanzamiento</label>
        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register("fechaLanzamiento",{
          required:{
            value: true,
            message: "Ingrese un Fecha de lanzamiento valido"
          },
        })}
        />
        {
          errors.fechaLanzamiento && (
            <AlertError msg={errors.fechaLanzamiento?.message} />
          )
        }
      </div>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input type="file" multiple className="hidden" 
          {...register("img",{
            required:{
              value: true,
              message: "Ingrese un Imagen valido"
            }
          })}
          />
          {
            errors.img && (
              <AlertError msg={errors.img?.message} />
            )
          }
        </label>
      </div>
      <button
        type="submit"
        className="inline-block w-full rounded-lg mt-5 bg-black px-5 py-3 font-medium text-white sm:w-auto"
        >
        Send Enquiry
      </button>
    </form>
  )
}
