import { toast } from "react-toastify";
import { api } from "./api";


export const resendOtp = async (email: string, token: string) => {
    try {
        const res = await api.post(
            '/api/admin/resend-otp',
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return res.data
    } catch (e: any) {
        return toast.error('Failed to Resend')
    }
}