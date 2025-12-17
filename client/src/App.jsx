import React, { useState } from 'react'
import UseEffectHookWithCondition from './UseEffectHookWithCondition'

const App = () => {
     const [age, setAge] = useState(22);
   const [count, setCount] = useState(0);
  return (
    <div>
      <h2>This is App.jsx file</h2>
      <UseEffectHookWithCondition age={age} count={count}/>
      <button onClick={() => setAge(age + 1)}>Update Age</button>
      <button onClick={() => setCount(count + 1)}>Update Count</button> 
    </div>
  )
}

export default App
