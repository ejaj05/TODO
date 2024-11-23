import React from 'react'
import TodoForm from './Components/TodoForm'
import TodosList from './Components/TodosList'

const App = () => {
  return (
    <div className='h-screen px-4 md:px-0 bg-blue-950 pt-10'>
      <TodoForm/>
      <TodosList/>
    </div>
  )
}

export default App