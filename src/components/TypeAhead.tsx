import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'bootstrap/dist/css/bootstrap.css'
import categoriesResponse from '../mocks/categoryResponse.json'

export function TypeAhead () {
  // const [categories, setCategories] = useState<Category[]>([])

  // useEffect(() => {
  //   getCategories()
  //     .then(data => {
  //       if (data != null) {
  //         setCategories(data)
  //       }
  //     }).catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  const categories = categoriesResponse.map(item => {
    return {
      id: item.key,
      label: item.value
    }
  })

  return (
      <Typeahead
        size='sm'
        options={categories}
      />
  )
}
