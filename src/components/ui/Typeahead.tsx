import { useState } from 'react'
import { type Category } from '../../types'
import './Typeahead.css'

export function Typeahead (props: { id: string | undefined, options: Category[], placeholder: string }) {
  const { id, options, placeholder } = props

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [filteredOptions, setFilteredOptions] = useState<Category[] | []>(options)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!value) {
      setShowDropdown(false)
      setSelectedCategory(null)
    }
    const filtered = options.filter(item => item.label.toLowerCase().includes(value.toLowerCase().trim()))
    setFilteredOptions(filtered)
    setShowDropdown(filtered.length > 0)
  }

  const handleClick = () => {
    setShowDropdown(true)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false)
    }, 100)
  }

  const handleSelectItem = (item: Category) => {
    setSelectedCategory(item)
  }

  return (
    <>
      <input
        id={id ?? 'typeahead'}
        className='typeahead__input'
        type='text'
        value={selectedCategory?.label}
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
                onClick={() => { handleSelectItem(option) }}
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
