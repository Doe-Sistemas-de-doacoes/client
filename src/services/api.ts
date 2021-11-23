/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.request.use(async (config) => {
  const session = await getSession()

  if (config?.headers && session?.token)
    config.headers.Authorization = `Bearer ${session?.token}`

  return config
})

export function apiSSR(context: GetServerSidePropsContext) {
  const apiSSR = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  })

  apiSSR.interceptors.request.use(async (config) => {
    const session = await getSession(context)

    if (config?.headers)
      config.headers.Authorization = `Bearer ${session?.token}`

    return config
  })

  return apiSSR
}

export default api
