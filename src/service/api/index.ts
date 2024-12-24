// 服务端接口地址
const BASE_URL = '/api'

async function fetchApi<T>(url: string, options: RequestInit): Promise<T> {
  const token = sessionStorage.getItem('token')
  if (token) {
    // 如果有token，就在请求头中携带token
    options = await setAuthToken(options, token)
  }

  try {
    // 发起请求
    const response = await fetch(BASE_URL + url, options)

    // 如果请求失败
    if (!response.ok) {
      throw new Error(`Fetch error! status: ${response.status}`)
    }
    return response.json() as Promise<T>
  } catch (error) {
    // 请求有错误
    console.log(error)
    throw error
  }
}

type Request = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: object
  headers?: HeadersInit
}

// 封装请求函数
export async function request<T>({ url, method, data, headers }: Request) {
  const body = JSON.stringify(data)
  return fetchApi<T>(url, { method, body, headers })
}

// 请求拦截器 返回携带 token 的请求头的Promise对象
async function setAuthToken(
  requestInit: RequestInit,
  token: string
): Promise<RequestInit> {
  requestInit.headers = {
    ...requestInit.headers,
    Authorization: `Bearer ${token}`
  }
  return requestInit
}
