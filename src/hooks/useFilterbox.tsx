import { useState } from 'react'
import { type Category } from '../types'
import { type SingleValue } from 'react-select'

export function useFilterbox () {
  const [category, setCategory] = useState<string>('')
  const [isTelework, setIsTelework] = useState<boolean>(false)

  const formInvalid = !category

  const handleCategoryChange = (newCategory: SingleValue<Category>) => {
    setCategory(newCategory?.value ?? '')
  }

  const handleTeleworkingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    setIsTelework(value)
  }

  const handleSubmit = () => {
    console.log('Submiting with search params:', category)
  }

  return {
    formInvalid,
    isTelework,
    handleCategoryChange,
    handleTeleworkingChange,
    handleSubmit
  }
}
