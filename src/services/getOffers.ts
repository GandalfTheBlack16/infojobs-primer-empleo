interface OfferRequest {
  category: string
  isTeleworking: boolean
  location?: string
}

const TOKEN = import.meta.env.VITE_INFOJOBS_TOKEN || ''
const baseEndpoint = '/proxy/api/9/offer?experienceMin=no-requerida'

export async function getOffers ({
  category,
  isTeleworking,
  location
}: OfferRequest) {
  try {
    let query = `&category=${category}&teleworking=${isTeleworking ? 'teletrabajo-posible' : 'trabajo-solo-presencial'}${location ? '&province=' : ''}`
    if (location) {
      query += location
    }
    const response = await fetch(`${baseEndpoint}${query}`, {
      headers: {
        Authorization: `Basic ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      const result = await response.json()
      return result
    }
  } catch (err) {
    console.error(err)
  }
}
