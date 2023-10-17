import { Navigate } from 'react-router-dom';
import {
  AuthPage
} from '../page/auth'
import { Header } from '../components/nav';
import { CreateUser, UserPage } from '../page/admin/user';

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
              }
            ]
          }
        ]
      }
    ]
  }
]


export default rutas;