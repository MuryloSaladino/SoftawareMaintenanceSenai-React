import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import RedirectComponent from '../components/RedirectComponent'
import ProductsPage from '../pages/ProductsPage'
import RickAndMortyPage from '../pages/RickAndMortyPage'
import MapPage from '../pages/MapPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "*",
        element: <RedirectComponent/>,
    },
    {
        path: "/products",
        element: <App><ProductsPage/></App>
    },
    {
        path: "/rickandmorty",
        element: <App><RickAndMortyPage/></App>
    },
    {
        path: "/map",
        element: <App><MapPage/></App>
    },
])

export default router