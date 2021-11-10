import React , { useState } from 'react'
import './style.css'

const ItemCounter = () => {
    const [count, setCount] = useState(1)

    const buttonHandler = (type) => {
        if (type === "increase") {
            setCount(count + 1);
        }
        else if (type === "decrease" && count !== 1) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className="item-counter">
            <button onClick={() => buttonHandler("decrease")}>-</button>
            {count}
            <button onClick={() => buttonHandler("increase")}>+</button>
        </div>
    )
}

export default ItemCounter
