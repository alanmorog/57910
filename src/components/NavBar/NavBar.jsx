import "../CartWidget/CartWidget"
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return (
        <nav className="barra">
            <h3>MusicShop</h3>
            <div>
                <button>Guitarras</button>
                <button>Bajos</button>
                <button>Baterias</button>
                <button>Teclas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar