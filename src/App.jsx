import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import style from './App.module.css'
import RickAndMortyPage from './pages/RickAndMortyPage'
import MapPage from './pages/MapPage'
import ProductsPage from './pages/ProductsPage'
import Header from './components/Header'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")


  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page])

  return (
    <>
      <Header setShow={setShow}/>
      <div  className={style.wrapPage}>
        <ProductsPage/>
      </div>
    </>
  )
}

export default App
