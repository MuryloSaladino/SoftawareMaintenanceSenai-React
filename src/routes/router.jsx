import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProductsPage from '../pages/ProductsPage'
import RickAndMortyPage from '../pages/RickAndMortyPage'
import MapPage from '../pages/MapPage'
import ChartsPage from '../pages/ChartsPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App><ProductsPage/></App>,
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
    {
        path: "/charts",
        element: <App><ChartsPage/></App>
    },
])

export default router