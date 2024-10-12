import React from 'react'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface useFetchProps {
  method?: Method
  body?: unknown
  headers?: HeadersInit
}

interface ApiResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export function useFetch<T>(
  url: string,
  options?: useFetchProps,
): ApiResponse<T> {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, {
          method: options?.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          body: options?.body ? JSON.stringify(options.body) : null,
        })

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }

        const result = (await response.json()) as T
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, options])

  return { data, error, loading }
}
