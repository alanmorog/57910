import React from 'react'
import NavBar from "../NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageNotFound from '../PageNotFound/PageNotFound'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const Dashboard = ({children}) => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={  children }/>
                <Route path="/products" element={  children }/>
                <Route path="/products/:categoryId" element={  children }/>
                <Route path="/product/:productId" element={  <ItemDetailContainer></ItemDetailContainer> }/>
                <Route path="*" element={  <PageNotFound/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Dashboard
