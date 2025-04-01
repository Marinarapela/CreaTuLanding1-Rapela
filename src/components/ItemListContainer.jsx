import "../App.css"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { withLoading } from "../hoc/withLoading"


const ItemListWithLoading = withLoading(ItemList)
function ItemListContainer () {
    const [items, setItems] = useState ([]) 
    const { id } = useParams()
    
    useEffect (() => {
        const allProducts = 'https://dummyjson.com/products'
        const productsByCategory = `https://dummyjson.com/products/category/${id}`

        fetch (id ? productsByCategory : allProducts)
        .then (res => res.json())
        .then (data => setItems (data.products))
    }, [id])
    
    return (
        <ItemListWithLoading items = {items} />
    )
}


export default ItemListContainer