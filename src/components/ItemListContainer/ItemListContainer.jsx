import styles from "./ItemListContainer.module.scss"

import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import {products} from "../../utils/MockData";

function ItemListContainer({ }) {

    const[items, setItems] = useState([]);

    useEffect(() => {
        setItems(products);
    }, []);


    return (
        <>
            <ItemList itemList={items}/>
            <div className={styles.itemListContainer}>
                <div className="saludo"></div>
            </div>
        </>
    )
}

export default ItemListContainer;