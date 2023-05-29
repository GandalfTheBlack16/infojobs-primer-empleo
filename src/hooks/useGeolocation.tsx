import { useEffect, useState } from 'react'
import { getReverseGeocoding } from '../services/getAddressLockup'

export function useGeolocation () {
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser')
      setDisabled(true)
    } else {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        try {
          const locationCompounds = await getReverseGeocoding({ latitude: coords.latitude, longitude: coords.longitude })
          setCity(locationCompounds.at(0) ?? '')
          setCountry(locationCompounds.at(-1) ?? '')
          setLoaded(true)
        } catch (error) {
          setError(error as string)
        }
      }, () => {
        setError('Error al obtener coordenadas')
      })
    }
  }, [])

  return {
    city,
    country,
    disabled,
    error,
    loaded
  }
}
