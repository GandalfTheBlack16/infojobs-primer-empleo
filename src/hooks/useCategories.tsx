import { useEffect, useState } from 'react'
import { getCategories } from '../services/getCategories'
import { type Category } from '../types'

export function useCategories () {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    getCategories()
      .then(data => {
        setLoading(false)
        if (!data) {
          throw new Error('There is not categories to show')
        }
        setCategories(data)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  return {
    categories,
    loading,
    error
  }
}
