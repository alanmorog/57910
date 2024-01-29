import React from "react";
import styles from './Item.module.scss'

const Item = ({id, nombre, modelo , description, precio, stock, image}) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImg}>
                <img src={image} alt={nombre} />
            </div>
            <div className={styles.item__info}>
                <h2 className={styles.item__info__title}>{nombre}</h2>
                <h3 className={styles.item__info__modelo}>{modelo}</h3>
                {/* <p className={styles.item__info__description}>{description}</p> */}
                <p className={styles.item__info__precio}>${precio}</p>
                {/* <p className={styles.item__info__stock}> Stock: {stock}</p> */}
            </div>
        </div>
    )
}

export default Item
