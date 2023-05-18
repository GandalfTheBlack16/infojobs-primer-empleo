import { type Category } from '../../types'
import './Typeahead.css'
import { useTypeahead } from '../../hooks/useTypeahead'

export function Typeahead (props: { id: string | undefined, options: Category[], placeholder: string, onTypeaheadChange: (category: Category) => void }) {
  const { id, options, placeholder, onTypeaheadChange } = props

  const {
    textField,
    filteredOptions,
    showDropdown,
    handleChange,
    handleClick,
    handleBlur,
    handleSelectItem
  } = useTypeahead(options)

  const handleCategoryChange = (category: Category) => {
    handleSelectItem(category)
    onTypeaheadChange(category)
  }

  return (
    <>
      <input
        id={id ?? 'typeahead'}
        className='typeahead__input'
        type='text'
        value={textField}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
      />
      <div className={showDropdown ? 'dropdown_list' : 'hidden'}>
        <ul>
          {
            filteredOptions.map(option => {
              return (
              <li
                key={option.key}
                onClick={() => { handleCategoryChange(option) }}
              ><span>{option.label}</span>
              </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}
