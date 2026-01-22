import { useState, useRef, useEffect } from 'react'
import { MdFastfood, MdDirectionsBus, MdMovie, MdLightbulb, MdLocalHospital, MdSchool, MdShoppingCart, MdCategory, MdArrowDropDown } from 'react-icons/md'

const categories = [
  { value: 'Food', label: 'Food', icon: MdFastfood, color: 'text-orange-600' },
  { value: 'Transport', label: 'Transport', icon: MdDirectionsBus, color: 'text-blue-600' },
  { value: 'Entertainment', label: 'Entertainment', icon: MdMovie, color: 'text-purple-600' },
  { value: 'Utilities', label: 'Utilities', icon: MdLightbulb, color: 'text-yellow-600' },
  { value: 'Healthcare', label: 'Healthcare', icon: MdLocalHospital, color: 'text-red-600' },
  { value: 'Education', label: 'Education', icon: MdSchool, color: 'text-green-600' },
  { value: 'Shopping', label: 'Shopping', icon: MdShoppingCart, color: 'text-pink-600' },
  { value: 'Other', label: 'Other', icon: MdCategory, color: 'text-gray-600' }
]

function CategoryDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const selectedCategory = categories.find(cat => cat.value === value)
  const SelectedIcon = selectedCategory.icon
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const handleSelect = (category) => {
    onChange(category.value)
    setIsOpen(false)
  }
  
  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          <SelectedIcon className={`text-2xl ${selectedCategory.color}`} />
          <span className="text-gray-900 font-medium">{selectedCategory.label}</span>
        </div>
        <MdArrowDropDown className={`text-2xl text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = category.value === value
            
            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleSelect(category)}
                className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition ${
                  isSelected ? 'bg-blue-50' : ''
                }`}
              >
                <Icon className={`text-2xl ${category.color}`} />
                <span className={`font-medium ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>
                  {category.label}
                </span>
                {isSelected && (
                  <span className="ml-auto text-blue-600 text-sm">✓</span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CategoryDropdown
