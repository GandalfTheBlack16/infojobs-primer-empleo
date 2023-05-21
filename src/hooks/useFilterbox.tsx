import { useState } from 'react'
import { type Category } from '../types'
import { type SingleValue } from 'react-select'
import { getOffers } from '../services/getOffers'

export function useFilterbox () {
  // TODO: Replace with reducer
  const [category, setCategory] = useState<string>('')
  const [isTelework, setIsTelework] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')

  const formInvalid = !category || !location

  const handleCategoryChange = (newCategory: SingleValue<Category>) => {
    setCategory(newCategory?.value ?? '')
  }

  const handleTeleworkingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    setIsTelework(value)
  }

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setLocation(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getOffers({ category, isTeleworking: isTelework, location })
      .then(result => { console.log(result) })
      .catch(err => { console.log(err) })
  }

  return {
    formInvalid,
    isTelework,
    location,
    handleCategoryChange,
    handleTeleworkingChange,
    handleLocation,
    handleSubmit
  }
}
