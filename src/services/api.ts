/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { getSession } from 'next-auth/client'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.request.use(async (config) => {
  const session = await getSession()

  config.headers.Authorization = `Bearer ${session?.acessToken}`

  return config
})

export default api
