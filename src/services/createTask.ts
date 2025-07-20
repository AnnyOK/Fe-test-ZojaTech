import { toast } from "react-toastify";
import { api } from "./api";

type NewTaskDto={
    name:string;
    is_allowed:boolean;
    phone:string
}
export const createNewTask=async(data:NewTaskDto)=>{
    try{
const res= await api.post('/v1/task',data)
return res.data
    }catch(e:any){
return toast.error('Failed to create Task')
    }
}