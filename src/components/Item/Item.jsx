import React from "react";
import styles from './Item.module.scss';
import { Link } from "react-router-dom";

const Item = ({id, nombre, modelo , description, precio, stock, image}) => {
    if (image == ""){
        image = "https://us.123rf.com/450wm/momoforsale/momoforsale2105/momoforsale210500063/169348832-no-hay-se%C3%B1al-disponible-de-imagen-aislada-en-la-ilustraci%C3%B3n-de-vector-de-fondo-blanco.jpg"
        
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemImg}>
                <img src={image} alt={nombre} />
            </div>
            <div className={styles.item__info}>
                <h2 className={styles.item__info__title}>{nombre}</h2>
                <h3 className={styles.item__info__modelo}>{modelo}</h3>
                <p className={styles.item__info__precio}>${precio}</p>
                <Link to={`/product/${id}`} className={styles.item__info__Link}>Ver Más</Link>
            </div>
        </div>
    )
}

export default Item
