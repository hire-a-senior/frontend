import axiosInstance from '@/lib/AxiosInstance'

const list = () => axiosInstance.get('/api/v1/technology/list')

const technologyApi = {
  list,
}

export default technologyApi
