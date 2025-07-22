/* eslint-disable no-unused-vars */
import axios from 'axios'

const api = axios.create({
  baseURL: '/', //import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('auth')
  if (config.headers['Authorization'] === 'Bearer null') {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  config.headers['token'] = token
  return config
})

// use interceptor to clear token when it expires
api.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth')
      return error
    } else {
      throw error
    }
  },
)
export const generateFilters = (filters: object) => {
  const sortedFilters = JSON.parse(JSON.stringify(filters))
  const keys = Object.keys(sortedFilters)
  const values = Object.values(sortedFilters)
  let filter = ''
  keys.map((k, index) => {
    filter += `${k}=${values[index]}&`
  })
  return filter
}

export { api }
