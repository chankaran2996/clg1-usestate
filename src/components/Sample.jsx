import React, { useState } from 'react'

const Sample = () => {
    const [count , setCount] = useState(0)
    const [text, setText] = useState('')

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    console.log(text)
  return (
    <div className='flex'>
        {/* increment decrement using state */}
        <button 
        className='bg-blue-500 text-white 
        px-4 py-2 rounded'
        onClick={increment}
        >+</button>
        <p className='mx-4'>{count}</p>
        <button 
        className='bg-red-500 text-white 
        px-4 py-2 rounded'
        onClick={decrement}
        >-</button>
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='border border-gray-300 rounded px-4 py-2 ml-4'
        placeholder='Enter text'
        />
    </div>
  )
}

export default Sample