import {Link, Outlet} from 'react-router-dom'

export const Navigator = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 h-28 shadow-2xl">
        <div className="logo">
          <img className='h-24 w-auto' src="https://www.santacruz.gob.bo/sites/default/files/logo-1.png" alt="Logo-Libreria" />
        </div>
        <ul className="flex">
          <li>
            <Link to={`/cliente/books`} className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"><i className="fas fa-home"></i> Libros</Link>
          </li>
          <li>
            <Link to={`/cliente/reservas`} className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" ><i className="fas fa-question"></i> Reservas</Link>
          </li>
          <li>
            <Link to={`/auth/signIn`} className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" ><i className="fas fa-reply" onClick={()=>{
              localStorage.removeItem("auth-token");
            }}></i> Cerrar Sesion</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

