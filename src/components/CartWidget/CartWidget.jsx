import styles from "./CartWidget.module.scss"
import cartwidget from "./assets/cartwidget.svg"
import { useCartContext } from "../../routing/context/cartContext"
import Cart from ".././Cart/Cart"


const CartWidget = () => {
    const {itemsTotal} = useCartContext()
    return (
        <div className={styles.estilos}>
            <img src={cartwidget} alt="cart-widget"/>
            <p>{itemsTotal}</p>
            
        </div>
    )
}

export default CartWidget