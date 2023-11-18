import { FC } from "react"

interface props{
  name: string,
  value: string | number | boolean
}

export const Td:FC<props> = ({name,value}) => {
  return (
    <td className={`${(value === true)? "text-green-700":(value === false)? "text-red-500": "text-gray-700"} p-2 md:border md:border-grey-500 text-left font-semibold block md:table-cell`}>
      <span className="inline-block w-1/3 md:hidden font-bold">{name+":  "}</span>
      {(value === true)? "Entregado":(value === false)? "En espera": value}
    </td>
  )
}
