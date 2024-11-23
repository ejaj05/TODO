import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";

const Todo = () => {
  const [input, setinput] = useState('')
  const [todos, setTodos] = useContext(TodoContext)
  const handleAdd = ()=>{
    if(input.trim()){
      setTodos([...todos, { id: new Date(), text: input, completed: false }])
      localStorage.setItem('todos', JSON.stringify([...todos, { id: new Date(), text: input, completed: false }]))
      setinput('')
    }
  }
  return (
    <div className="max-w-screen-sm flex flex-col justify-center items-center m-auto px-4 md:px-0">
      <h1 className="text-3xl font-semibold text-white">Manage Your Todos</h1>
      <div className="w-full flex mt-5">
        <input
          onChange={(e)=>setinput(e.target.value)}
          value={input}
          required
          type="text"
          placeholder="Add a new todo"
          className="py-2 text-lg px-4 text-white flex-1 bg-slate-600 rounded-l-md border-none outline-none"
        />
        <button onClick={handleAdd} className="py-2 px-4 text-lg font-semibold  bg-green-700 text-white rounded-r-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default Todo;
