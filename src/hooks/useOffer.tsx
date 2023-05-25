import { useState } from 'react'
import { type OfferRequest, type Offer } from '../types'
import { getOffers } from '../services/getOffers'

export function useOffer () {
  const [offers, setOffers] = useState<Offer[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const fetchData = async ({
    category,
    isTeleworking,
    location
  }: OfferRequest) => {
    try {
      setLoading(true)
      const data = await getOffers({ category, isTeleworking, location })
      if (!data) {
        setError('No hay ninguna oferta que se ajuste a los criterios establecidos')
        return
      }
      setOffers(data)
    } catch (error) {
      setError('Lo sentimos, se ha producido un error obteniendo posibles ofertas')
    } finally {
      setLoading(false)
    }
  }

  return {
    offers,
    loading,
    error,
    fetchData
  }
}
