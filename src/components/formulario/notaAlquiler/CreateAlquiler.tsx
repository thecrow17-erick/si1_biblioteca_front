import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react";
import { AlertError } from "../../alerts";
import { ICreateNotaAlquiler } from "../../../interface/notaAlquiler";
import { useNavigate } from "react-router-dom";
interface props{
    onSubmit: SubmitHandler<ICreateNotaAlquiler>,
}
export const CreateAlquiler:FC<props> = ({onSubmit})=> {
    const navigate = useNavigate();
    const {register,handleSubmit, formState:{errors}} = useForm<ICreateNotaAlquiler>();
    
    return (
    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de alquiler</label>
            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("fechaAlquiler",{
                required:{
                    value: true,
                    message: "Ingrese un Fecha de Alquiler valido"
                },
                })}
                />
                {
                    errors.fechaAlquiler && (
                        <AlertError msg={errors.fechaAlquiler?.message} />
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
                })
            }
            />
            {
                errors.precio && (
                    <AlertError msg={errors.precio?.message} />
                )
            }
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de devolucion</label>
            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("fechaDevolucion",{
                required:{
                    value: true,
                    message: "Ingrese un Fecha de Devolucion valida"
                },
                })}
                />
                {
                    errors.fechaDevolucion && (
                        <AlertError msg={errors.fechaDevolucion?.message} />
                    )
                }
        </div>
        <div className="mt-10 w-full px-20 flex justify-between">

            <button className="inline-block w-full rounded-lg mt-5 bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
            onClick={() => navigate('/admin/reservas')}
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
