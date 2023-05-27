const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'

interface RootObject {
  plus_code: any
  results: Result[]
  status: string
}

interface Result {
  address_components: any[]
  formatted_address: string
  geometry: any
  place_id: string
  types: string[]
}

export async function getReverseGeocoding ({ latitude, longitude }: { latitude: number, longitude: number }) {
  try {
    const response = await fetch(`${BASE_URL}?latlng=${latitude},${longitude}&key=${API_KEY}&result_type=locality&language=es`)
    const data: RootObject = await response.json()
    const { formatted_address } = data.results[0]
    return formatted_address.split(', ')
  } catch (error) {
    throw Error('Error obteniendo localizacion')
  }
}
