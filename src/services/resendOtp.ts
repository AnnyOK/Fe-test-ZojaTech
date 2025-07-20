import { toast } from "react-toastify";
import { api } from "./api";


export const resendOtp=async(email:string)=>{
    try{
const res= await api.post('/admin/resend-otp',{email})
return res.data
    }catch(e:any){
return toast.error('Failed to Resend')
    }
}