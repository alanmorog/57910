import "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.scss"
import { Link } from "react-router-dom"
import  {getProducts, getCategories}  from "../../utils/MockData"
import React, { useEffect, useState } from "react";
import Cart from ".././Cart/Cart"



const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories)
        })
    }, [categories])



    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.logo}>
                <Logo/>
            </Link>
            <div className={styles.links}>
                <Link to='/products' className={styles.linked}>Todos los Productos</Link>
                {categories.map((category, index) => (
                    <Link to={`/products/${category.category}`}
                        key={index}
                        className={styles.linked}>
                        {category.category}
                    </Link>
                ))}
            </div>
            <div>
            <Link to='/products/cart'>
                <CartWidget/>
            </Link>
                
            </div>
        </div>
    )
}

export default NavBar