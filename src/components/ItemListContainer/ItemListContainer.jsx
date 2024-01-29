import styles from "./ItemListContainer.module.scss"
import Spinner from "../Spinner/Spinner"
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import { getProducts } from "../../utils/MockData";

const ItemListContainer = ({ }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return items.length === 0 ? (
        <Spinner/>
    ) : (
        <>
            {<ItemList itemList={items} />}
            <div className={styles.itemListContainer}>
            </div>
        </>
    )
}

export default ItemListContainer;