import { FC } from "react"

interface props {
  value: string | number,
  name: string,
}

export const BookList:FC<props> = ({value,name}) => {
  return (
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
      <span className="inline-block w-1/3 md:hidden font-bold">{name+":  "}</span>
      {value}
    </td>
  )
}
