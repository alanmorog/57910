import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { importProducts } from '../../firebase/importProducts'

const Home = () => {
    return (
        <Dashboard>
            {/* <button onClick={importProducts}>Import First Time</button> */}
            {<ItemListContainer></ItemListContainer>}
        </Dashboard>
    );
};

export default Home
