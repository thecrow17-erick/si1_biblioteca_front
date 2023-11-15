import {
  SubmitHandler,
  useForm
} from 'react-hook-form'
import {
  useNavigate
} from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'

import { AlertError } from '../../components/alerts';
import { Loading } from '../../components/Loading';
import { useMutationLogin } from '../../hooks/api/auth';



interface Ibody {
  email: string,
  password: string
}

export const AuthPage = ()=> {
  const navigate = useNavigate();
  
  const {loginMutation} = useMutationLogin();
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<Ibody>();

  const onSubmit:SubmitHandler<Ibody> = ({email,password})=>{
    console.log(email,password);
    loginMutation.mutate({email,password},{
      onSettled: (data,error,variables,context)=>{
        console.log(data);
        if(data?.user.rol.descripcion === "Administrador"){
          localStorage.setItem('auth-token',data.token)
          toast.success("Ok login")
          setTimeout(() => {
            navigate("/admin")
          }, 3000);
        }else {
          localStorage.setItem('auth-token',data!.token)
          toast.success("Ok login")
          setTimeout(() => {
            navigate("/cliente")
          }, 3000);
        }
        console.log(error);
        console.log(variables);
        console.log(context);
      }
    })
  }

  
  return loginMutation.isLoading?(
    <Loading/>
  ):(
    <>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
            </div>
            <div className="m-7">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                  <input type="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  {...register("email",{
                    required: {
                      value: true,
                      message: "Ingrese un email valido"
                    }
                  })}
                  />
                  {
                    errors.email && <AlertError msg={errors.email.message}/>
                  }
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label  className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                  </div>
                <input type="password"placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                {...register("password",{
                  required:{
                    value: true,
                    message: "ingrese un password"
                  },
                  minLength:{
                    value: 8,
                    message:"Ingrese un password minimo de 8 caracteres."
                  }
                })}
                />
                {
                    errors.password && <AlertError msg={errors.password.message}/>
                }
                </div>
                <div className="mb-6">
                  <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                </div>
                <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
