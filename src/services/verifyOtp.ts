import { api } from "./api";


export const verifyOtp = async (otp: string, token: string) => {

    try {
        const res = await api.post('/api/admin/verify-otp', { otp }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (e: any) {
        throw new Error(String(e?.response?.data?.message || "Verificattion failed"))
    }
}