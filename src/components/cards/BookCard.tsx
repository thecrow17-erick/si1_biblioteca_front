import { FC } from 'react';


interface props{
  titulo: string,
  imagen: string,
  cantidad: number,
  precio: string
}

export const BookCard:FC<props> = ({cantidad,imagen,titulo,precio}) => {
  return (
    <div className="group block p-10">
      <img
        src={imagen}
        alt={titulo}
        className=" w-full object-cover sm:h-auto"
      />
      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {titulo}
          </h3>
          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            Disponibles: {cantidad}
          </p>
        </div>
        <p className="text-gray-900">${precio}</p>
      </div>
    </div>
  )
}
