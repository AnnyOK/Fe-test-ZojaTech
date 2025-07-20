import { toast } from "react-toastify";
import { api } from "./api";


export const verifyOtp=async(otp:string)=>{
    try{
const res= await api.post('/admin/verify-otp',{otp})
return res.data
    }catch(e:any){
return toast.error('Failed to login')
    }
}