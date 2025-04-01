import { useState } from "react"
import styles from './ItemCount.module.css'

function ItemCount(){
    const [count, setCount] = useState (0)

    const handleSub = () => {
        setCount (count - 1)
    }

    const handleAdd = () => {
        setCount (count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button className={styles.button} onClick={handleSub}>-</button>
            <button className={styles.button} onClick={handleAdd}>+</button>
            <button className={styles.button}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount