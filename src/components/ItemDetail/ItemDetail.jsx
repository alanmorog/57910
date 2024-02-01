import styles from "./ItemDetail.module.scss"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
        const {nombre, precio, image, description, modelo} = item;

        const onAdd = (count) => {
            console.log(`Agregaste ${count} ${nombre} ${modelo} al carrito`)
        }
    
    return (
        <div className={styles.parent}>
            <div className={styles.item}>
                <div className={styles.itemImg}>
                    <img src={image} alt={nombre} />
                </div>
                <div className={styles.item__info}>
                    <h2 className={styles.item__info__title}>{nombre}</h2>
                    <h3 className={styles.item__info__modelo}>{modelo}</h3>
                    <p className={styles.item__info__description}> {description} </p>
                    <p className={styles.item__info__precio}> ${precio} </p>
                </div>
                
            </div>
            <ItemCount onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
