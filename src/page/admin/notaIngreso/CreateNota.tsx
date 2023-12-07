import { CreateIngreso } from '../../../components/formulario/notaIngreso/CreateIngreso';


export const CreateNota = () => {
  return (
    <>
      <div className="md:w-4/5 w-full md:p-2 p-5">
        <h1 className="font-bold text-2xl text-center">Crear Nota de ingreso</h1>
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 md:w-full">
          <CreateIngreso/>
        </div>
      </div>
    </>
  )
}
