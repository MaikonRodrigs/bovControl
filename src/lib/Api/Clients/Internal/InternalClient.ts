import axios, { AxiosInstance } from 'axios'

export default class InternalClient {
  protected client: AxiosInstance

  constructor() {
    const apiBaseUrl = process.env.API_BASE_URL
    this.client = axios.create({
      baseURL: apiBaseUrl,
    })
  }

  protected async get(endpoint: string) {
    return await this.client.get(endpoint)
  }

  protected async post(endpoint: string, data: unknown) {
    return await this.client.post(endpoint, data)
  }

  protected async put(endpoint: string, data: unknown) {
    return await this.client.put(endpoint, data)
  }

  protected async delete(endpoint: string) {
    return await this.client.delete(endpoint)
  }
}
