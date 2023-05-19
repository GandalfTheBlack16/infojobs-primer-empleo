import { useState } from 'react'
import { type Category } from '../types'
import { type SingleValue } from 'react-select'

export function useFilterbox () {
  const [category, setCategory] = useState<string>('')

  const formInvalid = !category

  const handleCategoryChange = (newCategory: SingleValue<Category>) => {
    setCategory(newCategory?.value ?? '')
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
