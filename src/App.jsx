import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import { useEffect } from 'react'

function App({ children }) {

  const navigate = useNavigate()

    useEffect(() => {
        navigate("/products")
    }, [])

  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default App
