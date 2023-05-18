import './FilterBox.css'
import { Typeahead } from './ui/Typeahead'
import categoriesResponse from '../mocks/categoryResponse.json'
import { useFilterbox } from '../hooks/useFilterbox'

export function FilterBox () {
  // Replace this with useCategories hook
  const options = categoriesResponse.map(item => {
    return {
      key: item.key,
      label: item.value
    }
  })

  const { formInvalid, handleCategoryChange, handleSubmit } = useFilterbox()

  return (
        <div className="filter__box">
            <div className='filter__item'>
                <label>Categoria</label>
                <Typeahead
                  id='category_input'
                  options={options}
                  placeholder='Seleccione categoria'
                  onTypeaheadChange={handleCategoryChange}
                />
            </div>
            <button className='accent' onClick={handleSubmit} disabled={formInvalid}>Buscar</button>
        </div>
  )
}
