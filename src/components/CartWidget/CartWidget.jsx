
import cartwidget from "./assets/cartwidget.svg"
import { useCartContext } from "../../routing/context/cartContext"

const CartWidget = () => {
    const {itemsTotal} = useCartContext()
    return (
        <div>
            <img src={cartwidget} alt="cart-widget"/>
            <p>{itemsTotal}</p>
        </div>
    )
}

export default CartWidget