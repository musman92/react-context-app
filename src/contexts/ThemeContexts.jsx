import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {}
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      <main className={theme === 'dark' ? 'body dark-mode' : 'body light-mode'}>
        { children}
      </main>
    </ThemeContext.Provider>
  )
}