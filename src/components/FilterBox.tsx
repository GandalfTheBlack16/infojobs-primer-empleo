import './FilterBox.css'
import { useFilterbox } from '../hooks/useFilterbox'
import { useCategories } from '../hooks/useCategories'
import Select from 'react-select'

export function FilterBox () {
  const { categories, loading } = useCategories()

  const { formInvalid, handleCategoryChange, handleSubmit } = useFilterbox()

  return (
        <div className="filter__box">
            <div className='filter__item'>
                <label htmlFor='category_input'>Categoria</label>
                <Select
                  id='category_input'
                  placeholder='Seleccione categoria'
                  className='category__select'
                  noOptionsMessage={() => 'Sin coincidencias'}
                  options={categories}
                  isLoading={loading}
                  onChange={handleCategoryChange}
                />
            </div>
            <button className='accent' onClick={handleSubmit} disabled={formInvalid}>Buscar</button>
        </div>
  )
}
