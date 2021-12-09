import React, { useState, useEffect } from 'react'
const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  // const [user, setUser] = useState({ name: 'Felix', age: 25, email: 'felix@gmail.com' })

  // useEffect(() => {
  //   console.log('use effect ')
  // }, [count, age])
  // useEffect(() => {
  //   console.log('use effect ')
  //   return () => {
  //     console.log('func comp unmounted')
  //   }
  // }, [count, age])
  useEffect(() => {
    // count !== 0 && alert(`new notification, total: ${count} `)
    console.log('UseEffect')
    let timeOut = setTimeout(() => {
      alert('Hello')
    }, 3000)
    return () => {
      clearTimeout(timeOut)
      console.log('Func Comp Unmounted')
    } //! clean up
  }, [count])

  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(count + 1)
  // const updateUser = () => setUser({ ...user, name: 'John' })
  count !== 0 && alert(`new notification, total: ${age}`)
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>increase</button>
      <p>Age: {age}</p>
      <button onClick={increaseAge}>increase age</button>
      {/* <p>Name:{user.name} </p>
      <p>Age:{user.age} </p>
      <p>Email:{user.email} </p>
      <button onClick={updateUser}>Update User</button> */}
    </div>
  )
}

export default FunctionalComponent
