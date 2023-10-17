import { Outlet } from 'react-router-dom'
import { SideBarMenu } from './';

export const Header = () => {
  return (
    <>
      <header className='bg-gray-700 flex p-3 h-36' >
        <nav>
          <img className='h-24 w-auto' src="https://www.santacruz.gob.bo/sites/default/files/logo-1.png" alt="Logo-Libreria" />
        </nav>
      </header>  
      <SideBarMenu/>
      <main className="pl-64">
        <Outlet/>  
      </main>
    </>
  )
}
