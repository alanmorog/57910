import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsId } from "../../utils/MockData"
import Spinner from "../Spinner/Spinner"



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItems] = useState()
    const { productId} = useParams()

    useEffect(()=> {
        getProductsId(productId)
            .then((product) => {
                setItems(product)

                setLoading(false)
            })

    }, [productId]) 
    return loading ? <Spinner/> : <ItemDetail item={ item } />
}

export default ItemDetailContainer
