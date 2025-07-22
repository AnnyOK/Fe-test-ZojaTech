import { api } from "./api";

type RegisterDto = {

    first_name: string;
    last_name: string;
    email: string;
    password: string
}
export const register = async (data: RegisterDto) => {
    try {
        const res = await api.post('/api/admin/register', data)
        return res.data
    } catch (e: any) {
        throw  new Error(String(e?.response?.data?.message||"Registration failed"))
    }
}