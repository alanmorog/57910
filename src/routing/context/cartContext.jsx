import { createContext, useContext, useState, useEffect } from "react"

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
        if (isInCart(item.cod)){
            const newCart = cart.map((cartItem) => {
                if (cartItem.item.cod === item.cod) {
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


    const clearCart = () => {
        setCart([]);
        setItemsTotal(0);
        setTotal(0);
    }

    const isInCart = (cod) => cart.find((item) => item.item.cod === cod)

    const valorDelContexto = { cart, setCart, itemsTotal, addItem, total, setTotal ,clearCart,setItemsTotal}


    return <Provider value={valorDelContexto}> {children} </Provider>
}

export default CartProvider