import { Navigate } from 'react-router-dom';
import {
  AuthPage
} from '../page/auth'
import { Header } from '../components/nav';
import { CreateUser, UserPage } from '../page/admin/user';
import { UpdateUser } from '../page/admin/user/UpdateUser';
import { PageRol } from '../page/admin/rol';
import { PageLibros,CreateBook } from '../page/admin/libro';
import { CreateNota, NotaPage } from '../page/admin/notaIngreso';

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
      },{
        path:"admin",
        element: <Header/>,
        children: [
          {
            path:"/admin",
            element: <Navigate to="/admin/home" />,
          },
          {
            path: "home",
            element: <>ugu</>
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
          }
        ]
      }
    ]
  }
]


export default rutas;