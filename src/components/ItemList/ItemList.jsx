import React from "react"
import styles from "./ItemList.module.scss"
import Item from "../Item/Item";

const ItemList = ({itemList}) => {
    return (
            <div className={styles.itemlist}>
                {itemList.map(({id, nombre,modelo, description, precio, stock, image}, index)=> {

                    return  (
                    <Item
                    key= {index}
                    id = {id}
                    nombre = {nombre}
                    modelo = {modelo}
                    description = {description}
                    precio = {precio}
                    stock = {stock}
                    image= {image}
                    />
                    )
                })}
            </div>
    )
}

export default ItemList
