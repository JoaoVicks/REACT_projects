import React from 'react'

const Todo = ({todo , removeTodo ,completeTodo }) => {
  return (
    <div className="todo" >
    <div className="content">
      <p style={{ textDecoration: todo.isCompleted  === true ? "line-through" : "" }}>{todo.text}</p>
      <p style={{ textDecoration: todo.isCompleted  === true ? "line-through" : "" }}  className="category" >({todo.category})</p>
      
    </div>
    <button className='complete' onClick={()=> completeTodo(todo.id)} >Completar</button>
    <button className='remove' onClick={()=> removeTodo(todo.id)}>x</button>
  </div>
  )
}

export default Todo