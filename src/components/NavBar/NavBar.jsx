import "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.scss"




function NavBar() {
    return (
        <>
            
            <nav className={styles.navbar}>
            <Logo />
                {/* <h3>MusicShop</h3> */}
                <div className={styles.links}>
                    <button>Todos</button>
                    <button>Guitarras</button>
                    <button>Bajos</button>
                    <button>Baterias</button>
                    <button>Teclas</button>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar