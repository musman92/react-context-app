import useTheme from '../hooks/ThemeHooks'
import React from 'react'

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav>
      <div className='container'>
        <a href="#" className="logo">Logo {theme}</a>
        <button id="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <span className="light-icon">☀️</span>
          ) : (
            <span className="dark-icon">🌙</span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar