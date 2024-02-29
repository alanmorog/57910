import { db } from "./config"
import {collection, addDoc} from "firebase/firestore"
import { products } from "../utils/MockData.js"

export const importProducts = async () => {
    const productsCollection = collection(db, "products")

    products.forEach(({cod, nombre, modelo, description, precio, stock,image,category }) => { 
        addDoc(productsCollection, {
            cod,
            nombre,
            modelo, 
            description,
            precio, 
            stock,
            image,
            category
        }).then((docRef) => {
        console.log(docRef)
        console.log(docRef.id)
    })
})
}


