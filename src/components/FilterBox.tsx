import './FilterBox.css'
import { useFilterbox } from '../hooks/useFilterbox'
import { useCategories } from '../hooks/useCategories'
import Select from 'react-select'
import { Dialog } from './ui/Dialog'

export function FilterBox () {
  const { categories, loading } = useCategories()

  const { 
    formInvalid,
    isTelework,
    location,
    geolocationDetails,
    handleCategoryChange,
    handleTeleworkingChange,
    handleLocation,
    handleSubmit
  } = useFilterbox()

  const { city, country, disabled: geoDisabled, error: geoError } = geolocationDetails

  return (
        <form
          className="filter__box"
          onSubmit={handleSubmit}
        >
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
                  value={location}
                  onChange={handleLocation}
                />
                {
                  !geoDisabled && 
                  !geoError &&
                    <Dialog>
                      <span>Localizacion configurada por tu posicion actual: <b>{ city }, { country }</b> </span>
                    </Dialog>
                }
            </div>
            <button
              type='submit'
              className='accent'
              disabled={formInvalid}
            >Buscar</button>
        </form>
  )
}
