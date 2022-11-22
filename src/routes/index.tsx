import { Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../Layout/default'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Produtos } from '../pages/Produtos'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/io-tech' element={<LayoutDefault />}>
                <Route path='/io-tech/home' element={<Home />} />
                <Route path='/io-tech/Produtos' element={<Produtos />} />
            </Route>
        </Routes >
    )
}