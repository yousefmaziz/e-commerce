import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { object, ref, string } from "yup"


export default function Signup() {
  const passregex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const phoneregex=/^(02)?01[0125][0-9]{8}$/

const navigate= useNavigate()
const [account,setAccount]=useState()



  let validation =
  object({
    name:string().required("name is required").min(3,"must be at least 3 char").max(25,"must be less than 25 char")

    ,email:string().required("email is required").email("email is invaild"),

    password:string().required("pass is required")

    .matches(passregex,
    "pass is at least one upper case English letter, one lower case English letter, one number and one special character")
    ,rePassword:string().required("is required").oneOf([ref("password")],"must be the same ")

    ,phone:string().required().matches(phoneregex,"sorry egyptian numb only broo")
  
  })


  async function sendData(values){
    const loadingId=toast.loading("waiting....")
    try{
      const options={
        url:'https://ecommerce.routemisr.com/api/v1/auth/signup',
        method:"POST",
        data:values,
      }
  
      let { data }= await axios.request(options)
      if(data.message==="success"){
        toast.success("Done ya brooo")
        setTimeout(()=>{
          navigate("/Login")

        },2000)
      }
    }catch(error){
      setAccount(error.response.data.message)
    }finally{
      
      toast.dismiss(loadingId)
    }
  
  }

  let formik=useFormik({

    initialValues:
{

  "name": "",
  "email":"",
  "password":"",
  "rePassword":"",
  "phone":""
},
validationSchema:validation, 
onSubmit:sendData

  })
  return (
    <>
    <h1 className="text-lg text-slate-900 font-semibold mb-12">
    <i className="fa-solid fa-user mr-2 text-md"></i>
      Resigter now</h1>
    <form action="" className="space-y-2" onSubmit={formik.handleSubmit}>



    <div className="name">
      <input type="text" className="form-control w-full" placeholder="Type your name" value={formik.values.name}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="name"/>
      {formik.errors.name && formik.touched.name &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.name}</p>
      } 
    </div>



    <div className="email">
      <input type="email" className="form-control w-full" placeholder="Type your email" value={formik.values.email}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="email"/>
      {formik.errors.email && formik.touched.email &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>
      }

    {account && (<p className="text-red-500 mt-1 text-sm">*{account}</p>)}


    </div>



    <div className="password">
      <input type="password" className="form-control w-full" placeholder="Type your password" value={formik.values.password}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="password"/>
      {formik.errors.password && formik.touched.password &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.password}</p>
      }
    </div>


    
    <div className="rePassword">
      <input type="password" className="form-control w-full" placeholder="Type your rePassword" value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur} 
      name="rePassword"/>
      {formik.errors.rePassword && formik.touched.rePassword &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.rePassword}</p>
      }
    </div>


    <div className="phone">
      <input type="text" className="form-control w-full" placeholder="Type your phone" value={formik.values.phone}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="phone"/>
      {formik.errors.phone && formik.touched.phone &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.phone}</p>
      }
    </div>


<button type="submit" className="btn bg-primcolor-400 hover:bg-primcolor-500 w-full text-slate-100 text-md text-semibold" >Sign up</button>

    </form>
    
    </>
  )
}
