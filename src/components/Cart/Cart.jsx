import styles from "./Cart.module.scss"
import React, { useState } from 'react'
import { useCartContext } from "../../routing/context/cartContext"
import Swal from 'sweetalert2'
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



const Cart = () => {
    const { cart, total, clearCart, itemsTotal, setCart, setItemsTotal, setTotal } = useCartContext();
    const [ordenSend, setOrdenSend] = useState("");
    const [saveCart, setSaveCart] = useState([{ productos: cart }]);
    const [saveTotal, setSaveTotal] = useState([{ total: total }]);

    const limpiarCart = () => {
        clearCart();
    }

    const clearItemCart = (cod, qty, price) => {
        const updateItemsTotal = itemsTotal - qty
        setItemsTotal(updateItemsTotal);
        const actualizarCart = cart.filter(products => products.item.cod !== cod);
        setCart(actualizarCart);
        setTotal(total - price * qty)
    }

    const FinalizaCompra = () => {
        const ordenCompra = { productos: cart, total: total }
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, ordenCompra)
            .then((doc) => {
                setOrdenSend(doc.id)
            })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "La compra fue realizada con exito",
            showConfirmButton: false,
            timer: 1000
        });
        clearCart();
    }

    if (ordenSend) {
        return (
            <div className={styles.cart__estilo__}>
                <h1>Se realizo con exito la compra!!</h1>
                <p>Tu  orden es: {ordenSend}</p>
                {
                    saveCart.map((prod) => (
                        prod.productos.map((arch) => (
                            (
                                <div key={arch.item.cod}>
                                    <h2>Categoria: {arch.item.category}</h2>
                                    <h3>Cantidad: {arch.quantity}</h3>
                                    <h4>Nombre: {arch.item.nombre}</h4>
                                    <p>Modelo: {arch.item.modelo}</p>
                                </div>
                            )
                        ))
                    ))
                }
                {
                    saveTotal.map((total, index) => (
                        <div key={index}>
                            <h2>Total: ${total.total}</h2>
                        </div>
                        
                    ))
                }
            </div>
        )
    }

    return (
        <div className={styles.cart__estilo}>
            <h2>Carrito de Compras</h2>
            {
                cart.map((products) => (
                    <div key={products.item.cod} className={styles.cart__estilo__data}>
                        <h2>{products.item.nombre}</h2>
                        <h4>{products.item.modelo}</h4>
                        <p>Cantidad: {products.quantity}</p>
                        <p>Precio por unid. ${products.item.precio}</p>
                        <p>Precio subtotal. ${products.item.precio * products.quantity}</p>
                        <button onClick={() => clearItemCart(products.item.cod, products.quantity, products.item.precio)}>Borrar Articulo</button>
                    </div>
                ))
            }
            {cart.length > 0 ?
                <div className={styles.cart__estilo__total}>
                    <button onClick={limpiarCart}>Limpiar Carrito</button>
                    <h3>El total es: ${total}</h3>
                    <button onClick={FinalizaCompra}>finalizar Compra</button>
                </div> :
                <h3>El carito se encuentra vacío </h3>
            }

        </div>

    )
}

export default Cart
