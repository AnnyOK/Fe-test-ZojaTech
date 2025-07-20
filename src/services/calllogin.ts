import { toast } from "react-toastify";
import axios from "axios";

type loginDto={
    email:string;
    password:string
}
export const calllogin=async(data:loginDto)=>{
    try{
        // const res= await api.post('/admin/login',data)
const res= await axios.post('/api/admin/login',data)
console.log(res)
return res.data
    }catch(e:any){
return toast.error('Failed to login')
    }
}