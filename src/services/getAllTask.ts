import { toast } from "react-toastify";
import { api } from "./api";

export const getAllTask=async()=>{
    try{
const res= await api.get('/v1/task')
return res.data
    }catch(e:any){
return toast.error('Failed to login')
    }
}