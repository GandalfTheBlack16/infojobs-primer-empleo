import { type Category } from '../types'

interface CategoryResponse {
  id: number
  key: string
  order: number
  value: string
}

const TOKEN = import.meta.env.VITE_INFOJOBS_TOKEN || ''

export async function getCategories () {
  try {
    const response = await fetch('/proxy/api/1/dictionary/category', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${TOKEN}`
      }
    })
    const json: CategoryResponse[] = await response.json()
    const data: Category[] = json.map(item => {
      return {
        value: item.key,
        label: item.value
      }
    })
    return data
  } catch (error) {
    console.error('Error fetching categories', error)
  }
}
