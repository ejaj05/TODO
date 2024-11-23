import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";

const TodosList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const handleRemove = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo, i) => i !== index)));
  };
  const handleEdit = (id) => {
    let newTodo = prompt("Update Your Todo",todos[id].text)
    setTodos(()=>{
      return todos.map((item,i)=>{
        if(i===id){
          return {...item, text: newTodo}
        }
        return item
      })
    })
  }
  const handleDone = (id)=>{
    setTodos(()=>{
      return todos.map((item,i)=>{
        if(i===id){
          return {...item, completed:!item.completed}
        }
        return item
      })
    })
    localStorage.setItem('todos', JSON.stringify(todos.map((item,i)=>i == id ? {...item,completed:!item.completed}:item)))
  }
  console.log(todos)
  return (
    <ul className="max-w-screen-sm m-auto flex flex-col mt-4 w-full gap-4  px-4 md:px-0">
      {todos?.map((todo, idx) => (
        <li key={idx} className="bg-pink-300 rounded-md px-4 py-2 flex items-center justify-between">
          <span>
            <input checked={todo.completed && true} onChange={()=>handleDone(idx)} type="checkbox" />
            <span className={`ml-4 text-lg ${todo.completed && 'line-through'}`}>{todo.text}</span>
          </span>
          <button>
            <span onClick={()=>handleEdit(idx)} className="p-1 text-lg bg-white rounded-md mr-4">🖊️</span>
            <span onClick={()=>handleRemove(idx)} className="p-1 text-lg bg-white rounded-md">❌</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
