import { toast } from "react-toastify";
import { api } from "./api";
import axios from "axios";

type RegisterDto={

    first_name: string;
    last_name: string;
    email:string;
    password:string
}
export const register=async(data:RegisterDto)=>{
    try{
const res= await axios.post('/api/admin/register',data)
console.log(res)
return res.data
    }catch(e:any){
return toast.error('Failed to Register')
    }
}