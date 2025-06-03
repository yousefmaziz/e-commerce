import axios from 'axios'
import { useFormik } from 'formik'
import  { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'

export default function Verifycode() {
    let[message,setMessage]=useState(null)

    const Navigate =useNavigate()


    async function sendDataToLogin(values){
        const loadingId=toast.loading("waiting....")
        try{
          const options={
            url:'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
            method:"POST",
            data:values,
          }
      
          let  {data} = await axios.request(options)
                setMessage(data.status)
                setTimeout(()=>{
                    if(data.status==="Success")
                      {
                      Navigate('/Resetpassword')
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
    resetCode:string().required("code is required")
    
  })
    let formik=useFormik({

        initialValues:
    {
    resetCode:"",
    },
    validationSchema:validation, 
    onSubmit:sendDataToLogin
    
      })

  return (
    <>
    <form action="" className='mx-3'
    onSubmit={formik.handleSubmit}>
    <div >
    <h1 className="text-lg text-slate-900 font-semibold mb-12">
    <i className="fa-solid fa-user mr-2 text-md"></i>
      VerifyCode</h1>

    <div className="number">
    <input type="text" className="form-control w-full" placeholder="Type your code" 
    value={formik.values.resetCode}
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur}
    name="resetCode"/>
{formik.errors.resetCode && formik.touched.resetCode &&
      <p className="text-red-500 mt-1 text-sm">*{formik.errors.resetCode}</p>}
    </div>
    
    
    
<button type="submit" className="btn mt-4 bg-primcolor-400 hover:bg-primcolor-500 w-full text-slate-100 text-md text-semibold " >submit</button>
{message ? <p className='text-primcolor-500 mt-8'>Success</p>:<p className='text-primcolor-500 mt-8'>Request failed with status code 400</p>}
    </div>
    </form>
    </>
  )
}
