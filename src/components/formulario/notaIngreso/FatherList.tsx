import React, { FC } from "react"

interface props {
  children?: React.ReactNode,
  listBooks: boolean,
  idx: number
}

export const FatherList:FC<props> = ({children,listBooks,idx}) => {
  return (
    <tr className={`${(idx % 2 == 0)?"bg-gray-300": "bg-white"} border border-grey-500 md:border-none block md:table-row`}>
      {
        children
      }
      {
        (listBooks)&&(
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-5 border rounded-2xl"
            >
              Eliminar
            </button>
          </td>
        )
      }
    </tr>
  )
}
