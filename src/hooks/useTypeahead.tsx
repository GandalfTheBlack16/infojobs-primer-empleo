import { useState } from 'react'
import { type Category } from '../types'

export function useTypeahead (options: Category[]) {
  const [textField, setTextField] = useState<string>('')
  const [filteredOptions, setFilteredOptions] = useState<Category[] | []>(options)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTextField(value)
    if (!value) {
      setShowDropdown(false)
    }
    const filtered = options.filter(item => item.label.toLowerCase().includes(value.toLowerCase().trim()))
    setFilteredOptions(filtered)
    setShowDropdown(filtered.length > 0)
  }

  const handleClick = () => {
    setShowDropdown(true)
  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const inputValue = event.target.value
      if (inputValue === '' || !filteredOptions.find(item => item.label === inputValue)) {
        handleSelectItem(null)
        setFilteredOptions(options)
      }
      setShowDropdown(false)
    }, 200)
  }

  const handleSelectItem = (item: Category | null) => {
    setTextField(item ? item.label : '')
  }

  return {
    textField,
    filteredOptions,
    showDropdown,
    handleChange,
    handleClick,
    handleBlur,
    handleSelectItem
  }
}
