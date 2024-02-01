import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

const Home = () => {
    return (
        <Dashboard>
            {<ItemListContainer></ItemListContainer>}
        </Dashboard>
    );
};

export default Home
