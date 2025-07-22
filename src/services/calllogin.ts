import { toast } from "react-toastify";
import { api } from "./api";

type loginDto={
    email:string;
    password:string
}
export const calllogin=async(data:loginDto)=>{
    try{
const res= await api.post('/api/admin/login',data)
return res.data
    }catch(e:any){
return toast.error('Failed to login')
    }
}