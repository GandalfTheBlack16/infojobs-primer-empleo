import './FilterBox.css'
import { TypeAhead } from './TypeAhead'

export function FilterBox () {
  return (
        <div className="filter__box">
            <div className='filter__item'>
                <label>Categoria</label>
                <TypeAhead />
            </div>
        </div>
  )
}
