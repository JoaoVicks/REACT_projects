
import { useState } from 'react'

const Todoform = ({addTodo}) => {
    const[value,setvalue]=useState("")
    const[category,setcategory]=useState("")

    const handleSubmit = (e) => {
     e.preventDefault();   
     if(!value || !category) return
     addTodo (value,category)
     setvalue('')
     setcategory('')
     console.log(value,category)
    }
    return (
    <div className="todo-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit} >
            <input value={value}
            type="text" 
            placeholder='digite o titulo' 
            onChange={(e) => setvalue(e.target.value)}/>

            <select value={category}  onChange={(e) => setcategory(e.target.value)}>
            <option>Selecione uma Categoria</option>
            <option value="Trabalho">Trabalho </option>
            <option value="Estudo">Estudo</option>
            <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
    )
}

export default Todoform