import { createContext, useContext, useState } from "react"

const cartContext = createContext()

const { Provider } = cartContext

export const useCartContext = () => useContext(cartContext)


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [itemsTotal, setItemsTotal] = useState(0) //cantidad de items que va a tener el carrito

    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        setItemsTotal(itemsTotal + quantity)
        setTotal(total + item.precio * quantity)
        if (isInCart(item.id)){
            const newCart = cart.map((cartItem) => {
                if (cartItem.item.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity }
                } else {
                    return cartItem
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, {item, quantity} ])
        }
    }

    const isInCart = (id) => cart.find((item) => item.item.id === id)


    const valorDelContexto = { cart, itemsTotal, addItem}


    return <Provider value={valorDelContexto}> {children} </Provider>
}

export default CartProvider