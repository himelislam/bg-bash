import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RemoveBackground from './components/RemoveBackground';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-tektur">
      <Navbar />
      <div className="min-h-96	">
        <RemoveBackground />
      </div>
      <Footer />
    </div>
  )
}

export default App
