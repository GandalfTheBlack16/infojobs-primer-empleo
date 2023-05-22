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
