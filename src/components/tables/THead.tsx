import { FC } from "react"

type props = {
  data: Array<string>
}

export const THead:FC<props> = ({data}) => {
  return (
    <thead className="block md:table-header-group">
      <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
        {
          data.map((h,i)=> (
            <th key={i} className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">{h}</th>
          ))
        }
      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
      </tr>
    </thead>
  )
}
