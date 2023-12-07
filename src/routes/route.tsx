import { Navigate } from 'react-router-dom';
import {
  AuthPage
} from '../page/auth'
import { Header,Navigator } from '../components/nav';
import { CreateUser, UserPage } from '../page/admin/user';
import { UpdateUser } from '../page/admin/user/UpdateUser';
import { PageRol } from '../page/admin/rol';
import { PageLibros,CreateBook } from '../page/admin/libro';
import { CreateNota, NotaPage } from '../page/admin/notaIngreso';
import { PageBooks } from '../page/cliente/books';
import { PageReserva } from '../page/cliente/reservas/PageReserva';
import { CreateReserva } from '../page/cliente/reservas/CreateReserva';
import { PageReservas } from '../page/admin/reservas';
import { PageBitacora } from '../page/admin/bitacora';
import { GenerarNotaAlquiler } from '../page/admin/reservas/GenerarNotaAlquiler';
import { CreateRol } from '../page/admin/rol/CreateRol';
import { PageReportes } from '../page/admin/reportes';

interface TPages {
  path: string,
  element?: JSX.Element,
  children?: Array<TPages>,
}

const rutas :Array<TPages> = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Navigate to="/auth/signIn"/>
      },
      {
        path: "auth",
        children: [
          {
            path: "/auth",
            element: <Navigate to="/auth/signIn"/>
          },{
            path: "signIn",
            element: <AuthPage/>
          }
        ]
      },
      {
        path:"admin",
        element: <Header/>,
        children: [
          {
            path:"/admin",
            element: <Navigate to="/admin/home" />,
          },
          {
            path: "home",
            element: <PageReportes/>
          },
          //usuarios
          {
            path: "users",
            element: <UserPage/>
          },
          {
            path: "user",
            children:[
              {
                path: "/admin/user",
                element: <Navigate to="/admin/users"/>
              },
              {
                path:"create",
                element: <CreateUser/>
              },
              {
                path: "update/:id",
                element: <UpdateUser/>
              }
            ]
          },
          //roles
          {
            path: "roles",
            element: <PageRol/>
          },
          {
            path: "roles",
            children:[
              {
                path: "create",
                element: <CreateRol/>
              }
            ]
          },
          //libros
          {
            path: "books",
            element: <PageLibros/>
          },
          {
            path: "book",
            children:[
              {
                path:"/admin/book",
                element: <Navigate to="/admin/books"/>
              },{
                path: "create",
                element: <CreateBook/>
              }
            ]
          },
          //Nota de Ingresos
          {
            path: "nota-ingresos",
            element: <NotaPage/>
          },
          {
            path: "nota-ingreso",
            children: [
              {
                path: "nota-ingreso",
                element: <Navigate to="/admin/nota-ingresos"/>
              },
              {
                path: "create",
                element: <CreateNota/>
              }
            ]
          },
          //Reservas y Nota de Alquiler
          {
            path: "reservas",
            element: <PageReservas/>
          },
          {
            path: "reservas",
            children:[
              // {
              //   path:"/admin/reservas",
              //   element: <Navigate to="/admin/reservas"/>
              // },
              {
                path: "nota-alquiler-create",
                element: <GenerarNotaAlquiler/>
              }
            ]
          },
          //Bitacora
          {
            path: "Bitacora",
            element: <PageBitacora/>
          }
        ]
      },
      {
        path: "/cliente",
        element: <Navigator />,
        children: [
          {
            path: "/cliente",
            element: <Navigate to="/cliente/books"/>,
          },
          {
            path: "books",
            element: <PageBooks/>
          },
          {
            path: "reservas",
            element: <PageReserva/>
          },
          {
            path: "reserva/create",
            element: <CreateReserva/>
          }
        ]
      }
    ]
  }
]


export default rutas;