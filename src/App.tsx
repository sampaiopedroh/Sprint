import { useState } from 'react'
// import {Header} from './components/Header'
// import {Footer} from './components/Footer'
import { HomePage } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { KeepUp } from './pages/KeepUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <HomePage />
    // <AboutUs />
    <KeepUp />
  )
}

export default App
