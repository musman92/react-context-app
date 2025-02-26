import { ThemeProvider } from "./contexts/ThemeContexts"
import Navbar from "./components/Navbar"
import ExampleComponent from "./components/ExampleComponent"

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <ExampleComponent />
      </ThemeProvider>
    </>
  )
}

export default App
