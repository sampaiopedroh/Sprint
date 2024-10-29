import { useState } from 'react'
// import {Header} from './components/Header'
// import {Footer} from './components/Footer'
import { HomePage } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { KeepUp } from './pages/KeepUp'
// import { Chat } from './components/Chat'
import { Calendar } from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePage />
  )
}

export default App
