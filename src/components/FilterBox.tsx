import './FilterBox.css'
import { Typeahead } from './ui/Typeahead'
import { useFilterbox } from '../hooks/useFilterbox'
import { useCategories } from '../hooks/useCategories'

export function FilterBox () {
  const { categories } = useCategories()

  const { formInvalid, handleCategoryChange, handleSubmit } = useFilterbox()

  return (
        <div className="filter__box">
            <div className='filter__item'>
                <label>Categoria</label>
                <Typeahead
                  id='category_input'
                  options={categories}
                  placeholder='Seleccione categoria'
                  onTypeaheadChange={handleCategoryChange}
                />
            </div>
            <button className='accent' onClick={handleSubmit} disabled={formInvalid}>Buscar</button>
        </div>
  )
}
