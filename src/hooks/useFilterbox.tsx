import { useContext, useEffect, useState } from 'react'
import { type Category } from '../types'
import { type SingleValue } from 'react-select'
import { OfferContext } from '../contexts/OfferContext'
import { useGeolocation } from './useGeolocation'

export function useFilterbox () {
  const [category, setCategory] = useState<string>('')
  const [isTelework, setIsTelework] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')

  const { city, country, disabled, error } = useGeolocation()
  const { fetchData } = useContext(OfferContext)

  useEffect(() => {
    setLocation(city)
  }, [city])

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
    geolocationDetails: {
      city,
      country,
      disabled,
      error
    },
    handleCategoryChange,
    handleTeleworkingChange,
    handleLocation,
    handleSubmit
  }
}
