import { Link } from "react-router-dom"
import {
   AiOutlineUser,
   AiFillHome,
   AiFillShop
} from 'react-icons/ai'

import {BsPersonRolodex} from 'react-icons/bs'
import {ImBooks} from 'react-icons/im'

export const SideBarMenu = () => {
  return (
   <aside  className="md:block hidden bg-cyan-950 w-64 h-screen fixed rounded-none border-none">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <Link to="/admin/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <AiFillHome />
               </div>
               <span className="ml-3">Home</span>
            </Link>
         </li>
         <li>
            <Link to="/admin/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <AiOutlineUser />
               </div>
               <span className="ml-3">Usuario</span>
            </Link>
         </li>
         <li>
            <Link to="/admin/roles" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <BsPersonRolodex />
               </div>
               <span className="ml-3">Roles</span>
            </Link>
         </li>
         <li>
            <Link to="/admin/books" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <ImBooks />
               </div>
               <span className="ml-3">Libros</span>
            </Link>
         </li>
         <li>
            <Link to="/admin/nota-ingresos" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <AiFillShop />
               </div>
               <span className="ml-3">Nota de ingreso</span>
            </Link>
         </li>
      </ul>
      </div>
   </aside>
  )
}
