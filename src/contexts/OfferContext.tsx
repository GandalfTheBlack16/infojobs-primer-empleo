import React, { createContext } from 'react'
import { useOffer } from '../hooks/useOffer'
import { type OfferContextHandler } from '../types'

export const OfferContext = createContext<OfferContextHandler>({
  offers: [],
  loading: false,
  error: '',
  fetchData: async () => {}
})

export function OfferContextProvider ({ children }: { children: React.ReactNode }) {
  const { offers, loading, error, fetchData } = useOffer()
  return (
        <OfferContext.Provider
            value={{
              offers,
              loading,
              error,
              fetchData
            }}
        >
            { children }
        </OfferContext.Provider>
  )
}
