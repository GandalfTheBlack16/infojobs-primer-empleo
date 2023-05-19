import { type Category } from '../types'

const INFOJOBS_TOKEN = 'ZjBlODViOWUzNjE3NGNiNTg1OTcxN2I4ZDE4OWMxYjk6REVSc2MwNHVSTmpCK0NmYjFSOU1CVURLK082YXBacHJqeEF1UTZVRkxDQmlNOUtMZGw='

interface CategoryResponse {
  id: number
  key: string
  order: number
  value: string
}

export async function getCategories () {
  try {
    const response = await fetch('/proxy/api/1/dictionary/category', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${INFOJOBS_TOKEN}`
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
