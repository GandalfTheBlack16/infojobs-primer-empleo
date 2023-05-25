import { useContext, useState } from 'react'
import { type Category } from '../types'
import { type SingleValue } from 'react-select'
import { OfferContext } from '../contexts/OfferContext'

export function useFilterbox () {
  // TODO: Replace with reducer
  const [category, setCategory] = useState<string>('')
  const [isTelework, setIsTelework] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')

  const { fetchData } = useContext(OfferContext)

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetchData({ category, isTeleworking: isTelework, location })
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
