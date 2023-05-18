import { useState } from 'react'
import { type Category } from '../types'

export function useFilterbox () {
  const [category, setCategory] = useState<string>('')

  const formInvalid = !category

  const handleCategoryChange = (selected: Category) => {
    setCategory(selected.key)
  }

  const handleSubmit = () => {
    console.log('Submiting with search params:', category)
  }

  return {
    formInvalid,
    handleCategoryChange,
    handleSubmit
  }
}
