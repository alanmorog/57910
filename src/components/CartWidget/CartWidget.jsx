import styles from "./CartWidget.module.scss"
import cartwidget from "./assets/cartwidget.svg"
import { useCartContext } from "../../routing/context/cartContext"

const CartWidget = () => {
    const {itemsTotal} = useCartContext()
    return (
        <div className={styles.cartwidget}>
            <img src={cartwidget} alt="cart-widget"/>
            <p>{itemsTotal}</p>
        </div>
    )
}

export default CartWidget