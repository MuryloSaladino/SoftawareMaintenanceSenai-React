import Header from './components/Header'

function App({ children }) {

  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default App
