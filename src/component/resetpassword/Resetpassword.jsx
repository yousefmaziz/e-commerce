import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { object, string } from 'yup'

export default function Resetpassword() {

let[message,setMessage]=useState(null)

    async function sendDataToLogin(values){
        const loadingId=toast.loading("waiting....")
        try{
          const options={
            url:'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
            method:"PUT",
            data:values,
          }
      
          let  {data} = await axios.request(options)
          console.log(data);

          setTimeout(()=>{

                Navigate('/login')
                
        },1000)
          }
        
        catch(error){
        console.log(error);
        
        }finally{
          
          toast.dismiss(loadingId)
        }
      
      }


    const passregex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/


    let validation =
    object({
        email:string().required("email is required").email("email is invaild"),
        newPassword:string().required("pass is required")
        .matches(passregex,
        "pass is at least one upper case English letter, one lower case English letter, one number and one special character")
      })
        let formik=useFormik({
    
            initialValues:
        {
        email:"",
        newPassword:""
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
          Reset Password</h1>
    
        <div className="email">
        <input type="email" className="form-control w-full" placeholder="Type your email" 
        value={formik.values.email}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        name="email"/>
          {formik.errors.email && formik.touched.email &&
          <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>}
        </div>
        


        <div className="newPassword">
      <input type="password" className="form-control w-full mt-6" placeholder="Type your new password"
       value={formik.values.newPassword}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      name="newPassword"/>
      {formik.errors.newPassword && formik.touched.newPassword &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.newPassword}</p>
    }
        </div>
        
        
    <button type="submit" className="btn mt-4 bg-primcolor-400 hover:bg-primcolor-500 w-full text-slate-100 text-md text-semibold " >submit</button>
    {message ? <p className='text-primcolor-500 mt-8'> *{message}</p>:''}
        </div>
        </form>
        </>
      )
}
