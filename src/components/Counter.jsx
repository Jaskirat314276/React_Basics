import React from 'react'

const Counter = () => {
    const [count, setCount]=useState(0);
  return (
    <div className='counter-container'>
        <p id='para'> You have clikced {count} times</p>
        <button id='btn' onClick={()=>{setCount(count+1)}}>Click me</button>

      
    </div>
  )
}

export default Counter
