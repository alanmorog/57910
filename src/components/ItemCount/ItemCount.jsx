import React from 'react'
import { useState } from 'react'
/* import ItemListContainer from '../ItemListContainer/ItemListContainer'; */

const ItemCount = ({ onAdd}) => {
    const [count, setCount] = useState(1)


    const onChangeHandler = (event) => {
        setCount(Number(event.target.value))
    }
    return (
        <div>
            <div>
                <input type="button" value="-" onClick={() => (count > 1 ? setCount(count-1): setCount(1))} />
                <input type="number" value={count} onChange={onChangeHandler}/>
                <input type="button" value="+" onClick={() => (count < 99 && setCount(count + 1))} />
                <input 
                type="button" 
                value="Agregar al carrito" 
                onClick={() => onAdd(count)}
                />
            </div>
            
        </div>
    )
}

export default ItemCount
