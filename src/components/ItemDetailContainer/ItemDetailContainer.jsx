import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"

import { db } from "../../firebase/config"
import { collection, doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItems] = useState()
    const { productId } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "products")
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc)
            .then((doc) => {
                setItems({ ...doc.data() })
            })
            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1000,
                    title: error
                });
            })
        setLoading(false)

    }, [productId])
    return loading ? <Spinner /> : <ItemDetail item={item} />
}

export default ItemDetailContainer
