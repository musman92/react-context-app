import React from 'react'
import useTheme from '../hooks/ThemeHooks'

function ExampleComponent() {
  const { theme } = useTheme();
  return (
    <main className="container">
      <h1>Welcome! {theme}</h1>
      <p>This is some example text that will change color based on the theme.</p>
      <div className="box">
          This is a box that will also change appearance.
      </div>
      <button className="my-button">A Button</button>
    </main>
  )
}

export default ExampleComponent