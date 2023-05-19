import './FilterBox.css'
import { useFilterbox } from '../hooks/useFilterbox'
import { useCategories } from '../hooks/useCategories'
import Select from 'react-select'

export function FilterBox () {
  const { categories, loading } = useCategories()

  const { formInvalid, isTelework, handleCategoryChange, handleTeleworkingChange, handleSubmit } = useFilterbox()

  return (
        <div className="filter__box">
            <div className='filter__item'>
                <label htmlFor='category_input'>Categoria</label>
                <Select
                  id='category_input'
                  placeholder='Seleccione categoria'
                  className='category-select_container'
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                      ...theme.colors,
                      primary: '#167db7'
                    }
                  })}
                  noOptionsMessage={() => 'Sin coincidencias'}
                  options={categories}
                  isLoading={loading}
                  onChange={handleCategoryChange}
                />
            </div>
            <div className='filter__item'>
                <label htmlFor='teleworking_check'>Teletrabajo</label>
                <input
                  type='checkbox'
                  id='teleworking_check'
                  onChange={handleTeleworkingChange}
                  checked={isTelework}
                />
            </div>
            <div className='filter__item'>
                <label>Provincia</label>
                <input
                  type='text'
                />
            </div>
            <button className='accent' onClick={handleSubmit} disabled={formInvalid}>Buscar</button>
        </div>
  )
}
