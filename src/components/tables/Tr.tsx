import React, { FC } from "react"


interface props {
  children: React.ReactNode,
  idx: number
}

export const Tr:FC<props> = ({children, idx}) => {
  return (
    <tr className={`${(idx % 2 == 0)?"bg-gray-300": "bg-white"} border border-grey-500 md:border-none block md:table-row`}>
      {
        children
      }
    </tr>
  )
}
