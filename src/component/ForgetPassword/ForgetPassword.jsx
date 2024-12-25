import axios from 'axios'
import { useFormik } from 'formik'
import  { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { object, string } from 'yup'

export default function ForgetPassword() {

    let[message,setMessage]=useState(null)

    const Navigate =useNavigate()
    async function sendDataToLogin(values){
        const loadingId=toast.loading("waiting....")
        try{
          const options={
            url:'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
            method:"POST",
            data:values,
          }
      
          let  {data} = await axios.request(options)
          console.log(data);
          setMessage(data.message)
          setTimeout(()=>{
              if(data.statusMsg==="success")
                {
                Navigate('/verifycode')
            }
                
        },1000)
          }
        
        catch(error){
        console.log(error);
        
        }finally{
          
          toast.dismiss(loadingId)
        }
      
      }
    






let validation =
  object({
    email:string().required("email is required").email("email is invaild"),
    
  })
    let formik=useFormik({

        initialValues:
    {
    
    
      "email":"",
    },
    validationSchema:validation, 
    onSubmit:sendDataToLogin
    
      })



  return (
    <>
    
    <form action=""
    onSubmit={formik.handleSubmit}>
    <div >
    <h1 className="text-lg text-slate-900 font-semibold mb-12">
    <i className="fa-solid fa-user mr-2 text-md"></i>
      Forget Password</h1>

    <div className="email">
    <input type="email" className="form-control w-full" placeholder="Type your email" 
    value={formik.values.email}
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur}
    name="email"/>
      {formik.errors.email && formik.touched.email &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>}
    </div>
    
    
    
<button type="submit" className="btn mt-4 bg-primcolor-400 hover:bg-primcolor-500 w-full text-slate-100 text-md text-semibold " >submit</button>
      {message ? <p className='text-primcolor-500 mt-8'> *{message}</p>:''}
    </div>
    </form>
    </>
  )
}
