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
        const filtered = data.filter(item => item.value !== '-')
        setCategories(filtered)
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
