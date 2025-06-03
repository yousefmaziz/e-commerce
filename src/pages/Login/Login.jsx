
import axios from "axios"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import {  Link, useNavigate } from "react-router-dom"

import { object, string } from "yup"
import { UserContext } from "../../Context/User.context"
import o from "../../img/signin-DlR7P608.png"

export default function Login() {


  let {setToken}=useContext(UserContext)
  const passregex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const navigate= useNavigate()
const [incorrectData,setIncorrectData]=useState(null)



  let validation =
  object({
    email:string().required("email is required").email("email is invaild"),
    password:string().required("pass is required")
    .matches(passregex,
    "pass is at least one upper case English letter, one lower case English letter, one number and one special character")
    
  })


  async function sendDataToLogin(values){
    const loadingId=toast.loading("waiting....")
    try{
      const options={
        url:'https://ecommerce.routemisr.com/api/v1/auth/signin',
        method:"POST",
        data:values,
      }
  
      let { data }= await axios.request(options)
      console.log(data);
      
      if(data.message==="success")
      {
        localStorage.setItem("token",data.token)
        setToken(data.token)

        toast.success("Welcome ")
        setTimeout(()=>{
          navigate("/")
        },2000)
      }
      }
    
    catch(error){
      setIncorrectData(error.response.data.message)
    }finally{
      
      toast.dismiss(loadingId)
    }
  
  }

  let formik=useFormik({
    initialValues:
{
  "email":"",
  "password":"",
},
validationSchema:validation, 
onSubmit:sendDataToLogin

  })
  return (
    <>





<section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4">




  <div className="feild mt-8 md:mt-12 mx-auto w-full max-w-sm">
    <h1 className="text-lg text-slate-900 font-semibold mb-6">
      <i className="fa-solid fa-user mr-2 text-md"></i>
      Login now
    </h1>
    <form className="space-y-5" onSubmit={formik.handleSubmit}>

      <div className="email">
        <input
          type="email"
          className="form-control w-full md:w-96"
          placeholder="Type your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>
        )}
        {incorrectData && (
          <p className="text-red-500 mt-1 text-sm">*{incorrectData}</p>
        )}
      </div>


      <div className="password">
        <input
          type="password"
          className="form-control w-full md:w-96"
          placeholder="Type your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500 mt-1 text-sm">*{formik.errors.password}</p>
        )}
        {incorrectData && (
          <p className="text-red-500 mt-1 text-sm">*{incorrectData}</p>
        )}
      </div>


      <button
        type="submit"
        className="btn bg-primcolor-400 hover:bg-primcolor-500 w-full md:w-96 text-slate-100 text-lg font-semibold"
      >
        Login
      </button>
    </form>


    <div className="forgetPass mt-4">
      <div className="question flex gap-1">
        <p className="text-md text-slate-900 font-semibold mb-1">
          Don’t have an account?
        </p>
        <Link to={`/signup`} className="text-primcolor-600 ml-1">
          Sign Up
        </Link>
      </div>
      <Link to={`/Forgetpassword`} className="text-primcolor-600">
        Forget Password?
      </Link>
    </div>
  </div>

    <div className="photo flex justify-center">
    <img src={o} alt="Login image" className="w-full max-w-xs md:max-w-sm" />
  </div>
</section>

    
    </>
  )
}


    
    
    
    
    
  
