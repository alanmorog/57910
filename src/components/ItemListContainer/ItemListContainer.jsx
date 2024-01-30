import styles from "./ItemListContainer.module.scss"
import Spinner from "../Spinner/Spinner"
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"
import { getProducts } from "../../utils/MockData";



const ItemListContainer = ({ }) => {


    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId){
                    const filteredProducts = res.filter(
                        (res) => res.category === categoryId
                    )
                    setItems(filteredProducts)
                    setLoading(false)
                }else {
                    setItems(res);
                    setLoading(false);
                }
            })
    }, [categoryId]);
    return  loading ? (
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