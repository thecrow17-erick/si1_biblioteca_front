import { FC} from 'react'
import {
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { ICrearRol } from '../../../interface'
import { useNavigate } from 'react-router-dom'
import { AlertError } from '../../alerts'


interface props{
    onSubmit: SubmitHandler<ICrearRol>,
}

export const CrearRol:FC<props> = ({onSubmit}) => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm<ICrearRol>()
return (
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("descripcion",
        {
            required:{
                value: true,
                message: "La descripción es requerida"
            }
            })}
            />
            {
                errors.descripcion && (
                    <AlertError msg={errors.descripcion?.message} />
                )
            }
            <div className="mt-10 w-full px-20 flex justify-between">

                <button className="inline-block w-full rounded-lg mt-5 bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
                onClick={() => navigate('/admin/roles')}
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
