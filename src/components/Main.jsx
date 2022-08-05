import { useState } from 'react'

export default function Main() {
    const [count, setCount] = useState(1)
    let num1 = 0
    const handleClick = () => num1 = 3
    return (
        <main>  
            <p> 
            
            </p>
            <h3>Counter: {count}</h3>
            <button onClick={() => {
            handleClick()
            }}>3</button>
            <button onClick={() => {
                setCount(count * num1)
            }}>times</button>
            <button onClick={() => setCount(count + 1)}>add</button>
        </main>
    )
}