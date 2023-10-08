import axiosInstance from '@/lib/AxiosInstance'
import { IRegisterFormValues, ILoginFormValues } from '@/interfaces/auth'

const register = (body: IRegisterFormValues) =>
  axiosInstance.post('/api/v1/auth/register', body)

const login = (body: ILoginFormValues) =>
  axiosInstance.post('/api/v1/auth/login', body)

const authApi = {
  login,
  register,
}

export default authApi
