import React from 'react'
import { useState } from 'react'
const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  const increase = () => setCount(count + 1)

  // const increase = ()=>{
  //   setCount(count+1)
  // }
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>increase</button>
    </div>
  )
}

export default FunctionalComponent
