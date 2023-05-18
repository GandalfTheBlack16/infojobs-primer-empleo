import './FilterBox.css'
import { Typeahead } from './ui/Typeahead'
import categoriesResponse from '../mocks/categoryResponse.json'

export function FilterBox () {
  const options = categoriesResponse.map(item => {
    return {
      key: item.key,
      label: item.value
    }
  })

  return (
        <div className="filter__box">
            <div className='filter__item'>
                <label>Categoria</label>
                <Typeahead
                  id='category_input'
                  options={options}
                  placeholder='Seleccione categoria'
                />
            </div>
        </div>
  )
}
