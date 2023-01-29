import React from 'react'
import '../Style/pc.css'
import { useState } from 'react'

const PComponent = () => {
    const [counter, setcounter] = useState(0)
    const btnChange = () => {
        setcounter(counter + 1)
        console.log(counter)

    }

    return (
        <div className='card'>
            <h1 className='text'>Pure Component</h1>
            <button onClick={btnChange} className='btn flex'>Click to increment</button>
            <h2 className='text'>Check console to  see the Result</h2>
        </div>
    )
}

export default PComponent