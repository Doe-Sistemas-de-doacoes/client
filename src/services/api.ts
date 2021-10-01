/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { parseCookies } from 'nookies'

export const COOKIE_TOKEN = 'doe.token'

export const api = getAPIClient()

function getAPIClient(ctx?: any) {
  const { COOKIE_TOKEN: token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  })

  api.interceptors.request.use((config) => {
    console.log(config)

    return config
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
