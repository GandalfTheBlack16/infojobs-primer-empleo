export interface Category {
  value: string
  label: string
}

export interface Offer {
  id: string
  title: string
  link: string
  salary: string
  teleworking: string
  publishDate: Date
  author: Author
}

export interface Author {
  name: string
  uri: string
  logoUrl?: string
}

export interface OfferRequest {
  category: string
  isTeleworking: boolean
  location: string
}

export interface OfferContextHandler {
  offers: Offer[] | undefined
  loading: boolean
  error: string
  fetchData: (req: OfferRequest) => Promise<void>
}
