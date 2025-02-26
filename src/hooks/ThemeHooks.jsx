import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContexts'

function useTheme() {
  const context = useContext(ThemeContext)
  return context
}

export default useTheme