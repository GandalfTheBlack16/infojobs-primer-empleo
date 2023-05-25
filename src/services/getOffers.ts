import { type OfferRequest, type Offer } from '../types'

interface OfferResponse {
  id: any
  title: any
  link: any
  salaryDescription: any
  published: string
  teleworking: { value: string }
  author: {
    name: string
    uri: string
    logoUrl: string
  }
}

const TOKEN = import.meta.env.VITE_INFOJOBS_TOKEN || ''
const baseEndpoint = '/proxy/api/9/offer?experienceMin=no-requerida'

export async function getOffers ({
  category,
  isTeleworking,
  location
}: OfferRequest): Promise<Offer[] | undefined> {
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
      return result.offers.map((item: OfferResponse) => {
        return {
          id: item.id,
          title: item.title,
          link: item.link,
          salary: item.salaryDescription,
          publishDate: new Date(item.published),
          teleworking: item.teleworking.value,
          author: {
            name: item.author.name,
            uri: item.author.uri,
            logoUrl: item.author.logoUrl
          }
        }
      }).filter((item: OfferResponse) => item.title.length < 70 && item.author.logoUrl)
    }
  } catch (err) {
    console.error(err)
  }
}
