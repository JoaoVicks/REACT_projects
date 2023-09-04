
import { useState } from "react"
import './App.css'
import Todoform from "../componentes/Todoform"
import Todo from "../componentes/todo"
import Search from "../componentes/Search";



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: ' Trabalho',
      isCompleted: false

    },
    {
      id: 2,
      text: 'ir para academia',
      category: ' Pessoal',
      isCompleted: false,

    },

    {

      id: 3,
      text: 'Estudar React',
      category: ' Estudos',
      isCompleted: false

    }
  ]);
  const [search,setsearch] = useState("")

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    const newTodo = [...todos];
    const filterTodo = newTodo.filter((todo) =>
    todo.id!== id ? todo :null
    );
    setTodos(filterTodo)
  };
const completeTodo = (id)=>{
  const newTodos = [...todos];
  newTodos.map((todo)=> todo.id === id? todo.isCompleted = !todo.isCompleted : todo )
  
  setTodos(newTodos)
  
}



    return (

      <div className="app">
        <h1>Lista de tarefas</h1>
        <Search search={search} setsearch={setsearch} />
        <div className="todo-list">
        {todos
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo = {completeTodo} />

          ))}
        </div>

        <Todoform addTodo={addTodo} />


      </div>

    )}

  export default App