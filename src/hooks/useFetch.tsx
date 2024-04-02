import { useState, useEffect, useRef } from 'react'

interface useFetchReturn {
  data: Product[] | Product | undefined
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

export const useFetch = (url: string): useFetchReturn => {
  const [data, setData] = useState<Product[] | Product | undefined>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const effectRan = useRef(false)

  const fetchData = async (): Promise<void> => {
    setIsLoading(true)

    try {
      const res = await fetch(url)
      const data = await res.json()

      if (res.status === 200) {
        setIsSuccess(true)
        setData(data as Product[] | Product)
      } else {
        setIsSuccess(false)
      }
    } catch (e) {
      setIsSuccess(false)
      setData(undefined)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    void (!effectRan.current && fetchData())

    return () => {
      effectRan.current = true
    }
  }, [])

  return { data, isLoading, isError: !isSuccess, isSuccess }
}
