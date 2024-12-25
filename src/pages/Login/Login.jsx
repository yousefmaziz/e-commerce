
import axios from "axios"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import {  Link, useNavigate } from "react-router-dom"

import { object, string } from "yup"
import { UserContext } from "../../Context/User.context"


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

        toast.success("tmama y brooo")
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
    <h1 className="text-lg text-slate-900 font-semibold mb-12">
    <i className="fa-solid fa-user mr-2 text-md"></i>
      Login now</h1>
    <form action="" className="space-y-5" onSubmit={formik.handleSubmit}>







    <div className="email">
      <input type="email" className="form-control w-full" placeholder="Type your email" value={formik.values.email}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="email"/>
      {formik.errors.email && formik.touched.email &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>
      }

{incorrectData&&<p className="text-red-500 mt-1 text-sm">*{incorrectData}</p>}  

    </div>



    <div className="password">
      <input type="password" className="form-control w-full" placeholder="Type your password" value={formik.values.password}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="password"/>
      {formik.errors.password && formik.touched.password &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.password}</p>
    }
    {incorrectData&&<p className="text-red-500 mt-1 text-sm">*{incorrectData}</p>}  
    </div>

<button type="submit" className="btn bg-primcolor-400 hover:bg-primcolor-500 w-full text-slate-100 text-md text-semibold " >login</button>

    


    </form>
<Link to={`/Forgetpassword`} className="text-blue-600 mt-16 ">Forget Password?</Link>
    
    </>
  )
}


    
    
    
    
    
  
