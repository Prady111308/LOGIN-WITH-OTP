import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhoneOtpLogin from './component/PhoneOtpForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhoneOtpLogin />
    </>
  )
}

export default App
