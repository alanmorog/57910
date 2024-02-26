import React from 'react'
import NavBar from "../NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from '../PageNotFound/PageNotFound'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import PrivateRoute from '../../routing/context/PrivateRoute'
import CartProvider from "../../routing/context/cartContext"


const Dashboard = ({ children }) => {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={children} />
                    <Route path="/products" element={children} />
                    <Route path="/products/teclado" element={<PrivateRoute/>} >
                    <Route path="/products/teclado" element={children} />
                    </Route>
                    <Route path="/products/:categoryId" element={children} />
                    <Route path="/product/:productId" element={<ItemDetailContainer></ItemDetailContainer>} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default Dashboard
