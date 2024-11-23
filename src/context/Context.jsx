import React, { createContext, useEffect, useState } from 'react'

export const TodoContext = createContext()
const Context = (props) => {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    if(localStorage.getItem('todos'))setTodos(JSON.parse(localStorage.getItem('todos')))
  },[])
  return (
    <TodoContext.Provider value={[todos,setTodos]}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default Context